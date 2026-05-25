import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import MDXComponents from '@theme-original/MDXComponents';
import {
  Card,
  CardGroup,
  Accordion,
  AccordionGroup,
  Tab,
  Tabs,
  Tip,
  Note,
  Info,
  Warning,
  Check,
  Danger,
  Steps,
  Step,
  Frame,
  Icon,
} from '@site/src/components/Mintlify';

// Auto-prefix absolute-path <img src="/..."> with the site baseUrl so
// static-folder assets resolve correctly when the site is served from
// a project subpath (e.g. /pilotdeck.github.io/).
function BaseUrlImg(props) {
  const { src, ...rest } = props;
  const isAbsolutePath =
    typeof src === 'string' && src.startsWith('/') && !src.startsWith('//');
  // Always call the hook to respect React's Rules of Hooks; only swap
  // the src when the original was an absolute path.
  const prefixed = useBaseUrl(typeof src === 'string' ? src : '/');
  const resolvedSrc = isAbsolutePath ? prefixed : src;
  return <img {...rest} src={resolvedSrc} />;
}

export default {
  ...MDXComponents,
  img: BaseUrlImg,
  Card,
  CardGroup,
  Accordion,
  AccordionGroup,
  Tab,
  Tabs,
  Tip,
  Note,
  Info,
  Warning,
  Check,
  Danger,
  Steps,
  Step,
  Frame,
  Icon,
};
