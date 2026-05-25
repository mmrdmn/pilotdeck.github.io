// Canned data for the public demo build of the PilotDeck UI.
//
// Everything in this module is the static "world" that the mock REST + mock
// WebSocket layer hands back when the V2 frontend boots without a real
// gateway. The V2 components themselves are unmodified.
//
// Shapes mirror types/app.ts (Project, ProjectSession) and the
// NormalizedMessage contract from stores/useSessionStore.ts so the V2 store
// can ingest them verbatim.

const NOW = Date.now();
const minutesAgo = (m) => new Date(NOW - m * 60_000).toISOString();
const hoursAgo = (h) => new Date(NOW - h * 3_600_000).toISOString();
const daysAgo = (d) => new Date(NOW - d * 86_400_000).toISOString();

// One unique provider value the V2 chat pipeline already understands.
const PROVIDER = 'pilotdeck';

// ──────────────────────────────────────────────────────────────────────────
// Canned reply for ANY user submission
// ──────────────────────────────────────────────────────────────────────────

// One stable string shown after every user prompt. The mock WebSocket
// chunks it into stream_delta events to mimic real model streaming.
export const DEMO_REPLY_TEXT = `**Heads up — you're inside the PilotDeck Demo Sandbox.**

This page runs the actual PilotDeck V2 web UI, but every model call is mocked client-side: nothing you type is sent to a real LLM, no files are touched on disk, and no MCP servers are wired up.

What you can still poke at:

- Browse the **WorkSpace sidebar** on the left — switch between projects, scroll through saved sessions
- Open any pre-loaded conversation to see how **ProcessTrace**, tool calls, and markdown messages render
- Type and send anything in the composer — you'll get this same notice back, streamed token-by-token so the chat surface behaves like the real thing

To run PilotDeck for real (live model routing, white-box memory, always-on background execution):

1. \`curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash\`
2. Configure a provider in \`~/.pilotdeck/pilotdeck.yaml\` (OpenAI / Anthropic / DeepSeek / Qwen / Kimi / MiniMax / any OpenAI-compatible endpoint)
3. \`pilotdeck\` → open http://localhost:3001

Full docs and one-line installer: [github.com/OpenBMB/PilotDeck](https://github.com/OpenBMB/PilotDeck).
`;

// ──────────────────────────────────────────────────────────────────────────
// WorkSpace / Project list
// ──────────────────────────────────────────────────────────────────────────

// Shape matches Project from src/types/app.ts. The demo ships a single
// WorkSpace literally named `general` so it lands in V2's dedicated
// "General" sidebar tab (SidebarV2 looks up that exact name to flatten
// its sessions under the default scratchpad section).
const PROJECTS = [
  {
    name: 'general',
    displayName: 'general',
    fullPath: '~/pilotdeck/workspaces/general',
    path: '~/pilotdeck/workspaces/general',
  },
];

// ──────────────────────────────────────────────────────────────────────────
// Sessions per project + their canned NormalizedMessage transcripts
// ──────────────────────────────────────────────────────────────────────────

// Each session has: id, summary (used as title), lastActivity, messageCount,
// plus a `__messages` field consumed only by the mock fetch — it isn't part
// of the wire shape sent over the /api/projects payload.

