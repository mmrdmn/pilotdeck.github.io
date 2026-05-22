import React from 'react';
import ComingSoon from '@site/src/components/ComingSoon';

export default function Demo() {
  return (
    <ComingSoon
      title="Interactive Demo"
      titleZh="交互式 Demo"
      lead="An in-browser PilotDeck playground is on the way. In the meantime, you can play with the live cockpit at http://58.57.119.12:52006/"
      leadZh="网页内的 PilotDeck 体验沙箱正在路上。在此之前，可以先访问 http://58.57.119.12:52006/ 试玩完整驾驶舱。"
      tags={[
        { en: 'WorkSpace Switcher', zh: 'WorkSpace 切换' },
        { en: 'Memory Inspector', zh: '记忆面板' },
        { en: 'Routing Visualizer', zh: '路由可视化' },
        { en: 'Always-on Timeline', zh: '常驻时间线' },
      ]}
    />
  );
}
