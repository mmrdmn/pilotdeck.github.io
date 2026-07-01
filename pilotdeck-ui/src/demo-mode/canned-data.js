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
// Language selection
// ──────────────────────────────────────────────────────────────────────────

// The demo's i18n layer persists the active locale under `userLanguage`
// (see src/i18n/config.js). We read the same key here so the canned copy
// matches the UI chrome. Everything below ships an EN + ZH variant; any
// other locale falls back to English.
function currentLang() {
  try {
    return localStorage.getItem('userLanguage') === 'zh-CN' ? 'zh-CN' : 'en';
  } catch {
    return 'en';
  }
}

// ──────────────────────────────────────────────────────────────────────────
// Canned reply for ANY user submission + transcript copy (bilingual)
// ──────────────────────────────────────────────────────────────────────────

// One stable string shown after every user prompt. The mock WebSocket
// chunks it into stream_delta events to mimic real model streaming.
const CONTENT = {
  en: {
    welcomeTitle: 'Welcome to PilotDeck',
    userPrompt1:
      "I'm new here — what makes PilotDeck different from other AI agent harnesses?",
    assistant1: `PilotDeck is built around the **WorkSpace** as the core unit of work, plus three pillars:

### 1. White-box Memory
Generation → extraction → storage → retrieval is fully visible. You can pinpoint and edit any memory entry; Dream Mode consolidates in idle windows with one-click rollback.

### 2. Smart Routing
Task difficulty is auto-detected. Complex calls hit flagship models (Opus / GPT-4o), simple ones drop to lighter sub-agents (Sonnet / MiniMax-M2.7). On a typical social-media workflow this cuts token spend by ~70%.

### 3. Always-on Background Execution
After you sign off, the agent keeps discovering candidate tasks, runs long-horizon monitors, and lands deliverables as files on disk with a summary waiting for you.

All of this is wrapped in an MCP-native plugin protocol so external tools and skills plug in via a single \`plugin.json\`.`,
    userPrompt2: 'How do I actually try those out?',
    assistant2: `This page is a **read-only sandbox** — every panel renders, but nothing reaches a real model. Two ways forward:

- **Stay here** and type anything in the composer below. You'll get a sandbox notice back, streamed token-by-token so you can see what a real V2 chat turn looks like.
- **Install PilotDeck locally** to get the actual cockpit: live model routing, white-box memory you can edit, Always-on background runs landing files on disk.

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash
pilotdeck
\`\`\`

Open [github.com/OpenBMB/PilotDeck](https://github.com/OpenBMB/PilotDeck) for the full quick-start.`,
    replyText: `**Heads up — you're inside the PilotDeck Demo Sandbox.**

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
`,
  },
  'zh-CN': {
    welcomeTitle: '欢迎使用 PilotDeck',
    userPrompt1: '我是新手 —— PilotDeck 和其他 AI Agent 框架相比有什么不同？',
    assistant1: `PilotDeck 以 **WorkSpace 工作舱** 作为工作的核心单元，并围绕三大支柱构建：

### 1. 白盒记忆（White-box Memory）
生成 → 抽取 → 存储 → 检索的全过程完全可见。你可以精确定位并编辑任意一条记忆条目；Dream Mode 会在空闲时段进行整合，并支持一键回滚。

### 2. 智能路由（Smart Routing）
自动识别任务难度。复杂调用交给旗舰模型（Opus / GPT-4o），简单任务下放给更轻量的子智能体（Sonnet / MiniMax-M2.7）。在典型的社交媒体工作流中，这可节省约 70% 的 Token 开销。

### 3. 后台常驻执行（Always-on）
在你下线之后，智能体会持续发现候选任务、运行长周期监控，并把交付物以文件形式落盘，同时为你准备好一份摘要。

所有这些都封装在原生 MCP 的插件协议之下，外部工具与技能只需一个 \`plugin.json\` 即可接入。`,
    userPrompt2: '那我该怎么实际体验这些功能？',
    assistant2: `本页是一个**只读沙盒** —— 所有面板都能正常渲染，但不会真正调用任何模型。你有两种方式继续：

- **留在这里**，在下方输入框中输入任意内容。你会收到一条沙盒提示，并以逐字流式返回，让你直观感受真实的 V2 聊天回合是什么样子。
- **在本地安装 PilotDeck**，获得完整的驾驶舱：实时模型路由、可编辑的白盒记忆，以及把文件落盘的后台常驻执行。

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash
pilotdeck
\`\`\`

打开 [github.com/OpenBMB/PilotDeck](https://github.com/OpenBMB/PilotDeck) 查看完整的快速上手指南。`,
    replyText: `**提示 —— 你正处于 PilotDeck 演示沙盒中。**

本页运行的是真实的 PilotDeck V2 网页界面，但所有模型调用都在客户端被模拟：你输入的任何内容都不会发送到真实大模型，不会读写任何磁盘文件，也没有接入任何 MCP 服务器。

你依然可以体验：

- 浏览左侧的 **WorkSpace 工作舱侧边栏** —— 在不同项目间切换，翻阅已保存的会话
- 打开任意预置对话，查看 **ProcessTrace 过程轨迹**、工具调用以及 Markdown 消息的渲染效果
- 在输入框中输入并发送任意内容 —— 你会收到这条相同的提示，并以逐字流式返回，让聊天界面表现得与真实环境一致

想真正运行 PilotDeck（实时模型路由、白盒记忆、后台常驻执行）：

1. \`curl -fsSL https://raw.githubusercontent.com/OpenBMB/PilotDeck/main/install.sh | bash\`
2. 在 \`~/.pilotdeck/pilotdeck.yaml\` 中配置一个模型提供方（OpenAI / Anthropic / DeepSeek / Qwen / Kimi / MiniMax / 任意兼容 OpenAI 的接口）
3. \`pilotdeck\` → 打开 http://localhost:3001

完整文档与一键安装脚本：[github.com/OpenBMB/PilotDeck](https://github.com/OpenBMB/PilotDeck)。
`,
  },
};

