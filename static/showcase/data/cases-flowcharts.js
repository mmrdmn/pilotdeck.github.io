const FLOWCHARTS = {

  "zelda-glider": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <!-- 用户 -->
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 用户要求</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">创建塞尔达网页游戏</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">林克滑翔、俯瞰大地风景</text>
    
    <!-- AI 思考 -->
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 AI 方案设计</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">低多边形3D风格 + Three.js</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">单文件HTML游戏</text>
    
    <!-- 工具调用 -->
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 构建验证</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">ask_user_question → agent</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">创建 Three.js 游戏代码</text>
    
    <!-- 交付 -->
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 交付</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">完整滑翔游戏</text>
    
    <!-- 箭头 -->
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow)"/>
    
    <!-- 底部统计 -->
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">共 2870 条记录 | 23 轮用户交互 | 1392 次工具调用 | 最终交付 WebGL 滑翔游戏</text>
    <text x="450" y="385" text-anchor="middle" fill="#6c5ce7" font-size="12">🎮 Three.js 低多边形3D · 滑翔物理 · 动态地形 · NPC 漫游</text>
  </svg>`,

  "podcast-multilingual": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 用户要求</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">播客多语言推送</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">6种语言图文页面 + 封面图</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 方案设计</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">转录 → 摘要 → 翻译 → 配图</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">6语言本地化流水线</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 批量处理</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">6个HTML页面 + 6张封面图</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">阿拉伯文 RTL 排版</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 交付</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">6语言推送页面</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow2)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow2)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow2)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">共 57 条记录 | 1 轮用户输入 | 23 次工具调用 | 一键生成全球推送</text>
    <text x="450" y="385" text-anchor="middle" fill="#00cec9" font-size="12">📄 中文 · 日本語 · Français · 한국어 · Español · العربية(RTL)</text>
  </svg>`,

  "model-training": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrow3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 用户要求</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Embedding 低代码调优</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">全栈平台开发</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 架构设计</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">React + FastAPI</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">sentence-transformers</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 全栈构建</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">5大模块: 数据/训练</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">调度/监控/日志</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 交付</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">完整平台</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow3)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow3)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow3)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">共 5 轮用户输入 | 80 轮AI回复 | 120 次工具调用 | 端到端AI平台</text>
    <text x="450" y="385" text-anchor="middle" fill="#fdcb6e" font-size="12">🧠 数据管理 · 训练配置 · 任务调度 · 实时监控 · 实验日志</text>
  </svg>`,

  "flight-shooter": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrow4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 用户要求</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">飞机大战静态网页</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">含道具系统(攻速/多弹道)</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 游戏设计</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">多类型敌机 + 5种道具</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">粒子特效 + 波次递进</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 高效构建</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">879 次工具调用</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">write_file + web_search</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 交付</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">完整网页游戏</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow4)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow4)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow4)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">共 1767 条记录 | 3 轮用户交互 | 879 次工具调用 | 完整在线可玩</text>
    <text x="450" y="385" text-anchor="middle" fill="#fdcb6e" font-size="12">🎮 火属性🔥 · 多弹道📦 · 护盾🛡️ · 全屏炸弹💥 · 星属性⭐</text>
  </svg>`,

  "vr-ball-hunt": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrow5" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 用户要求</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">VR眼镜形状画面</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">3D房间抓小球 + 陀螺仪</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 技术方案</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Three.js 3D场景</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">VR遮罩 + 小球AI躲藏</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 高效交付</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">agent 子任务一次性</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">完整单文件HTML</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 交付</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">VR抓球游戏</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow5)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow5)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow5)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">共 9 条记录 | 2 轮用户交互 | 2 次工具调用 | 高效交付</text>
    <text x="450" y="385" text-anchor="middle" fill="#a29bfe" font-size="12">🔍 VR头戴式遮罩 · 陀螺仪视角 · 小球AI躲藏 · 计分系统</text>
  </svg>`,

  "latex-resume": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrow6" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 用户要求</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">LaTeX个人简历模板</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">以雷军经历填充</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 模板设计</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">专业LaTeX布局</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">xelatex + ctex 中文字体</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 编译调试</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">xelatex → 系统缺环境</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">用户调整：用英文版</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 交付</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">LaTeX源码 + PDF</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow6)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow6)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow6)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">共 239 条记录 | 5 轮用户交互 | 114 次工具调用 | LaTeX + PDF 双格式</text>
    <text x="450" y="385" text-anchor="middle" fill="#fd79a8" font-size="12">📄 LaTeX源码 · 编译PDF · 雷军经历 · 中英文排版</text>
  </svg>`

};

