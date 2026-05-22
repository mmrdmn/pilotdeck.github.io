import React from 'react';
import ComingSoon from '@site/src/components/ComingSoon';

export default function Blog() {
  return (
    <ComingSoon
      title="Blog"
      titleZh="博客"
      lead="Release notes, engineering deep-dives, and case studies will live here. First post lands with the 0.1 stable release."
      leadZh="版本说明、工程深度文章与案例研究都将发布在这里。首篇文章随 0.1 正式版一同上线。"
      tags={[
        { en: 'Release Notes', zh: '版本说明' },
        { en: 'Engineering', zh: '工程实践' },
        { en: 'Case Study', zh: '案例研究' },
      ]}
    />
  );
}