function copy() {
  return CONTENT[currentLang()] || CONTENT.en;
}

// Language-aware reply text. Read at send time (not module load) so it
// tracks whatever locale the demo booted in.
export function getDemoReplyText() {
  return copy().replyText;
}

// ──────────────────────────────────────────────────────────────────────────
// WorkSpace / Project list
// ──────────────────────────────────────────────────────────────────────────

// Shape matches Project from src/types/app.ts. The demo ships a single
// WorkSpace literally named `general` so it lands in V2's dedicated
// "General" sidebar tab (SidebarV2 looks up that exact name to flatten
// its sessions under the default scratchpad section).
const PROJECTS = [
  {
    name: 'pilotdeck-demo',
    displayName: 'PilotDeck Demo',
    fullPath: '~/pilotdeck/workspaces/pilotdeck-demo',
    path: '~/pilotdeck/workspaces/pilotdeck-demo',
  },
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

// Build the canned session transcripts for the currently-active locale.
// Called at request time (not module load) by the payload getters below so
// switching language + reloading yields a fully-translated conversation.
function buildSession(sessionId) {
  const c = copy();
  return {
    id: sessionId,
    summary: c.welcomeTitle,
    title: c.welcomeTitle,
    lastActivity: minutesAgo(12),
    createdAt: daysAgo(2),
    messageCount: 4,
    __messages: [
      msgUser(sessionId, minutesAgo(15), c.userPrompt1),
      msgAssistantText(sessionId, minutesAgo(14), c.assistant1),
      msgUser(sessionId, minutesAgo(12), c.userPrompt2),
      msgAssistantText(sessionId, minutesAgo(11), c.assistant2),
    ],
  };
}

function buildSessions() {
  return {
    'pilotdeck-demo': [buildSession('demo-session-tutorial-01')],
    general: [buildSession('demo-session-general-01')],
  };
}

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
  const sessions = buildSessions();
  return PROJECTS.map((project) => ({
    ...project,
    sessions: (sessions[project.name] || []).map(stripInternalFields),
    sessionMeta: {
      hasMore: false,
      total: (sessions[project.name] || []).length,
    },
  }));
}

// Returned by GET /api/projects/:name/sessions?limit&offset.
// We never paginate (everything fits in one page).
export function getProjectSessionsPayload(projectName) {
  const sessions = buildSessions();
  const list = sessions[projectName] || [];
  return {
    sessions: list.map(stripInternalFields),
    hasMore: false,
    total: list.length,
  };
}

// Returned by GET /api/sessions/:id/messages?... — list every canned message
// for the given sessionId, paginated only if the caller passes limit/offset.
export function getSessionMessagesPayload(sessionId, opts = {}) {
  const sessions = buildSessions();
  const project = Object.keys(sessions).find((name) =>
    (sessions[name] || []).some((s) => s.id === sessionId),
  );
  if (!project) {
    return { messages: [], total: 0, hasMore: false };
  }
  const session = sessions[project].find((s) => s.id === sessionId);
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