const FLOWCHARTS_EN = {

  "zelda-glider": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrowe1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 User Request</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Zelda-like Web Game</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Link Gliding, Aerial Views</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 Design Proposal</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Low-Poly 3D + Three.js</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Single-File HTML Game</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 Build & Verify</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">ask_user_question → agent</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Create Three.js Game Code</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 Delivery</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Full Gliding Game</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe1)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe1)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe1)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">2,870 records | 23 user turns | 1,392 tool calls | Final: WebGL Gliding Game</text>
    <text x="450" y="385" text-anchor="middle" fill="#6c5ce7" font-size="12">🎮 Three.js Low-Poly 3D · Gliding Physics · Dynamic Terrain · NPC Roaming</text>
  </svg>`,

  "podcast-multilingual": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrowe2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 User Request</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Multilingual Podcast Push</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">6 Languages + Cover Images</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 Design Proposal</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Transcribe → Summarize → Translate</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">6-Language Localization Pipeline</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 Batch Processing</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">6 HTML Pages + 6 Cover Images</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Arabic RTL Layout</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 Delivery</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">6-Lang Push Pages</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe2)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe2)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe2)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">57 records | 1 user turn | 23 tool calls | One-Click Global Push</text>
    <text x="450" y="385" text-anchor="middle" fill="#00cec9" font-size="12">📄 Chinese · 日本語 · Français · 한국어 · Español · العربية(RTL)</text>
  </svg>`,

  "model-training": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrowe3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 User Request</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Embedding Fine-Tuning</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Low-Code Platform</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 Architecture</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">React + FastAPI</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">sentence-transformers</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 Full-Stack Build</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">5 Modules: Data / Train</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Schedule / Monitor / Log</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 Delivery</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Full Platform</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe3)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe3)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe3)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">5 user turns | 80 AI replies | 120 tool calls | End-to-end AI Platform</text>
    <text x="450" y="385" text-anchor="middle" fill="#fdcb6e" font-size="12">🧠 Data Mgmt · Training Config · Job Scheduler · Real-time Monitor · Experiment Logs</text>
  </svg>`,

  "flight-shooter": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrowe4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 User Request</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Plane Shooter Web Game</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Power-ups (Speed/Multi-shot)</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 Game Design</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Multi-type Enemies + 5 Power-ups</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Particles + Progressive Waves</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 Efficient Build</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">879 Tool Calls</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">write_file + web_search</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 Delivery</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Full Web Game</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe4)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe4)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe4)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">1,767 records | 3 user turns | 879 tool calls | Fully Playable Online</text>
    <text x="450" y="385" text-anchor="middle" fill="#fdcb6e" font-size="12">🎮 Fire🔥 · Multi-shot📦 · Shield🛡️ · Screen Bomb💥 · Star⭐</text>
  </svg>`,

  "vr-ball-hunt": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrowe5" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 User Request</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">VR Glasses View</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">3D Room Ball Hunt + Gyroscope</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 Technical Solution</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Three.js 3D Scene</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">VR Mask + Ball AI Hiding</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 Efficient Delivery</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Agent Subtask One-shot</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Complete Single-File HTML</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 Delivery</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">VR Ball Game</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe5)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe5)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe5)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">9 records | 2 user turns | 2 tool calls | Ultra-Efficient Delivery</text>
    <text x="450" y="385" text-anchor="middle" fill="#a29bfe" font-size="12">🔍 VR Headset Mask · Gyroscope View · Ball AI Hiding · Scoring System</text>
  </svg>`,

  "latex-resume": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrowe6" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 User Request</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">LaTeX Resume Template</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Filled with Lei Jun's Career</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 Template Design</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Professional LaTeX Layout</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">xelatex + ctex Chinese Fonts</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🔧 Compile & Debug</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">xelatex → Missing TeX Env</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">User: Switch to English</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 Delivery</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">LaTeX + PDF</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe6)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe6)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrowe6)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">239 records | 5 user turns | 114 tool calls | LaTeX + PDF Dual Format</text>
    <text x="450" y="385" text-anchor="middle" fill="#fd79a8" font-size="12">📄 LaTeX Source · Compiled PDF · Lei Jun's Career · Bilingual Layout</text>
  </svg>`

};
