// Preview URL 由前端 getPreviewUrl(project, file) 动态构建
// 从 52006 访问: ../{project}/preview/{file}
// 从 8090 访问: /preview/{project}/preview/{file}

const CASES = [
  {
    id: "zelda-glider",
    name: "塞尔达滑翔",
    nameEn: "Zelda Sky Glide",
    category: "网页游戏",
    categoryEn: "Web Game",
    description: "类似塞尔达的网页游戏，控制林克用滑翔翼从高处滑翔，自由俯瞰大地风景、建筑和NPC",
    descriptionEn: "A Zelda-inspired web game where you control Link gliding from heights on a wing, freely overlooking the landscape, architecture, and NPCs below.",
    stats: { user_turns: 23, assistant_turns: 1412, tool_calls: 1388 },
    thumbnail: "p/zelda/3d_s1.png",
    preview: {
      file: "p/zelda/skyglide3d.html",
      type: "html",
      label: "🎮 在线玩",
      labelEn: "🎮 Play Online"
    },
    highlighted_steps: [
      {
        type: "user",
        title: "📝 用户初始要求",
        titleEn: "📝 User's Initial Request",
        content: "请你帮忙创建一个类似塞尔达的游戏，但是要是网页版的，其中我最关心的功能就是，这个玩家可以控制林克这个角色。用滑翔翼从高处滑下，在这个空气中间，随着风到处滑翔。就是给人一种非常自由自在的感觉，滑翔的过程中间，你就可以看到这个景色，脚下的景色不断变换呀。然后脚下可能有一些NPC角色在这里样子行动啊。然后你的脚下的这个各种建筑啊、结构啊、风景啊、树木啊、道路啊、流水啊，都在自在地行动，就是你会感觉飞翔的这个感觉非常好。请生成一个完整的网页版的塞尔达的游戏，关键是飞行功能。",
        contentEn: "Please help me create a Zelda-like game as a web version. The key feature I care about most is controlling Link, who glides from a high place on a wing, drifting through the air with the wind. It should feel very free and open. As you glide, the scenery below keeps changing — NPCs walk around, buildings, structures, scenery, trees, roads, and water all feel alive. The flying experience should be wonderful. Please generate a complete Zelda-like web game with focus on the flying mechanic."
      },
      {
        type: "assistant",
        title: "🤖 方案设计",
        titleEn: "🤖 Design Proposal",
        content: "选择最佳方案来打造这个游戏：🎨 **低多边形3D风格** — 用 Three.js 打造，类似《荒野之息》的清新3D世界，沉浸感最强；💻 **电脑浏览器** — 键盘+鼠标操作，体验最好；🪂 **核心玩法**：林克从高处跳下 → 展开滑翔翼 → 随风滑翔，俯瞰大地。这会是一个完整的单文件HTML游戏。",
        contentEn: "Choosing the best approach for this game: 🎨 **Low-poly 3D style** — Built with Three.js, creating a fresh 3D world similar to Breath of the Wild with the strongest immersion; 💻 **Browser** — Keyboard + mouse for the best experience; 🪂 **Core gameplay**: Link jumps from a height → opens glider → soars with the wind, overlooking the land. This will be a complete single-file HTML game."
      },
      {
        type: "tool",
        title: "🔧 核心构建",
        titleEn: "🔧 Core Build",
        content: "AI 通过 ask_user_question 确认视觉风格（像素风/低多边形3D/手绘卡通风），用户选择\"你选最好\"后，AI 使用 agent 子任务创建完整的 Three.js 游戏代码，包括滑翔物理、地形生成、NPC 系统，并调用 bash 和 read_file 验证文件。",
        contentEn: "AI confirmed the visual style via ask_user_question (pixel art / low-poly 3D / hand-drawn cartoon). After the user chose \"whichever you think is best,\" AI used an agent subtask to create the complete Three.js game code, including gliding physics, terrain generation, NPC system, and called bash and read_file to verify the files."
      },
      {
        type: "summary",
        title: "📊 交付成果",
        titleEn: "📊 Deliverables",
        content: "共 2870 条记录 | 23 轮用户输入 | 714 轮AI回复 | 1392 次工具调用。最终交付：完整的 WebGL 塞尔达滑翔游戏，支持 Three.js 3D 渲染、滑翔物理、自由操控、动态地形、NPC 漫游。",
        contentEn: "2,870 records total | 23 user turns | 714 AI replies | 1,392 tool calls. Final delivery: a complete WebGL Zelda-style gliding game supporting Three.js 3D rendering, gliding physics, free control, dynamic terrain, and NPC roaming."
      }
    ]
  },
  {
    id: "podcast-multilingual",
    name: "播客多语言推送",
    nameEn: "Multilingual Podcast Push",
    category: "多媒体",
    categoryEn: "Multimedia",
    description: "将一期英文播客推送给全球受众，一键生成6种语言版本的图文推送页面",
    descriptionEn: "Take an English podcast and deliver it to a global audience — one-click generation of push pages in 6 languages.",
    stats: { user_turns: 1, assistant_turns: 18, tool_calls: 17 },
    thumbnail: "p/podcast/cover_zh.png",
    preview: {
      file: "p/podcast/pages/zh.html",
      type: "html",
      label: "📄 中文推送",
      labelEn: "📄 Chinese Push",
      variants: [
        { lang: "中文", langEn: "Chinese", path: "p/podcast/pages/zh.html" },
        { lang: "日本語", langEn: "Japanese", path: "p/podcast/pages/ja.html" },
        { lang: "Français", langEn: "French", path: "p/podcast/pages/fr.html" },
        { lang: "한국어", langEn: "Korean", path: "p/podcast/pages/ko.html" },
        { lang: "Español", langEn: "Spanish", path: "p/podcast/pages/es.html" },
        { lang: "العربية", langEn: "Arabic", path: "p/podcast/pages/ar.html" }
      ]
    },
    highlighted_steps: [
      {
        type: "user",
        title: "📝 用户初始要求",
        titleEn: "📝 User's Initial Request",
        content: "工作目录里有一段英文播客 podcast.mp3。我想把这期播客推送给全球受众，覆盖中文、日文、法文、韩文、西班牙文和阿拉伯文六个语言版本。帮我做出六个语言版本的图文推送页面，每个页面要有：播客内容的本地化摘要文案、一张适配当地文化审美的主题配图，整体排版要好看、专业。注意阿拉伯文版本需要 RTL（从右到左）排版。所有产出放到 results/ 目录。",
        contentEn: "There's an English podcast podcast.mp3 in the working directory. I want to push this podcast to a global audience, covering Chinese, Japanese, French, Korean, Spanish, and Arabic — six language versions. Help me create six language versions of illustrated push pages. Each page needs: a localized summary of the podcast content and a thematically appropriate illustration matching local cultural aesthetics. The overall layout should look beautiful and professional. Note that the Arabic version needs RTL (right-to-left) layout. Place all output in the results/ directory."
      },
      {
        type: "assistant",
        title: "🤖 方案设计",
        titleEn: "🤖 Design Proposal",
        content: "AI 首先探索工作目录结构，检查 skills 目录（speech-to-text 等技能模块），制定完整流水线：音频转录 → 英文摘要/关键词提取 → 6种语言翻译 → 每种语言生成本地化摘要和配图 → 6个专业排版页面（含 RTL 支持）。",
        contentEn: "AI first explored the working directory structure, checked the skills directory (speech-to-text and other skill modules), and designed a complete pipeline: audio transcription → English summary/keyword extraction → translation into 6 languages → localized summaries and illustrations per language → 6 professionally typeset pages (with RTL support)."
      },
      {
        type: "tool",
        title: "🔧 批量处理",
        titleEn: "🔧 Batch Processing",
        content: "使用 agent 子任务并行处理：① 音频转录为 transcript.txt ② 生成多语言 summary.json ③ 为每种语言生成文化适配封面图（cover_zh.png, cover_ja.png 等）④ 生成6个 HTML 推送页面，阿拉伯文版本使用 RTL 排版。",
        contentEn: "Used agent subtasks for parallel processing: (1) Transcribed audio to transcript.txt, (2) Generated multilingual summary.json, (3) Generated culturally adapted cover images for each language (cover_zh.png, cover_ja.png, etc.), (4) Generated 6 HTML push pages with RTL layout for the Arabic version."
      },
      {
        type: "summary",
        title: "📊 交付成果",
        titleEn: "📊 Deliverables",
        content: "共 57 条记录 | 1 轮用户输入 | 12 轮AI回复 | 23 次工具调用。最终交付：6 个语言版本的精美推送页面 + 6 张文化适配封面图 + 英文转录全文 + 多语言摘要 JSON。用户只需一句话，AI 完成了完整的多语言本地化推送流水线。",
        contentEn: "57 records total | 1 user turn | 12 AI replies | 23 tool calls. Final delivery: 6 beautifully typeset push pages in different languages + 6 culturally adapted cover images + full English transcript + multilingual summary JSON. With just one sentence, the user had AI complete a full multilingual localization push pipeline."
      }
    ]
  },
  {
    id: "qq-farm",
    name: "QQ农场",
    nameEn: "QQ Farm",
    category: "网页游戏",
    categoryEn: "Web Game",
    description: "网页版简易 QQ 农场游戏 MB Farm，FastAPI + SQLite 架构，支持社交偷菜",
    descriptionEn: "A simple web-based QQ Farm game called MB Farm, built with FastAPI + SQLite, featuring social 'steal vegetables' mechanics.",
    stats: { user_turns: 10, assistant_turns: 159, tool_calls: 149 },
    thumbnail: null,
    preview: null,
    highlighted_steps: [
      {
        type: "user",
        title: "📝 用户初始要求",
        titleEn: "📝 User's Initial Request",
        content: "你了解 QQ 农场吗？我想做一个网页版、简易版的 QQ 农场游戏，游戏名叫做 MB Farm。最多十几个人游玩。你有什么建议。",
        contentEn: "Are you familiar with QQ Farm? I want to make a web-based, simplified version of QQ Farm called MB Farm. For at most a dozen players. What suggestions do you have?"
      },
      {
        type: "assistant",
        title: "🤖 架构设计",
        titleEn: "🤖 Architecture Design",
        content: "十几人的规模非常小，不需要微服务、消息队列这些重型基础设施。目标是：快开发、能跑、够用。推荐方案：后端 Python + FastAPI（轻量、API 自动文档），数据库 SQLite（零配置，单文件），前端 Jinja2 模板 + 原生 CSS/JS（零构建，直接写），实时 FastAPI WebSocket（偷菜通知、作物成熟提醒），认证 FastAPI 内置 Session。",
        contentEn: "A dozen players is very small — no need for heavy infrastructure like microservices or message queues. The goal is: fast development, runnable, sufficient. Recommended approach: Python backend + FastAPI (lightweight, auto API docs), SQLite database (zero config, single file), Jinja2 templates + vanilla CSS/JS frontend (zero build, write directly), real-time FastAPI WebSocket (steal notifications, crop maturity alerts), auth via FastAPI built-in Sessions."
      },
      {
        type: "user",
        title: "💡 亮点：模块化架构",
        titleEn: "💡 Highlight: Modular Architecture",
        content: "用户要求项目结构太潦草了，按模块区分，要重视依赖注入的思想，还要给出每个模块的优先级。AI 随后使用 agent 子任务设计了完整架构：models/services/repositories/routes/core/templates/static 分层结构。",
        contentEn: "The user felt the project structure was too messy and requested module-based separation with emphasis on dependency injection and priority levels for each module. AI then used an agent subtask to design the complete architecture: a layered structure of models/services/repositories/routes/core/templates/static."
      },
      {
        type: "tool",
        title: "📋 文档驱动开发",
        titleEn: "📋 Document-Driven Development",
        content: "创建 docs 目录，把优先级为 P0 的内容（基础设施、注册/登录）写成文档，按模块区分子目录。每个模块的文档先规划方案再开始写。随后创建项目 README，记录架构和 docs 目录结构。",
        contentEn: "Created a docs directory, wrote documentation for P0-priority items (infrastructure, registration/login) organized in module-based subdirectories. Each module's document was planned before implementation. Then created the project README documenting the architecture and docs directory structure."
      },
      {
        type: "summary",
        title: "📊 交付成果",
        titleEn: "📊 Deliverables",
        content: "共 384 条记录 | 10 轮用户输入 | 100 轮AI回复 | 149 次工具调用。最终交付：完整的 MB Farm 架构设计文档，包含分层架构、依赖注入体系、P0-P3 优先级规划。项目采用 FastAPI + SQLite + Jinja2，支持 WebSocket 实时偷菜通知。",
        contentEn: "384 records total | 10 user turns | 100 AI replies | 149 tool calls. Final delivery: complete MB Farm architecture design documentation, including layered architecture, dependency injection system, and P0-P3 priority planning. The project uses FastAPI + SQLite + Jinja2, supporting WebSocket real-time steal notifications."
      }
    ]
  },
  {
    id: "flight-shooter",
    name: "飞机大战",
    nameEn: "Plane Wars",
    category: "网页游戏",
    categoryEn: "Web Game",
    description: "经典飞机大战小游戏，包含多类型敌机、道具系统、特效和波次递进难度",
    descriptionEn: "A classic plane shooter game with multiple enemy types, power-up system, particle effects, and progressive wave difficulty.",
    stats: { user_turns: 3, assistant_turns: 10, tool_calls: 879 },
    thumbnail: "p/flight/game.png",
    preview: {
      file: "p/flight/flight-shooter.html",
      type: "html",
      label: "🎮 在线玩",
      labelEn: "🎮 Play Online"
    },
    highlighted_steps: [
      {
        type: "user",
        title: "📝 用户初始要求",
        titleEn: "📝 User's Initial Request",
        content: "请你帮我做一个飞机大战小游戏，做一个静态网页，要求能够在线玩，要设计一些道具，比如增加攻速，增加子弹等等，可以去网上查查相关游戏的玩法。",
        contentEn: "Please help me make a classic plane shooter mini-game as a static webpage that can be played online. Design some power-ups such as increased attack speed, extra bullets, etc. You can search online for relevant gameplay ideas."
      },
      {
        type: "assistant",
        title: "🤖 游戏设计",
        titleEn: "🤖 Game Design",
        content: "AI 通过 web_search 调研经典玩法，设计了完整的游戏方案：玩家飞机支持鼠标/键盘控制移动和自动射击；敌机类型分为小型机、中型机、大型机；道具系统包含 🔥 火属性（增加攻速）、📦 多弹道（三连发/四连发）、🛡️ 护盾（临时无敌）、💥 全屏炸弹（清除所有敌人）、⭐ 星属性（增强伤害）。还有爆炸粒子效果、分数系统、波次递进难度。",
        contentEn: "AI researched classic gameplay via web_search and designed a complete game scheme: player aircraft controlled by mouse/keyboard with auto-fire; enemy types divided into small, medium, and large; power-up system includes 🔥 Fire (attack speed), 📦 Multi-shot (3x/4x), 🛡️ Shield (temporary invincibility), 💥 Screen bomb (clear all enemies), ⭐ Star (damage boost). Also features explosion particle effects, scoring system, and progressive wave difficulty."
      },
      {
        type: "tool",
        title: "🔧 高效构建",
        titleEn: "🔧 Efficient Build",
        content: "AI 调用 879 次工具，包括 write_file 创建 game.html（完整游戏逻辑）、index.html（入口页），通过 web_search 验证玩法设计，多次 bash 操作验证文件。",
        contentEn: "AI invoked 879 tool calls, including write_file to create game.html (complete game logic) and index.html (entry page), verified gameplay design via web_search, and used multiple bash operations to validate files."
      },
      {
        type: "summary",
        title: "📊 交付成果",
        titleEn: "📊 Deliverables",
        content: "共 1767 条记录 | 3 轮用户输入 | 10 轮AI回复 | 879 次工具调用。最终交付：完整的飞机大战静态网页游戏，包含多类型敌机、5种道具、粒子特效、分数系统、波次递进难度，可直接在线游玩。",
        contentEn: "1,767 records total | 3 user turns | 10 AI replies | 879 tool calls. Final delivery: a complete plane shooter static web game with multiple enemy types, 5 power-up types, particle effects, scoring system, and progressive wave difficulty — playable directly in the browser."
      }
    ]
  },
  {
    id: "vr-ball-hunt",
    name: "VR毛球寻找",
    nameEn: "VR Ball Hunt",
    category: "互动体验",
    categoryEn: "Interactive Experience",
    description: "VR眼镜形状的3D房间抓小球游戏，支持手机陀螺仪旋转视角。最终效果见 https://onehot123.github.io/miam/",
    descriptionEn: "A VR-glasses-shaped 3D room ball-hunting game with phone gyroscope view rotation. See final result at https://onehot123.github.io/miam/",
    stats: { user_turns: 2, assistant_turns: 1, tool_calls: 2 },
    thumbnail: "p/ball/ball.png",
    preview: {
      file: "p/ball/index.html",
      label: "🔍 在线玩",
      labelEn: "🔍 Play Online",
      externalUrl: "https://onehot123.github.io/miam/"
    },
    highlighted_steps: [
      {
        type: "user",
        title: "📝 用户初始要求",
        titleEn: "📝 User's Initial Request",
        content: "我希望有一个黑色的蒙版，中间露出VR眼镜形状的画面，画面中是一个房间的一部分，用户可以旋转手机调整看到的画面，房间需要有3D感，温馨浅色系，小球在房间里到处躲藏，用户成功找到并且点击之后，右上角有一个小球记分能够+1，然后释放新的小球继续躲。总而言之就是要尽可能真实地模拟出在一个房间里抓东躲西藏的小球的VR效果。",
        contentEn: "I want a black mask with a VR-glasses-shaped opening in the center. The view should show part of a room. Users can rotate their phone to adjust the view. The room needs a 3D feel with warm, light colors. Small balls hide all around the room. When users find and click a ball, the counter in the top-right corner increments by 1, and a new ball spawns to hide. The goal is to realistically simulate a VR experience of catching hidden balls in a room."
      },
      {
        type: "assistant",
        title: "🤖 技术方案",
        titleEn: "🤖 Technical Solution",
        content: "使用 Three.js 实现：① VR 头戴式遮罩（黑色背景 + 两个圆形/圆角矩形视孔 + 中间桥接）② 3D 房间场景（温馨浅色系，包含墙壁、地板、家具）③ 手机陀螺仪控制视角旋转 ④ 小球 AI 躲藏系统（自动寻找家具后方隐藏位置）⑤ 点击检测和计分系统。",
        contentEn: "Implemented with Three.js: (1) VR headgear mask (black background + two circular/rounded-rectangular viewports + bridge connection), (2) 3D room scene (warm, light-colored with walls, floor, furniture), (3) Phone gyroscope for view rotation, (4) Ball AI hiding system (automatically finds hiding spots behind furniture), (5) Click detection and scoring system."
      },
      {
        type: "tool",
        title: "🔧 高效交付",
        titleEn: "🔧 Efficient Delivery",
        content: "AI 使用 agent 子任务一次性创建完整的 index.html 文件，包含所有 Three.js 3D 场景、VR 遮罩 UI、陀螺仪交互、小球 AI 躲藏逻辑、计分系统。",
        contentEn: "AI used an agent subtask to create the complete index.html file in one go, containing all Three.js 3D scenes, VR mask UI, gyroscope interaction, ball AI hiding logic, and scoring system."
      },
      {
        type: "summary",
        title: "📊 交付成果",
        titleEn: "📊 Deliverables",
        content: "共 9 条记录 | 2 轮用户输入 | 1 轮AI回复 | 2 次工具调用。用户一句话描述想法，AI 直接交付了完整的 VR 眼镜 3D 抓球游戏，实现了沉浸式虚拟抓球体验。线上版本: https://onehot123.github.io/miam/",
        contentEn: "9 records total | 2 user turns | 1 AI reply | 2 tool calls. With a one-sentence description of the idea, the user had AI directly deliver a complete VR-glasses 3D ball-hunting game, achieving an immersive virtual ball-catching experience. Online version: https://onehot123.github.io/miam/"
      }
    ]
  },
  {
    id: "latex-resume",
    name: "简历生成",
    nameEn: "Resume Generator",
    category: "工具",
    categoryEn: "Tool",
    description: "基于雷军经历的 LaTeX 个人简历模板，支持中英文排版",
    descriptionEn: "A LaTeX personal resume template based on Lei Jun's career experience, supporting both Chinese and English layouts.",
    stats: { user_turns: 5, assistant_turns: 35, tool_calls: 114 },
    thumbnail: "p/resume/resume.png",
    preview: {
      file: "p/resume/cv_leijun.pdf",
      type: "pdf",
      label: "📥 下载 PDF",
      labelEn: "📥 Download PDF"
    },
    highlighted_steps: [
      {
        type: "user",
        title: "📝 用户初始要求",
        titleEn: "📝 User's Initial Request",
        content: "帮我做一个 latex 版本的个人简历模版，具体内容以雷军的经历来填入。",
        contentEn: "Help me create a LaTeX-based personal resume template, filling in the content based on Lei Jun's career experience."
      },
      {
        type: "assistant",
        title: "🤖 模板设计",
        titleEn: "🤖 Template Design",
        content: "AI 设计了一个专业的 LaTeX 简历布局：使用 xelatex 编译、geometry 设置页边距、enumitem 控制列表、hyperref 添加超链接、fontspec 设置中文字体、titlesec 定制标题格式、tabularx 排版经历表格。",
        contentEn: "AI designed a professional LaTeX resume layout: using xelatex for compilation, geometry for margins, enumitem for list control, hyperref for hyperlinks, fontspec for Chinese font support, titlesec for custom heading formats, and tabularx for experience tables."
      },
      {
        type: "tool",
        title: "🔧 编译调试",
        titleEn: "🔧 Compilation & Debugging",
        content: "AI 尝试 xelatex 编译但系统缺少 TeX 环境。用户要求\"直接用已有环境\"。AI 发现系统有 pdflatex 但不支持中文。用户建议\"直接用英文的\"。AI 调整模板为英文版本，使用 ctex 兼容 pdflatex。",
        contentEn: "AI attempted xelatex compilation but the system lacked the TeX environment. The user requested to use the existing environment. AI found that pdflatex was available but didn't support Chinese. The user suggested using English directly. AI adjusted the template to an English version, using ctex for pdflatex compatibility."
      },
      {
        type: "user",
        title: "💡 亮点：灵活调整",
        titleEn: "💡 Highlight: Flexible Adjustment",
        content: "用户要求\"你就用当前的给我先简单写一个就行\"，随后又要求\"你直接写英文的吧\"，最后要求放到 /home/liyishan/.pilotdeck 路径下。整个过程体现了 AI 快速响应用户需求变化的能力。",
        contentEn: "The user first said \"just write a simple version with what we have,\" then asked \"write it in English directly,\" and finally requested placing it in /home/liyishan/.pilotdeck. The entire process demonstrated AI's ability to quickly respond to changing user requirements."
      },
      {
        type: "summary",
        title: "📊 交付成果",
        titleEn: "📊 Deliverables",
        content: "共 239 条记录 | 5 轮用户输入 | 35 轮AI回复 | 114 次工具调用。最终交付：专业 LaTeX 简历模板（以雷军经历填充），包含个人简介、教育经历、职业经历、项目成就等模块，同时支持中英文排版。",
        contentEn: "239 records total | 5 user turns | 35 AI replies | 114 tool calls. Final delivery: a professional LaTeX resume template (filled with Lei Jun's experience) including sections for personal profile, education, work experience, and project achievements, supporting both Chinese and English layouts."
      }
    ]
  }
];
