import React from 'react';
import DocLanguageSync from '@site/src/components/DocLanguageSync';
import { LanguageProvider } from '@site/src/context/LanguageContext';

export default function Root({ children }) {
  return (
    <LanguageProvider>
      <DocLanguageSync />
      {children}
    </LanguageProvider>
  );
}
