const CASES_DATA = [
  {
    "id": "zelda-glider",
    "name": "塞尔达滑翔",
    "category": "网页游戏",
    "project": "home-liyishan-workspace-game",
    "session": "web:s_57bede6c-245c-4edc-98e5-3bc60d33d55a.jsonl",
    "description": "类似塞尔达的网页游戏，控制林克用滑翔翼从高处滑翔，自由俯瞰大地风景、建筑和NPC",
    "created": "2026-05-16T10:45:21.457Z",
    "first_prompt": "请你帮忙创建一个类似塞尔达的游戏，但是要是网页版的，其中我最关心的功能就是，这个玩家可以控制。林克这个角色。用滑翔翼从高处滑下，在这个空气中间，随着风到处滑翔。就是给人一种非常自由自在的感觉，就是滑翔的过程中间，你就可以看到这个景色，脚下的景色不断变换呀。然后脚下可能有一些NPC角色在这里样子行动啊。然后你的脚下的这个各种建筑啊、结构啊、风景啊、树木啊、道路啊、流水啊，都在自在地行动，就是你会感觉飞翔的这个感觉非常好，所以这个是我所理解最核心的功能。当然我可能不是专业的这个游戏设计师，所以请你帮忙给我从最开始的这个，哼，非常粗略的这个描述啊，请生成一个完整的网页版的塞尔达的游戏，关键是飞行功能好吗？谢谢。如果你有任何不明确不清楚的地方，你都可以和我继续沟通讨论。",
    "real_steps": [
      {
        "title": "用户初始提问",
        "content": "请你帮忙创建一个类似塞尔达的游戏，但是要是网页版的，其中我最关心的功能就是，这个玩家可以控制。林克这个角色。用滑翔翼从高处滑下，在这个空气中间，随着风到处滑翔。就是给人一种非常自由自在的感觉，就是滑翔的过程中间，你就可以看到这个景色，脚下的景色不断变换呀。然后脚下可能有一些NPC角色在这里样子行动啊。然后你的脚下的这个各种建筑啊、结构啊、风景啊、树木啊、道路啊、流水啊，都在自在地行动，就是你会感觉飞翔的这个感觉非常好，所以这个是我所理解最核心的功能。当然我可能不是专业的这个游戏设计师，所以请你帮忙给我从最开始的这个，哼，非常粗略的这个描述啊，请生成一个完整的网页版的塞尔达的游戏，关键是飞行功能",
        "type": "prompt"
      },
      {
        "title": "工具调用: ask_user_question",
        "content": "{\"questions\": [{\"header\": \"视觉风格\", \"options\": [{\"label\": \"像素风\", \"description\": \"复古像素艺术，像经典塞尔达，性能好\"}, {\"label\": \"低多边形3D\", \"description\": \"现代简洁的3D风格，像《塞尔达传说：荒野之息》的概念简化版\"}, {\"label\": \"手绘卡通风\", \"description",
        "type": "tool"
      },
      {
        "title": "工具调用: ask_user_question",
        "content": "{\"questions\": [{\"header\": \"画面风格\", \"options\": [{\"label\": \"低多边形3D\", \"description\": \"现代简洁3D风格（类似荒野之息），视觉效果好，强烈推荐\"}, {\"label\": \"像素风2D\", \"description\": \"复古像素风格，简单经典\"}, {\"label\": \"你随意\", \"description\": \"你选最好",
        "type": "tool"
      },
      {
        "title": "工具调用: agent",
        "content": "{\"description\": \"Build Zelda-style gliding game\", \"prompt\": \"Create a complete single-file HTML game with the following requirements:\\n\\n## Game Concept\\nA Zelda-inspired open world game where the pla",
        "type": "tool"
      },
      {
        "title": "工具调用: bash",
        "content": "{\"command\": \"ls -lh /home/liyishan/workspace/game/index.html\", \"description\": \"Check if game file was created\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: read_file",
        "content": "{\"filePath\": \"/home/liyishan/workspace/game/index.html\"}",
        "type": "tool"
      },
      {
        "title": "AI 回复 #1",
        "content": "抱歉，我重新提问。我需要根据你的偏好来决定技术细节，有两个关键问题：",
        "type": "response"
      },
      {
        "title": "AI 回复 #2",
        "content": "太好了！你信任我的判断。那我就选择**最佳方案**来打造这个游戏：  **我的选择：** - 🎨 **低多边形3D风格** — 用 Three.js 打造，类似《荒野之息》的清新3D世界，沉浸感最强 - 💻 **电脑浏览器** — 键盘+鼠标操作，体验最好 - 🪂 **核心玩法**：林克从高处跳下 → 展开滑翔翼 → 随风滑翔，俯瞰大地  我现在就开始构建！这会是一个完整的单文件HTML游戏。",
        "type": "response"
      },
      {
        "title": "AI 回复 #3",
        "content": "游戏已经创建好了！让我来验证一下文件，然后帮你打开看看效果。",
        "type": "response"
      },
      {
        "title": "交互统计",
        "content": "共 2870 条记录, 23 轮用户输入, 714 轮AI回复, 1392 次工具调用",
        "type": "stats"
      }
    ],
    "steps": [
      {
        "title": "📝 用户初始提问",
        "content": "请你帮忙创建一个类似塞尔达的游戏，但是要是网页版的，其中我最关心的功能就是，这个玩家可以控制。林克这个角色。用滑翔翼从高处滑下，在这个空气中间，随着风到处滑翔。就是给人一种非常自由自在的感觉，就是滑翔的过程中间，你就可以看到这个景色，脚下的景色不断变换呀。然后脚下可能有一些NPC角色在这里样子行动啊。然后你的脚下的这个各种建筑啊、结构啊、风景啊、树木啊、道路啊、流水啊，都在自在地行动，就是你会感觉飞翔的这个感觉非常好，所以这个是我所理解最核心的功能。当然我可能不是专业的这个游戏设计师，所以请你帮忙给我从最开始的这个，哼，非常粗略的这个描述啊，请生成一个完整的网页版的塞尔达的游戏，关键是飞行功能好吗？谢谢。如果你有任何不明确不清楚的地方，你都可以和我继续沟通讨论。",
        "type": "user"
      },
      {
        "title": "🤖 AI 思考过程",
        "content": "抱歉，我重新提问。我需要根据你的偏好来决定技术细节，有两个关键问题：",
        "type": "assistant"
      },
      {
        "title": "🔧 工具调用: ask_user_question",
        "content": "{\n  \"questions\": [\n    {\n      \"header\": \"视觉风格\",\n      \"options\": [\n        {\n          \"label\": \"像素风\",\n          \"description\": \"复古像素艺术，像经典塞尔达，性能好\"\n        },\n        {\n          \"label\": \"低多边形3D\",\n          \"description\": \"现代简洁的3D风格，像《塞尔达传说：荒野之息》的概念简化版\"\n        },\n        {\n          \"label\": \"手绘卡通风\",\n          \"description\": \"2.5D手绘风格，温馨可爱\"\n        }\n      ],\n      \"question\": \"游戏画面风格你更偏好哪种？\"\n ",
        "type": "tool"
      },
      {
        "title": "🤖 AI 回复",
        "content": "太好了！你信任我的判断。那我就选择**最佳方案**来打造这个游戏：\n\n**我的选择：**\n- 🎨 **低多边形3D风格** — 用 Three.js 打造，类似《荒野之息》的清新3D世界，沉浸感最强\n- 💻 **电脑浏览器** — 键盘+鼠标操作，体验最好\n- 🪂 **核心玩法**：林克从高处跳下 → 展开滑翔翼 → 随风滑翔，俯瞰大地\n\n我现在就开始构建！这会是一个完整的单文件HTML游戏。",
        "type": "assistant"
      },
      {
        "title": "🤖 AI 回复",
        "content": "游戏已经创建好了！让我来验证一下文件，然后帮你打开看看效果。",
        "type": "assistant"
      },
      {
        "title": "📝 用户追问 #1",
        "content": "什么情况？你是有问题问我吗？",
        "type": "user"
      },
      {
        "title": "📝 用户追问 #2",
        "content": "能请你帮忙启动这个塞尔达游戏吗？ 启动方式可以有一个参考，应该也是本服务器上的内容，是另一个项目中开发的小游戏。\n\nhttp://58.57.119.12:52006/api/projects/home-liyishan-yanyk-01/preview/super_mario.html",
        "type": "user"
      },
      {
        "title": "📊 交互总结",
        "content": "共 2870 条记录 | 23 轮用户输入 | 714 轮AI回复 | 1392 次工具调用",
        "type": "summary"
      }
    ],
    "stats": {
      "user_turns": 23,
      "assistant_turns": 1412,
      "total_entries": 2870,
      "tool_calls": 1388
    }
  },
  {
    "id": "podcast-multilingual",
    "name": "播客多语言推送",
    "category": "多媒体",
    "project": "home-liyishan-podcast_multilingual",
    "session": "web:s_5ef3726d-bf8a-41b9-b655-a10889cc4697.jsonl",
    "description": "将英文播客推送给全球受众，生成中文/日文/法文/韩文/西班牙文/阿拉伯文六个语言版本的图文推送页面",
    "created": "2026-05-17T10:21:06.539Z",
    "first_prompt": "工作目录 `/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/` 里有一段英文播客 `podcast.mp3`。\n\n我想把这期播客推送给全球受众，覆盖中文、日文、法文、韩文、西班牙文和阿拉伯文六个语言版本。帮我做出六个语言版本的图文推送页面，每个页面要有：播客内容的本地化摘要文案、一张适配当地文化审美的主题配图，整体排版要好看、专业。注意阿拉伯文版本需要 RTL（从右到左）排版。\n\n所有产出放到 `/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/results/`，按以下结构保存：\n- `transcript.txt` — 英文转录全文\n- `summary.json` — 包含 `summary`（摘要文本）和 `keywords`（关键词列表）\n- `cover_zh.png`、`cover_ja.png`、`cover_fr.png`、`cover_ko.png`、`cover_es.png`、`cover_ar.png` — 各语言版本的主题配图\n- `translations/zh.txt`、`translations/ja.txt`、`translations/fr.txt`、`translations/ko.txt`、`translations/es.txt`、`translations/ar.txt` — 六语言摘要文案\n- `pages/zh.html`、`pages/ja.html`、`pages/fr.html`、`pages/ko.html`、`pages/es.html`、`pages/ar.html` — 六语言推送页面\n- `screenshots/zh.png`、`screenshots/ja.png`、`screenshots/fr.png`、`screenshots/ko.png`、`screenshots/es.png`、`screenshots/ar.png` — 页面截图（可选，有则加分）\n\n你的环境中有一个 skill 工具库（路径 `/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/skills/`），你可以浏览该目录下的子文件夹，阅读其中的 SKILL.md 来获取可用工具和最佳实践。建议先 `ls /home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/skills/` 查看有哪些可用 skill。",
    "real_steps": [
      {
        "title": "用户初始提问",
        "content": "工作目录 `/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/` 里有一段英文播客 `podcast.mp3`。  我想把这期播客推送给全球受众，覆盖中文、日文、法文、韩文、西班牙文和阿拉伯文六个语言版本。帮我做出六个语言版本的图文推送页面，每个页面要有：播客内容的本地化摘要文案、一张适配当地文化审美的主题配图，整体排版要好看、专业。注意阿拉伯文版本需要 RTL（从右到左）排版。  所有产出放到 `/home/liyishan/wcb_task_1_podcast_multilingual_push_2026",
        "type": "prompt"
      },
      {
        "title": "工具调用: glob",
        "content": "{\"path\": \"/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020\", \"pattern\": \"skills/*/SKILL.md\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: glob",
        "content": "{\"path\": \"/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020\", \"pattern\": \"*\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: glob",
        "content": "{\"pattern\": \"**/*\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: glob",
        "content": "{\"pattern\": \"skills/**/*\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: glob",
        "content": "{\"pattern\": \"*\"}",
        "type": "tool"
      },
      {
        "title": "AI 回复 #1",
        "content": "I'll start by exploring the available skills and understanding the task structure.",
        "type": "response"
      },
      {
        "title": "AI 回复 #2",
        "content": "Let me try to list the skills directory and check for the podcast file directly.",
        "type": "response"
      },
      {
        "title": "AI 回复 #3",
        "content": "Good, I have the key findings. Let me now read the available SKILL.md files to understand the best practices:",
        "type": "response"
      },
      {
        "title": "交互统计",
        "content": "共 57 条记录, 1 轮用户输入, 12 轮AI回复, 23 次工具调用",
        "type": "stats"
      }
    ],
    "steps": [
      {
        "title": "📝 用户初始提问",
        "content": "工作目录 `/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/` 里有一段英文播客 `podcast.mp3`。\n\n我想把这期播客推送给全球受众，覆盖中文、日文、法文、韩文、西班牙文和阿拉伯文六个语言版本。帮我做出六个语言版本的图文推送页面，每个页面要有：播客内容的本地化摘要文案、一张适配当地文化审美的主题配图，整体排版要好看、专业。注意阿拉伯文版本需要 RTL（从右到左）排版。\n\n所有产出放到 `/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/results/`，按以下结构保存：\n- `transcript.txt` — 英文转录全文\n- `summary.json` — 包含 `summary`（摘要文本）和 `keywords`（关键词列表）\n- `cover_zh.png`、`cover_ja.png`、`cover_fr.png`、`cover_ko.png`、`cover_es.png`、`cov...",
        "type": "user"
      },
      {
        "title": "🤖 AI 思考过程",
        "content": "I'll start by exploring the available skills and understanding the task structure.",
        "type": "assistant"
      },
      {
        "title": "🔧 工具调用: glob",
        "content": "{\n  \"path\": \"/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020\",\n  \"pattern\": \"skills/*/SKILL.md\"\n}",
        "type": "tool"
      },
      {
        "title": "🔧 工具调用: agent",
        "content": "{\n  \"description\": \"List workspace files\",\n  \"prompt\": \"Run the following commands and report back all output:\\n\\n1. `ls -la /home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/`\\n2. `ls -la /home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/skills/` (if it exists)\\n3. `find /home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/skills/ -name \\\"SKILL.m",
        "type": "tool"
      },
      {
        "title": "🔧 工具调用: read_file",
        "content": "{\n  \"filePath\": \"/home/liyishan/wcb_task_1_podcast_multilingual_push_2026-05-17T1020/skills/speech-to-text/SKILL.md\"\n}",
        "type": "tool"
      },
      {
        "title": "🤖 AI 回复",
        "content": "Let me try to list the skills directory and check for the podcast file directly.",
        "type": "assistant"
      },
      {
        "title": "🤖 AI 回复",
        "content": "Good, I have the key findings. Let me now read the available SKILL.md files to understand the best practices:",
        "type": "assistant"
      },
      {
        "title": "🤖 AI 回复",
        "content": "The skills directory appears empty or the SKILL.md files aren't there. Let me check what's actually available:",
        "type": "assistant"
      },
      {
        "title": "📊 交互总结",
        "content": "共 57 条记录 | 1 轮用户输入 | 12 轮AI回复 | 23 次工具调用",
        "type": "summary"
      }
    ],
    "stats": {
      "user_turns": 1,
      "assistant_turns": 18,
      "total_entries": 57,
      "tool_calls": 17
    }
  },
  {
    "id": "qq-farm",
    "name": "QQ农场",
    "category": "网页游戏",
    "project": "home-liyishan-mbfarm-MBFarm",
    "session": "web:s_0269ed70-3408-4d52-b3c4-80f47ce931c5.jsonl",
    "description": "QQ农场网页版，包含种植、收获、买卖、偷菜等完整农场玩法",
    "created": "2026-05-17T04:28:58.977Z",
    "first_prompt": "你了解 QQ 农场吗？",
    "real_steps": [
      {
        "title": "用户初始提问",
        "content": "你了解 QQ 农场吗？",
        "type": "prompt"
      },
      {
        "title": "工具调用: bash",
        "content": "{\"command\": \"ls -la /home/liyishan/mbfarm/MBFarm\", \"description\": \"Check project directory structure\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: bash",
        "content": "{\"command\": \"cd /home/liyishan/mbfarm/MBFarm && cat .gitignore\", \"description\": \"Check gitignore content\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: bash",
        "content": "{\"command\": \"cd /home/liyishan/mbfarm/MBFarm && git log --oneline -5\", \"description\": \"Check git history\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: ask_user_question",
        "content": "{\"questions\": [{\"header\": \"前端\", \"options\": [{\"label\": \"纯 HTML/Jinja2\", \"description\": \"服务器端渲染，零构建，最简单，适合快速上线\"}, {\"label\": \"Alpine.js + HTMX\", \"description\": \"轻量交互增强，CDN 引入，保留简单性\"}, {\"label\": \"React/Vu",
        "type": "tool"
      },
      {
        "title": "工具调用: ask_user_question",
        "content": "{\"questions\": [{\"header\": \"前端\", \"options\": [{\"label\": \"纯 HTML/Jinja2\", \"description\": \"服务器端渲染，零构建，最简单\"}, {\"label\": \"Alpine.js + HTMX\", \"description\": \"轻量交互增强，CDN 引入\"}, {\"label\": \"React/Vue SPA\", \"desc",
        "type": "tool"
      },
      {
        "title": "AI 回复 #1",
        "content": "了解！QQ 农场是腾讯在 2008 年左右推出的一款非常经典的社交游戏，最初作为 QQ 空间的增值应用出现。  **核心玩法：** - 🌱 买种子、播种、浇水、施肥 - ⏳ 等作物成熟后收获，出售换取金币 - 💰 用金币购买更高级的种子，扩大种植面积 - 🌙 去好友家\"偷菜\"——收获别人成熟的作物（这是最火的特点）  **流行原因：** - 依托 QQ 社交关系链，病毒式传播 - \"偷菜\"机制极具成瘾性和社交趣味性 - 当年催生了\"半夜起来偷菜\"的现象级行为 - 张小龙团队打造的经典产品  这款游戏在 2009-2010 年间达到了现象级热度，几乎成了中国互联网的一个文化符号。  你提到 QQ",
        "type": "response"
      },
      {
        "title": "AI 回复 #2",
        "content": "这是一个很有趣的项目！让我先看看你当前工作区的情况，然后给你一些具体建议。",
        "type": "response"
      },
      {
        "title": "AI 回复 #3",
        "content": "项目目前是空仓库，只有初始 commit。让我给你一份完整的技术建议：  ---  ## MB Farm 技术建议  ### 核心架构判断  十几人的规模非常小，**不需要**微服务、消息队列这些重型基础设施。目标是：**快开发、能跑、够用**。  ---  ### 推荐技术栈  **后端：Python + FastAPI**（你已经装了 Python 生态工具）  - FastAPI 轻量、API 自动生成文档、适合快速原型 - WebSocket 支持原生，实现\"偷菜\"实时通知很方便 - 数据存 SQLite 就够了（一个 `.db` 文件，零运维）  **前端：原生 HTML/CSS/J",
        "type": "response"
      },
      {
        "title": "交互统计",
        "content": "共 384 条记录, 10 轮用户输入, 100 轮AI回复, 149 次工具调用",
        "type": "stats"
      }
    ],
    "steps": [
      {
        "title": "📝 用户初始提问",
        "content": "你了解 QQ 农场吗？",
        "type": "user"
      },
      {
        "title": "🤖 AI 思考过程",
        "content": "了解！QQ 农场是腾讯在 2008 年左右推出的一款非常经典的社交游戏，最初作为 QQ 空间的增值应用出现。\n\n**核心玩法：**\n- 🌱 买种子、播种、浇水、施肥\n- ⏳ 等作物成熟后收获，出售换取金币\n- 💰 用金币购买更高级的种子，扩大种植面积\n- 🌙 去好友家\"偷菜\"——收获别人成熟的作物（这是最火的特点）\n\n**流行原因：**\n- 依托 QQ 社交关系链，病毒式传播\n- \"偷菜\"机制极具成瘾性和社交趣味性\n- 当年催生了\"半夜起来偷菜\"的现象级行为\n- 张小龙团队打造的经典产品\n\n这款游戏在 2009-2010 年间达到了现象级热度，几乎成了中国互联网的一个文化符号。\n\n你提到 QQ 农场，是有什么想做的吗？比如想复刻类似的游戏，或者在研究相关技术？",
        "type": "assistant"
      },
      {
        "title": "🔧 工具调用: bash",
        "content": "{\n  \"command\": \"ls -la /home/liyishan/mbfarm/MBFarm\",\n  \"description\": \"Check project directory structure\"\n}",
        "type": "tool"
      },
      {
        "title": "🔧 工具调用: ask_user_question",
        "content": "{\n  \"questions\": [\n    {\n      \"header\": \"前端\",\n      \"options\": [\n        {\n          \"label\": \"纯 HTML/Jinja2\",\n          \"description\": \"服务器端渲染，零构建，最简单，适合快速上线\"\n        },\n        {\n          \"label\": \"Alpine.js + HTMX\",\n          \"description\": \"轻量交互增强，CDN 引入，保留简单性\"\n        },\n        {\n          \"label\": \"React/Vue SPA\",\n          \"description\": \"完整前端框架，体验好但构建链路复杂\"\n        }\n      ],\n      \"ques",
        "type": "tool"
      },
      {
        "title": "🔧 工具调用: agent",
        "content": "{\n  \"description\": \"Design MBFarm architecture\",\n  \"prompt\": \"设计 MB Farm 项目的完整架构。\\n\\n背景：\\n- 简易版 QQ 农场网页游戏\\n- Python + FastAPI + SQLite\\n- Jinja2 模板（纯 HTML 前端，无构建）\\n- 本地局域网部署，十几人\\n- 重视模块化和依赖注入\\n- 不需要微服务，但要结构清晰\\n\\n请设计：\\n1. 完整的目录结构（分层：models, services, repositories, routes, core, templates, static, config 等）\\n2. 每个模块的职责说明\\n3. 依赖关系图（用 ASCII 或 Mermaid）\\n4. 每个模块的优先级（P0-必须第一个，P1-核心，P2-润色，P3-锦上添花）\\n5. 依赖注",
        "type": "tool"
      },
      {
        "title": "🔧 工具调用: write_file",
        "content": "{\n  \"content\": \"# P0 阶段：基础设施 & 认证\\n\\n## 阶段目标\\n\\n完成项目基础骨架和用户认证体系，使项目可运行并支持基本的注册/登录/登出流程。\\n\\n## 交付清单\\n\\n| # | 模块 | 文件 | 说明 |\\n|---|------|------|------|\\n| 1 | `core/` | 5 个文件 | 配置、数据库、安全、异常、DI |\\n| 2 | `models/user.py` | 用户 ORM 模型 | User 表定义 |\\n| 3 | `schemas/user.py` | 用户数据校验 | 注册/登录/响应的 Pydantic 模型 |\\n| 4 | `repositories/user_repo.py` | 用户数据访问 | 纯 CRUD 操作 |\\n| 5 | `services/auth_service.py` | 认证业",
        "type": "tool"
      },
      {
        "title": "🤖 AI 回复",
        "content": "这是一个很有趣的项目！让我先看看你当前工作区的情况，然后给你一些具体建议。",
        "type": "assistant"
      },
      {
        "title": "🤖 AI 回复",
        "content": "项目目前是空仓库，只有初始 commit。让我给你一份完整的技术建议：\n\n---\n\n## MB Farm 技术建议\n\n### 核心架构判断\n\n十几人的规模非常小，**不需要**微服务、消息队列这些重型基础设施。目标是：**快开发、能跑、够用**。\n\n---\n\n### 推荐技术栈\n\n**后端：Python + FastAPI**（你已经装了 Python 生态工具）\n\n- FastAPI 轻量、API 自动生成文档、适合快速原型\n- WebSocket 支持原生，实现\"偷菜\"实时通知很方便\n- 数据存 SQLite 就够了（一个 `.db` 文件，零运维）\n\n**前端：原生 HTML/CSS/J",
        "type": "assistant"
      },
      {
        "title": "🤖 AI 回复",
        "content": "好的，选择非常务实。纯 HTML/Jinja2 + 本地局域网部署 —— 这是最快的上手路线。\n\n---\n\n## 最终推荐方案总结\n\n| 层 | 技术 | 理由 |\n|---|---|---|\n| **后端** | Python + FastAPI | 轻量、API 自动文档 |\n| **数据库** | SQLite | 零配置，单文件 |\n| **前端** | Jinja2 模板 + 原生 CSS/JS | 零构建，直接写 |\n| **实时** | FastAPI WebSocket | 偷菜通知、作物成熟提醒 |\n| **认证** | FastAPI 内置 Session（或简单 toke",
        "type": "assistant"
      },
      {
        "title": "📝 用户追问 #1",
        "content": "我想做一个网页版、简易版的 QQ 农场游戏，游戏名叫做 MB Farm。最多十几个人游玩。你有什么建议。",
        "type": "user"
      },
      {
        "title": "📝 用户追问 #2",
        "content": "项目结构太潦草了，按模块区分，给我一个架构，要重视依赖注入的思想。然后，告诉我每个模块的优先级。",
        "type": "user"
      },
      {
        "title": "📝 用户追问 #3",
        "content": "创建一个 docs 目录。然后，把优先级为 P0 的内容（基础设施、注册/登录）写成文档，按模块区分子目录。写每个模块的文档时先规划方案再开始写。",
        "type": "user"
      },
      {
        "title": "📝 用户追问 #4",
        "content": "在 docs 目录下再创建一个 README 文档，写项目的架构以及 docs 目录的结构。",
        "type": "user"
      },
      {
        "title": "📊 交互总结",
        "content": "共 384 条记录 | 10 轮用户输入 | 100 轮AI回复 | 149 次工具调用",
        "type": "summary"
      }
    ],
    "stats": {
      "user_turns": 10,
      "assistant_turns": 159,
      "total_entries": 384,
      "tool_calls": 149
    }
  },
  {
    "id": "flight-shooter",
    "name": "飞机大战",
    "category": "网页游戏",
    "project": "home-liyishan-workspace-game",
    "session": "web:s_15230ed8-767c-49c3-a268-60ebca38cf53.jsonl",
    "description": "经典飞机大战小游戏，静态网页，含攻速增强、子弹升级等道具系统",
    "created": "2026-05-15T14:53:29.670Z",
    "first_prompt": "请你帮我做一个飞机大战小游戏，做一个静态网页，要求能够在线玩，要设计一些道具，比如增加攻速，增加子弹等等，可以去网上查查相关游戏的玩法。",
    "real_steps": [
      {
        "title": "用户初始提问",
        "content": "请你帮我做一个飞机大战小游戏，做一个静态网页，要求能够在线玩，要设计一些道具，比如增加攻速，增加子弹等等，可以去网上查查相关游戏的玩法。",
        "type": "prompt"
      },
      {
        "title": "工具调用: web_search",
        "content": "{\"pattern\": \"飞机大战游戏 道具 玩法 设计\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: web_search",
        "content": "{\"query\": \"飞机大战游戏 道具设计 玩法 经典元素\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: write_file",
        "content": "{}",
        "type": "tool"
      },
      {
        "title": "工具调用: write_file",
        "content": "{\"filePath\": \"/home/liyishan/hx_01/index.html\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: write_file",
        "content": "{\"filePath\": \"/home/liyishan/hx_01/index.html\"}",
        "type": "tool"
      },
      {
        "title": "AI 回复 #1",
        "content": "我来帮你做一个飞机大战小游戏！先调研一下经典玩法，然后直接开干。",
        "type": "response"
      },
      {
        "title": "AI 回复 #2",
        "content": "没关系，我对飞机大战的经典玩法已经很熟悉了。直接开干！  我会做一个功能丰富的飞机大战游戏，包含以下设计： - **玩家飞机**：鼠标/键盘控制移动，自动射击 - **敌机类型**：小型机、中型机、大型机 - **道具系统**：   - 🔥 火属性：增加攻速   - 📦 多弹道：增加子弹数量（三连发/四连发）   - 🛡️ 护盾：临时无敌   - 💥 全屏炸弹：清除屏幕上所有敌人   - ⭐ 星属性：增强伤害 - **特效**：爆炸粒子效果、分数系统、波次递进难度",
        "type": "response"
      },
      {
        "title": "AI 回复 #3",
        "content": "好的，工作目录是空的。现在来创建这个飞机大战游戏。",
        "type": "response"
      },
      {
        "title": "交互统计",
        "content": "共 1767 条记录, 3 轮用户输入, 10 轮AI回复, 879 次工具调用",
        "type": "stats"
      }
    ],
    "steps": [
      {
        "title": "📝 用户初始提问",
        "content": "请你帮我做一个飞机大战小游戏，做一个静态网页，要求能够在线玩，要设计一些道具，比如增加攻速，增加子弹等等，可以去网上查查相关游戏的玩法。",
        "type": "user"
      },
      {
        "title": "🤖 AI 思考过程",
        "content": "我来帮你做一个飞机大战小游戏！先调研一下经典玩法，然后直接开干。",
        "type": "assistant"
      },
      {
        "title": "🔧 工具调用: web_search",
        "content": "{\n  \"pattern\": \"飞机大战游戏 道具 玩法 设计\"\n}",
        "type": "tool"
      },
      {
        "title": "🤖 AI 回复",
        "content": "没关系，我对飞机大战的经典玩法已经很熟悉了。直接开干！\n\n我会做一个功能丰富的飞机大战游戏，包含以下设计：\n- **玩家飞机**：鼠标/键盘控制移动，自动射击\n- **敌机类型**：小型机、中型机、大型机\n- **道具系统**：\n  - 🔥 火属性：增加攻速\n  - 📦 多弹道：增加子弹数量（三连发/四连发）\n  - 🛡️ 护盾：临时无敌\n  - 💥 全屏炸弹：清除屏幕上所有敌人\n  - ⭐ 星属性：增强伤害\n- **特效**：爆炸粒子效果、分数系统、波次递进难度",
        "type": "assistant"
      },
      {
        "title": "🤖 AI 回复",
        "content": "好的，工作目录是空的。现在来创建这个飞机大战游戏。",
        "type": "assistant"
      },
      {
        "title": "📝 用户追问 #1",
        "content": "继续",
        "type": "user"
      },
      {
        "title": "📝 用户追问 #2",
        "content": "继续",
        "type": "user"
      },
      {
        "title": "📊 交互总结",
        "content": "共 1767 条记录 | 3 轮用户输入 | 10 轮AI回复 | 879 次工具调用",
        "type": "summary"
      }
    ],
    "stats": {
      "user_turns": 3,
      "assistant_turns": 880,
      "total_entries": 1767,
      "tool_calls": 879
    }
  },
  {
    "id": "vr-ball-hunt",
    "name": "VR毛球寻找",
    "category": "互动体验",
    "project": "home-liyishan-cut",
    "session": "web:s_6d25672b-d562-418d-8a14-bc7d572837ad.jsonl",
    "description": "VR眼镜形状的3D房间小游戏，小球躲藏其中，用户旋转手机寻找并点击计分",
    "created": "2026-05-16T12:28:12.729Z",
    "first_prompt": "我希望有一个黑色的蒙版，中间露出VR眼镜形状的画面，画面中是一个房间的一部分，用户可以旋转手机调整看到的画面，房间需要有3D感，温馨浅色系，小球在房间里到处躲藏，用户成功找到并且点击之后，右上角有一个小球记分能够+1，然后释放新的小球继续躲。总而言之就是要尽可能真实地模拟出在一个房间里抓东躲西藏的小球的VR效果",
    "real_steps": [
      {
        "title": "用户初始提问",
        "content": "我希望有一个黑色的蒙版，中间露出VR眼镜形状的画面，画面中是一个房间的一部分，用户可以旋转手机调整看到的画面，房间需要有3D感，温馨浅色系，小球在房间里到处躲藏，用户成功找到并且点击之后，右上角有一个小球记分能够+1，然后释放新的小球继续躲。总而言之就是要尽可能真实地模拟出在一个房间里抓东躲西藏的小球的VR效果",
        "type": "prompt"
      },
      {
        "title": "工具调用: agent",
        "content": "{\"description\": \"Build VR ball hunting game\", \"prompt\": \"Create a single HTML file at /home/liyishan/cut/index.html that implements a VR headset ball-hunting game with these requirements:\\n\\n1. **VR H",
        "type": "tool"
      },
      {
        "title": "工具调用: agent",
        "content": "{\"description\": \"Build VR ball hunt game\", \"prompt\": \"Create a single HTML file at /home/liyishan/cut/index.html implementing a VR headset ball-hunting game.\\n\\nRequirements:\\n\\n1. **VR Headset Mask**",
        "type": "tool"
      },
      {
        "title": "AI 回复 #1",
        "content": "我来创建一个VR眼镜形状的3D房间抓小球游戏。这是一个比较复杂的项目，让我用Three.js来实现。",
        "type": "response"
      },
      {
        "title": "交互统计",
        "content": "共 9 条记录, 2 轮用户输入, 1 轮AI回复, 2 次工具调用",
        "type": "stats"
      }
    ],
    "steps": [
      {
        "title": "📝 用户初始提问",
        "content": "我希望有一个黑色的蒙版，中间露出VR眼镜形状的画面，画面中是一个房间的一部分，用户可以旋转手机调整看到的画面，房间需要有3D感，温馨浅色系，小球在房间里到处躲藏，用户成功找到并且点击之后，右上角有一个小球记分能够+1，然后释放新的小球继续躲。总而言之就是要尽可能真实地模拟出在一个房间里抓东躲西藏的小球的VR效果",
        "type": "user"
      },
      {
        "title": "🤖 AI 思考过程",
        "content": "我来创建一个VR眼镜形状的3D房间抓小球游戏。这是一个比较复杂的项目，让我用Three.js来实现。",
        "type": "assistant"
      },
      {
        "title": "🔧 工具调用: agent",
        "content": "{\n  \"description\": \"Build VR ball hunting game\",\n  \"prompt\": \"Create a single HTML file at /home/liyishan/cut/index.html that implements a VR headset ball-hunting game with these requirements:\\n\\n1. **VR Headset Mask**: A black overlay with a VR-glasses-shaped cutout (two circular/rounded rectangular viewing areas connected by a bridge) in the center. The 3D scene is only visible through this cuto",
        "type": "tool"
      },
      {
        "title": "📝 用户追问 #1",
        "content": "我希望有一个黑色的蒙版，中间露出VR眼镜形状的画面，画面中是一个房间的一部分，用户可以旋转手机调整看到的画面，房间需要有3D感，温馨浅色系，小球在房间里到处躲藏，用户成功找到并且点击之后，右上角有一个小球记分能够+1，然后释放新的小球继续躲。总而言之就是要尽可能真实地模拟出在一个房间里抓东躲西藏的小球的VR效果。你先改网页给我预览即可",
        "type": "user"
      },
      {
        "title": "📊 交互总结",
        "content": "共 9 条记录 | 2 轮用户输入 | 1 轮AI回复 | 2 次工具调用",
        "type": "summary"
      }
    ],
    "stats": {
      "user_turns": 2,
      "assistant_turns": 2,
      "total_entries": 9,
      "tool_calls": 1
    }
  },
  {
    "id": "latex-resume",
    "name": "简历生成",
    "category": "工具",
    "project": "home-liyishan-resume-generator",
    "session": "web:s_3501f7ea-a9e5-4bf4-aeed-cb785276627c.jsonl",
    "description": "Latex 版个人简历模板，以雷军经历填充内容",
    "created": "2026-05-16T10:00:24.327Z",
    "first_prompt": "帮我做一个latex版本的个人简历模版，具体内容以雷军的经历来填入",
    "real_steps": [
      {
        "title": "用户初始提问",
        "content": "帮我做一个latex版本的个人简历模版，具体内容以雷军的经历来填入",
        "type": "prompt"
      },
      {
        "title": "工具调用: write_file",
        "content": "{\"content\": \"% !TeX TS-program = xelatex\\n% !TeX encoding = UTF-8\\n\\\\documentclass[11pt, a4paper]{article}\\n\\n% ==================== 宏包加载 ====================\\n\\\\usepackage[margin=2cm]{geometry}\\n\\\\us",
        "type": "tool"
      },
      {
        "title": "工具调用: bash",
        "content": "{\"command\": \"cd /home/liyishan && xelatex -interaction=nonstopmode Leijun_Resume.tex 2>&1\", \"timeoutMs\": 60000}",
        "type": "tool"
      },
      {
        "title": "工具调用: bash",
        "content": "{\"command\": \"which pdflatex 2>/dev/null || which lualatex 2>/dev/null || echo \\\"No TeX found\\\"; cat /etc/os-release 2>/dev/null | head -5\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: bash",
        "content": "{\"command\": \"kpsewhich ctex.sty 2>/dev/null && echo \\\"ctex exists\\\" || echo \\\"no ctex\\\"\"}",
        "type": "tool"
      },
      {
        "title": "工具调用: bash",
        "content": "{\"command\": \"dpkg -l | grep texlive | head -20\"}",
        "type": "tool"
      },
      {
        "title": "AI 回复 #1",
        "content": "我来帮你创建一个基于雷军经历的 LaTeX 个人简历模板。首先让我设计一个专业的简历布局。",
        "type": "response"
      },
      {
        "title": "AI 回复 #2",
        "content": "现在让我编译这个 LaTeX 文件：",
        "type": "response"
      },
      {
        "title": "AI 回复 #3",
        "content": "系统没有安装 TeX 环境，让我安装一下：",
        "type": "response"
      },
      {
        "title": "交互统计",
        "content": "共 239 条记录, 5 轮用户输入, 35 轮AI回复, 114 次工具调用",
        "type": "stats"
      }
    ],
    "steps": [
      {
        "title": "📝 用户初始提问",
        "content": "帮我做一个latex版本的个人简历模版，具体内容以雷军的经历来填入",
        "type": "user"
      },
      {
        "title": "🤖 AI 思考过程",
        "content": "我来帮你创建一个基于雷军经历的 LaTeX 个人简历模板。首先让我设计一个专业的简历布局。",
        "type": "assistant"
      },
      {
        "title": "🔧 工具调用: write_file",
        "content": "{\n  \"content\": \"% !TeX TS-program = xelatex\\n% !TeX encoding = UTF-8\\n\\\\documentclass[11pt, a4paper]{article}\\n\\n% ==================== 宏包加载 ====================\\n\\\\usepackage[margin=2cm]{geometry}\\n\\\\usepackage{enumitem}\\n\\\\usepackage{hyperref}\\n\\\\usepackage{fontspec}\\n\\\\usepackage{xfp}\\n\\\\usepackage{titlesec}\\n\\\\usepackage{xcolor}\\n\\\\usepackage{tabularx}\\n\\\\usepackage{multicol}\\n\\\\usepackage{boo",
        "type": "tool"
      },
      {
        "title": "🔧 工具调用: bash",
        "content": "{\n  \"command\": \"cd /home/liyishan && xelatex -interaction=nonstopmode Leijun_Resume.tex 2>&1\",\n  \"timeoutMs\": 60000\n}",
        "type": "tool"
      },
      {
        "title": "🤖 AI 回复",
        "content": "现在让我编译这个 LaTeX 文件：",
        "type": "assistant"
      },
      {
        "title": "🤖 AI 回复",
        "content": "系统没有安装 TeX 环境，让我安装一下：",
        "type": "assistant"
      },
      {
        "title": "🤖 AI 回复",
        "content": "有 pdflatex，但由于简历使用了中文，需要改用支持中文的方案。让我调整模板使用 `ctex` 宏包兼容 pdflatex 编译：",
        "type": "assistant"
      },
      {
        "title": "📝 用户追问 #1",
        "content": "直接用已有环境吧",
        "type": "user"
      },
      {
        "title": "📝 用户追问 #2",
        "content": "你就用当前的给我先简单写一个就行",
        "type": "user"
      },
      {
        "title": "📝 用户追问 #3",
        "content": "你直接写英文的吧",
        "type": "user"
      },
      {
        "title": "📝 用户追问 #4",
        "content": "给我放到 \n/home/liyishan/.pilotdeck 路径下",
        "type": "user"
      },
      {
        "title": "📊 交互总结",
        "content": "共 239 条记录 | 5 轮用户输入 | 35 轮AI回复 | 114 次工具调用",
        "type": "summary"
      }
    ],
    "stats": {
      "user_turns": 5,
      "assistant_turns": 116,
      "total_entries": 239,
      "tool_calls": 113
    }
  }
];
