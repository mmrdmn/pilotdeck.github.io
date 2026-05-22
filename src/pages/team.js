import React from 'react';
import ComingSoon from '@site/src/components/ComingSoon';

export default function Team() {
  return (
    <ComingSoon
      title="Team"
      titleZh="团队"
      lead="PilotDeck is jointly developed by THUNLP, ModelBest, OpenBMB and AI9Stars. Full member roster coming soon."
      leadZh="PilotDeck 由清华 THUNLP、面壁智能、OpenBMB 和 AI9Stars 联合开发。完整团队介绍即将上线。"
      tags={[
        { en: 'THUNLP', zh: '清华 THUNLP' },
        { en: 'ModelBest', zh: '面壁智能' },
        { en: 'OpenBMB', zh: 'OpenBMB' },
        { en: 'AI9Stars', zh: 'AI9Stars' },
      ]}
    />
  );
}
