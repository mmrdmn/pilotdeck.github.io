import React from 'react';
import ComingSoon from '@site/src/components/ComingSoon';

export default function UseCases() {
  return (
    <ComingSoon
      title="Use Cases"
      titleZh="应用场景"
      lead="Detailed walk-throughs for each PilotDeck case study — research reports, mini-games, low-code AI platforms and multi-lingual podcast ops."
      leadZh="PilotDeck 全景案例详细拆解 —— 研究报告、AR 小游戏、低代码 AI 平台、多语种播客运营全流程，敬请期待。"
      tags={[
        { en: 'Document Generation', zh: '文档生成' },
        { en: 'AR Game', zh: 'AR 小游戏' },
        { en: 'AI Platform', zh: 'AI 平台' },
        { en: 'Podcast Localization', zh: '播客本地化' },
      ]}
    />
  );
}