const SESSIONS = {
  general: [
    {
      id: 'demo-session-tutorial-01',
      summary: 'Welcome to PilotDeck',
      title: 'Welcome to PilotDeck',
      lastActivity: minutesAgo(12),
      createdAt: daysAgo(2),
      messageCount: 4,
      __messages: [
        msgUser(
          'demo-session-tutorial-01',
          minutesAgo(15),
          "I'm new here — what makes PilotDeck different from other AI agent harnesses?",
        ),
        msgAssistantText(
          'demo-session-tutorial-01',
          minutesAgo(14),
          `PilotDeck is built around the **WorkSpace** as the core unit of work, plus three pillars:

### 1. White-box Memory
Generation → extraction → storage → retrieval is fully visible. You can pinpoint and edit any memory entry; Dream Mode consolidates in idle windows with one-click rollback.

### 2. Smart Routing
Task difficulty is auto-detected. Complex calls hit flagship models (Opus / GPT-4o), simple ones drop to lighter sub-agents (Sonnet / MiniMax-M2.7). On a typical social-media workflow this cuts token spend by ~70%.

### 3. Always-on Background Execution
After you sign off, the agent keeps discovering candidate tasks, runs long-horizon monitors, and lands deliverables as files on disk with a summary waiting for you.

All of this is wrapped in an MCP-native plugin protocol so external tools and skills plug in via a single \`plugin.json\`.`,
        ),
        msgUser(
          'demo-session-tutorial-01',
          minutesAgo(12),
          'How do I actually try those out?',
        ),
        msgAssistantText(
          'demo-session-tutorial-01',
          minutesAgo(11),
          `This page is a **read-only sandbox** — every panel renders, but nothing reaches a real model. Two ways forward:

- **Stay here** and type anything in the composer below. You'll get a sandbox notice back, streamed token-by-token so you can see what a real V2 chat turn looks like.
- **Install PilotDeck locally** to get the actual cockpit: live model routing, white-box memory you can edit, Always-on background runs landing files on disk.

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash
pilotdeck
\`\`\`

Open [github.com/OpenBMB/PilotDeck](https://github.com/OpenBMB/PilotDeck) for the full quick-start.`,
        ),
      ],
    },
    {
      // A second canned session that shows what a real PilotDeck turn looks
      // like with tool calls + streamed markdown output. Provides flavor for
      // visitors who want to see beyond the Q&A walkthrough.
      id: 'demo-session-tutorial-02',
      summary: 'Survey the China LLM application market',
      title: 'Survey the China LLM application market',
      lastActivity: hoursAgo(3),
      createdAt: daysAgo(1),
      messageCount: 7,
      __messages: [
        msgUser(
          'demo-session-tutorial-02',
          hoursAgo(4),
          'Survey the Chinese LLM application market and turn it into a formal HTML white paper.',
        ),
        msgAssistantText(
          'demo-session-tutorial-02',
          hoursAgo(4),
          `Got it. I'll break this into four passes:

1. **Scope** — narrow the landscape to public-facing applications shipped in mainland China during 2024–2026
2. **Source pull** — fetch coverage from 36Kr, IT Juzi, Tencent News, plus official disclosures from Baichuan / Zhipu / Moonshot / 01.AI
3. **Synthesis** — segment by vertical (productivity, coding, search, customer ops) and tabulate funding + MAU where disclosed
4. **Render** — output a single HTML deliverable with embedded styles, ready to print as PDF

Starting the source pull now.`,
        ),
        msgToolUse(
          'demo-session-tutorial-02',
          hoursAgo(3) + 'a',
          'tool-01',
          'WebFetch',
          { url: 'https://36kr.com/topics/llm-applications-2026', mode: 'summary' },
        ),
        msgToolResult(
          'demo-session-tutorial-02',
          hoursAgo(3) + 'b',
          'tool-01',
          `Fetched 36Kr topic page: 47 articles, 18 unique products, funding totals across Seed–Series C tabulated below.`,
        ),
        msgToolUse(
          'demo-session-tutorial-02',
          hoursAgo(3) + 'c',
          'tool-02',
          'Write',
          { path: 'whitepaper.html', mode: 'create' },
        ),
        msgToolResult(
          'demo-session-tutorial-02',
          hoursAgo(3) + 'd',
          'tool-02',
          'Wrote whitepaper.html (412 lines, 24KB) — includes 6 sections, 3 tables, embedded CSS for print.',
        ),
        msgAssistantText(
          'demo-session-tutorial-02',
          hoursAgo(3),
          `Draft is on disk at \`whitepaper.html\`. The structure:

- **Executive Summary** — 3-paragraph TL;DR
- **Section 1** — Foundational Models (closed / open-source split)
- **Section 2** — Productivity & Office Suites (Kimi K2, Doubao 1.5, etc.)
- **Section 3** — Coding Assistants
- **Section 4** — Vertical Agents (legal, healthcare, education)
- **Section 5** — Funding & Valuation Tables
- **Section 6** — 2026 Outlook

Open it in a browser to review. Want me to add a methodology appendix, or push it through the **Always-on** pipeline for a weekly auto-refresh?`,
        ),
      ],
    },
  ],
};

