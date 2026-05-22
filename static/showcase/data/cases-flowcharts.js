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

  "qq-farm": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" width="100%" width="100%">
    <defs>
      <marker id="arrow3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#4a4a6a"/></marker>
    </defs>
    <rect width="900" height="420" fill="#12121a" rx="12"/>
    
    <rect x="30" y="160" width="180" height="100" rx="14" fill="#0984e3"/>
    <text x="120" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📝 用户要求</text>
    <text x="120" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">QQ农场网页版</text>
    <text x="120" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">名MB Farm，十几人规模</text>
    
    <rect x="280" y="160" width="180" height="100" rx="14" fill="#00b894"/>
    <text x="370" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">🤖 架构设计</text>
    <text x="370" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">Python FastAPI + SQLite</text>
    <text x="370" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">Jinja2 模板 + WebSocket</text>
    
    <rect x="530" y="160" width="180" height="100" rx="14" fill="#e17055"/>
    <text x="620" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📋 文档驱动</text>
    <text x="620" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">分层架构 + 依赖注入</text>
    <text x="620" y="228" text-anchor="middle" fill="#e0e0e8" font-size="12">P0-P3 优先级规划</text>
    
    <rect x="780" y="160" width="100" height="100" rx="14" fill="#6c5ce7"/>
    <text x="830" y="190" text-anchor="middle" fill="white" font-size="15" font-weight="bold">📊 交付</text>
    <text x="830" y="210" text-anchor="middle" fill="#e0e0e8" font-size="12">架构设计文档</text>
    
    <line x1="210" y1="210" x2="278" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow3)"/>
    <line x1="460" y1="210" x2="528" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow3)"/>
    <line x1="710" y1="210" x2="778" y2="210" stroke="#4a4a6a" stroke-width="2" marker-end="url(#arrow3)"/>
    
    <rect x="30" y="340" width="840" height="60" rx="10" fill="#1a1a2e"/>
    <text x="450" y="365" text-anchor="middle" fill="#8888a0" font-size="13">共 384 条记录 | 10 轮用户交互 | 149 次工具调用 | 文档驱动开发</text>
    <text x="450" y="385" text-anchor="middle" fill="#e17055" font-size="12">⚠️ 此案例为后端项目，需部署运行。可访问: http://10.31.112.4:52006/api/projects/home-liyishan-mbfarm-MBFarm/ 查看源码</text>
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
