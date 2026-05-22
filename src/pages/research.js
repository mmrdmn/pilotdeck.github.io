import React from 'react';
import ComingSoon from '@site/src/components/ComingSoon';

export default function Research() {
  return (
    <ComingSoon
      title="Research"
      titleZh="研究"
      lead="Papers, models, and design notes behind PilotDeck. We are still tidying drafts — check back soon."
      leadZh="PilotDeck 背后的论文、模型与设计笔记。我们正在整理中，敬请期待。"
      tags={[
        { en: 'White-box Memory', zh: '白盒记忆' },
        { en: 'Routing', zh: '智能路由' },
        { en: 'Always-on', zh: '常驻推理' },
        { en: 'Agent OS', zh: 'Agent 操作系统' },
      ]}
    />
  );
}