// ──────────────────────────────────────────────────────────────────────────
// Helpers — build a NormalizedMessage of each kind
// ──────────────────────────────────────────────────────────────────────────

function msgUser(sessionId, timestamp, content) {
  return {
    id: `msg-${sessionId}-${timestamp}-u`,
    sessionId,
    timestamp,
    provider: PROVIDER,
    kind: 'text',
    role: 'user',
    content,
  };
}

function msgAssistantText(sessionId, timestamp, content) {
  return {
    id: `msg-${sessionId}-${timestamp}-a`,
    sessionId,
    timestamp,
    provider: PROVIDER,
    kind: 'text',
    role: 'assistant',
    content,
  };
}

function msgToolUse(sessionId, timestamp, toolId, toolName, toolInput) {
  return {
    id: `msg-${sessionId}-${timestamp}-tu-${toolId}`,
    sessionId,
    timestamp,
    provider: PROVIDER,
    kind: 'tool_use',
    toolName,
    toolId,
    toolInput,
  };
}

function msgToolResult(sessionId, timestamp, toolId, content) {
  return {
    id: `msg-${sessionId}-${timestamp}-tr-${toolId}`,
    sessionId,
    timestamp,
    provider: PROVIDER,
    kind: 'tool_result',
    toolId,
    toolResult: { content, isError: false },
  };
}

// ──────────────────────────────────────────────────────────────────────────
// Public read API consumed by mock-fetch / mock-websocket
// ──────────────────────────────────────────────────────────────────────────

// Returned by GET /api/projects. The first page caps each project at 5
// sessions — matching the real backend contract — but our canned data is
// already well under that threshold.
export function getProjectsPayload() {
  return PROJECTS.map((project) => ({
    ...project,
    sessions: (SESSIONS[project.name] || []).map(stripInternalFields),
    sessionMeta: {
      hasMore: false,
      total: (SESSIONS[project.name] || []).length,
    },
  }));
}

// Returned by GET /api/projects/:name/sessions?limit&offset.
// We never paginate (everything fits in one page).
export function getProjectSessionsPayload(projectName) {
  const list = SESSIONS[projectName] || [];
  return {
    sessions: list.map(stripInternalFields),
    hasMore: false,
    total: list.length,
  };
}

// Returned by GET /api/sessions/:id/messages?... — list every canned message
// for the given sessionId, paginated only if the caller passes limit/offset.
export function getSessionMessagesPayload(sessionId, opts = {}) {
  const project = Object.keys(SESSIONS).find((name) =>
    (SESSIONS[name] || []).some((s) => s.id === sessionId),
  );
  if (!project) {
    return { messages: [], total: 0, hasMore: false };
  }
  const session = SESSIONS[project].find((s) => s.id === sessionId);
  const all = (session && session.__messages) || [];
  const total = all.length;
  if (opts.limit == null) {
    return { messages: all, total, hasMore: false };
  }
  const offset = Math.max(0, Number(opts.offset || 0));
  const limit = Math.max(0, Number(opts.limit));
  const slice = all.slice(offset, offset + limit);
  return {
    messages: slice,
    total,
    hasMore: offset + slice.length < total,
  };
}

// Drop the `__messages` field before shipping a session over the wire.
function stripInternalFields(session) {
  const { __messages, ...rest } = session;
  return rest;
}

export const DEMO_PROVIDER = PROVIDER;
