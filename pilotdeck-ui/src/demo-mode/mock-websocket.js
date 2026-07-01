// Replaces `window.WebSocket` so V2's WebSocketContext can `new WebSocket(...)`
// without actually opening a socket. The replacement fakes the open / message
// / close lifecycle and, when the V2 chat sends `pilotdeck-command`, scripts
// a session_created → stream_delta… → complete sequence that the V2 chat
// pipeline ingests verbatim.
//
// Must run BEFORE any V2 module reads `WebSocket` — entry.jsx imports this
// file at the top, before importing App.

import { getDemoReplyText, DEMO_PROVIDER } from './canned-data.js';

const realWebSocket = window.WebSocket;

// Stream-shape tuning to keep the demo feeling responsive without the
// browser melting under React reconciles. ~3 chars / 18 ms is what the
// UltraRAG demo uses and it looks great.
const STREAM_DELTA_CHARS = 4;
const STREAM_DELTA_INTERVAL_MS = 18;
const PRE_STREAM_DELAY_MS = 380;
const COMPLETE_TRAILING_DELAY_MS = 220;

let sessionCounter = 0;
function nextSessionId() {
  sessionCounter += 1;
  const stamp = Date.now().toString(36);
  return `demo-live-${stamp}-${sessionCounter}`;
}

class MockWebSocket {
  constructor(url, protocols) {
    this.url = String(url);
    this.protocols = protocols;
    this.readyState = MockWebSocket.CONNECTING;
    this.binaryType = 'arraybuffer';
    this.bufferedAmount = 0;
    this.extensions = '';
    this.protocol = '';

    // Pure properties — V2 uses `ws.onopen / .onmessage / .onclose / .onerror`
    // assignment style throughout, so we match that shape and also support
    // addEventListener for completeness.
    this.onopen = null;
    this.onmessage = null;
    this.onclose = null;
    this.onerror = null;

    this._listeners = {
      open: new Set(),
      message: new Set(),
      close: new Set(),
      error: new Set(),
    };

    this._activeTimers = new Set();
    this._closed = false;

    // Schedule onopen asynchronously to mimic real WS behaviour. V2 reads
    // socket.readyState === WebSocket.OPEN before sending, and that's only
    // true after `open` fires.
    this._schedule(() => {
      if (this._closed) return;
      this.readyState = MockWebSocket.OPEN;
      this._fire('open', { type: 'open' });
    }, 0);
  }

  // ─── Public API surface that V2 touches ─────────────────────────────────

  send(rawPayload) {
    if (this.readyState !== MockWebSocket.OPEN) {
      console.warn('[demo-mode] WS send while not OPEN, ignored.');
      return;
    }
    let payload;
    try {
      payload = JSON.parse(rawPayload);
    } catch {
      return;
    }
    this._handleSend(payload);
  }

  close(code, reason) {
    if (this._closed) return;
    this._closed = true;
    this._cancelTimers();
    this.readyState = MockWebSocket.CLOSING;
    this._schedule(() => {
      this.readyState = MockWebSocket.CLOSED;
      this._fire('close', {
        type: 'close',
        code: code ?? 1000,
        reason: reason ?? 'demo close',
        wasClean: true,
      });
    }, 0);
  }

  addEventListener(type, listener) {
    if (!this._listeners[type]) return;
    this._listeners[type].add(listener);
  }

  removeEventListener(type, listener) {
    if (!this._listeners[type]) return;
    this._listeners[type].delete(listener);
  }

  // ─── Internal: V2-side outbound message router ─────────────────────────

  _handleSend(payload) {
    const type = payload && typeof payload === 'object' ? payload.type : null;

    switch (type) {
      case 'pilotdeck-command':
        this._handlePilotdeckCommand(payload);
        return;

      case 'abort-session':
        // Confirm the abort instantly with an empty complete.
        this._emit({
          kind: 'complete',
          sessionId: payload.sessionId,
          exitCode: 0,
          aborted: true,
          provider: DEMO_PROVIDER,
          timestamp: new Date().toISOString(),
        });
        return;

      case 'check-session-status':
        this._emit({
          type: 'session-status',
          sessionId: payload.sessionId,
          isProcessing: false,
        });
        return;

      case 'get-pending-permissions':
        this._emit({
          type: 'pending-permissions-response',
          sessionId: payload.sessionId,
          data: [],
        });
        return;

      // session-permission-grant, claude-permission-response,
      // elicitation-response — all no-ops in demo mode.
      default:
        return;
    }
  }

