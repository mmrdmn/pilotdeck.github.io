import React, { Children, cloneElement, isValidElement } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// MDX passes raw lowercase JSX (e.g. <img src="/foo" />) through as
// plain HTML and bypasses the `components` mapping in MDXComponents.
// So we walk children inside Frame ourselves and rewrite absolute
// `img.src` / `iframe.src` paths with the site baseUrl, ensuring they
// resolve under a project-site subpath (e.g. /pilotdeck.github.io/).
function applyBaseUrl(node, baseUrl) {
  if (!isValidElement(node)) return node;

  const next = { ...node.props };
  let changed = false;

  if ((node.type === 'img' || node.type === 'iframe') && typeof next.src === 'string') {
    const s = next.src;
    if (s.startsWith('/') && !s.startsWith('//')) {
      next.src = baseUrl.replace(/\/$/, '') + s;
      changed = true;
    }
  }

  if (next.children) {
    const rewritten = Children.map(next.children, (c) => applyBaseUrl(c, baseUrl));
    next.children = rewritten;
    changed = true;
  }

  return changed ? cloneElement(node, next) : node;
}

export default function Frame({ caption, children }) {
  const baseUrl = useBaseUrl('/');
  const adjusted = Children.map(children, (c) => applyBaseUrl(c, baseUrl));
  return (
    <figure className={styles.frame}>
      <div className={styles.frameBody}>{adjusted}</div>
      {caption && <figcaption className={styles.frameCaption}>{caption}</figcaption>}
    </figure>
  );
}