  _handlePilotdeckCommand(payload) {
    const incomingSessionId = payload?.options?.sessionId;
    const isResume = Boolean(incomingSessionId && payload?.options?.resume);
    const sessionId = isResume ? incomingSessionId : nextSessionId();

    // Echo the user's command back as a user message so the live transcript
    // shows what they typed even before any messages payload is refetched.
    const userMessage = String(payload.command ?? '').trim();
    const now = () => new Date().toISOString();

    // For BRAND-NEW sessions only, V2 expects a session_created event so it
    // can swap the optimistic id and navigate. Resumed sessions skip that.
    if (!isResume) {
      this._schedule(() => {
        this._emit({
          kind: 'session_created',
          sessionId,
          newSessionId: sessionId,
          provider: DEMO_PROVIDER,
          timestamp: now(),
        });
      }, 30);
    }

    // Show a "working..." status so the composer flips into the loading
    // state with a Stop button.
    this._schedule(() => {
      this._emit({
        type: 'session-status',
        sessionId,
        isProcessing: true,
        status: {
          text: 'Streaming demo response',
          tokens: 0,
          can_interrupt: true,
        },
      });
    }, 80);

    // Stream the canned reply in small chunks. We deliberately omit any
    // tool_use frames so the demo response feels like plain assistant text.
    const fullText = getDemoReplyText();
    let offset = 0;

    const pushNextChunk = () => {
      if (this._closed) return;
      if (offset >= fullText.length) {
        // Stream is done — flush a stream_end then the complete sentinel.
        this._emit({
          kind: 'stream_end',
          sessionId,
          provider: DEMO_PROVIDER,
          timestamp: now(),
        });
        this._schedule(() => {
          this._emit({
            kind: 'complete',
            sessionId,
            exitCode: 0,
            actualSessionId: sessionId,
            provider: DEMO_PROVIDER,
            timestamp: now(),
          });
        }, COMPLETE_TRAILING_DELAY_MS);
        return;
      }
      const chunk = fullText.slice(offset, offset + STREAM_DELTA_CHARS);
      offset += STREAM_DELTA_CHARS;
      this._emit({
        kind: 'stream_delta',
        sessionId,
        provider: DEMO_PROVIDER,
        content: chunk,
        role: 'assistant',
        timestamp: now(),
      });
      this._schedule(pushNextChunk, STREAM_DELTA_INTERVAL_MS);
    };

    // Give the UI a beat of "thinking" before deltas start so the
    // ProcessTrace status indicator has time to render.
    this._schedule(pushNextChunk, PRE_STREAM_DELAY_MS);

    // Touch the user message so the linter doesn't flag it as unused — we
    // pass it through in case we want richer per-prompt echo later.
    void userMessage;
  }

  // ─── Internal: event plumbing ───────────────────────────────────────────

  _emit(payload) {
    if (this._closed) return;
    const data = JSON.stringify(payload);
    const event = { type: 'message', data };
    this._fire('message', event);
  }

  _fire(type, event) {
    const handler = this[`on${type}`];
    if (typeof handler === 'function') {
      try { handler.call(this, event); } catch (err) { console.error('[demo-mode] handler threw:', err); }
    }
    const listeners = this._listeners[type];
    if (listeners) {
      for (const listener of listeners) {
        try { listener.call(this, event); } catch (err) { console.error('[demo-mode] listener threw:', err); }
      }
    }
  }

  _schedule(fn, delay) {
    const id = setTimeout(() => {
      this._activeTimers.delete(id);
      if (this._closed) return;
      fn();
    }, delay);
    this._activeTimers.add(id);
    return id;
  }

  _cancelTimers() {
    for (const id of this._activeTimers) {
      clearTimeout(id);
    }
    this._activeTimers.clear();
  }
}

// Standard WebSocket readyState constants the real WebSocket exposes.
MockWebSocket.CONNECTING = 0;
MockWebSocket.OPEN = 1;
MockWebSocket.CLOSING = 2;
MockWebSocket.CLOSED = 3;

// Static fields on the constructor itself — the V2 code references both
// `WebSocket.OPEN` and `socket.readyState`. Mirror them on the class too.
Object.defineProperty(MockWebSocket, 'CONNECTING', { value: 0 });
Object.defineProperty(MockWebSocket, 'OPEN', { value: 1 });
Object.defineProperty(MockWebSocket, 'CLOSING', { value: 2 });
Object.defineProperty(MockWebSocket, 'CLOSED', { value: 3 });

window.WebSocket = MockWebSocket;
window.__PILOTDECK_DEMO_MOCK_WS__ = true;
// Keep a handle on the real one for debugging or future fallthrough needs.
window.__PILOTDECK_REAL_WEBSOCKET__ = realWebSocket;
