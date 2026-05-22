import React from 'react';

// Minimal inline SVG icon set that mirrors the Font Awesome 6 solid icons
// referenced in the Mintlify mdx docs. Anything not in the map falls back
// to a neutral square so the layout never breaks.
const PATHS = {
  cubes: 'M9 3l-7 4v10l7 4 7-4 7 4 7-4V7l-7-4-7 4-7-4z',
  route:
    'M3 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm12 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6 7v3a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v3',
  brain:
    'M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v1a3 3 0 0 0 2 2.8V17a3 3 0 0 0 4 2.8V20a3 3 0 0 0 3 0v-.2a3 3 0 0 0 4-2.8v-2.2A3 3 0 0 0 18 12v-1a3 3 0 0 0-3-3V7a3 3 0 0 0-3-3 3 3 0 0 0-3 0Z',
  clock: 'M12 7v5l3 2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z',
  'tower-broadcast':
    'M5 6c-1 1.5-1 4 0 6m14-6c1 1.5 1 4 0 6M7 8c-.6 1-.6 3 0 4m10-4c.6 1 .6 3 0 4M12 10v12m-2 0h4M10 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z',
  shuffle:
    'M16 3h5v5M4 20l16-16M14 18l3 3m4-4-3 3M4 4l5 5',
  rotate:
    'M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5',
  'power-off': 'M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10',
  'piggy-bank':
    'M19 6h-1V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4v2h3v-2h6v2h3v-2a4 4 0 0 0 4-4v-3a4 4 0 0 0-2-3.5z M16 11h.01',
  globe: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a16 16 0 0 1 0 20 16 16 0 0 1 0-20z',
  desktop:
    'M3 5h18v12H3z M8 21h8M12 17v4',
  camera:
    'M3 8h4l2-3h6l2 3h4v11H3z M12 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  'magnifying-glass':
    'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5',
  folder: 'M3 7v12h18V9h-9l-2-2H3z',
  'arrows-turn-right': 'M3 7h14l-3-3M14 13l3 3 3-3M17 16V7',
  apple:
    'M16 3a4 4 0 0 0-3 1.5 4 4 0 0 0 3 6 4 4 0 0 0 3-6A4 4 0 0 0 16 3zM7 11c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z',
  'node-js': 'M12 2 3 7v10l9 5 9-5V7l-9-5z M12 7v10',
  'git-alt': 'M21 12 12 3 3 12l9 9 9-9z M12 7v8m-4-4h8',
  terminal: 'M4 5h16v14H4z M7 9l3 3-3 3M13 15h4',
  'rectangle-terminal': 'M3 5h18v14H3z M7 9l3 3-3 3M13 15h4',
  browser: 'M3 5h18v14H3z M3 9h18 M7 7h.01',
  comments:
    'M3 7c0-2 2-4 4-4h6c2 0 4 2 4 4v4c0 2-2 4-4 4h-2l-5 4v-4H7c-2 0-4-2-4-4V7z M21 11v4c0 2-2 4-4 4',
  'shield-halved': 'M12 2 4 5v7c0 5 4 8 8 10 4-2 8-5 8-10V5z M12 2v20',
  'code-branch':
    'M6 3v18m0-12a3 3 0 1 0 6 0V8a3 3 0 0 1 3-3M18 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  'puzzle-piece':
    'M10 3h4v3a2 2 0 1 0 4 0V3h3v4h-3a2 2 0 1 0 0 4h3v7H10v-3a2 2 0 1 1-4 0v3H3V11h3a2 2 0 1 1 0-4H3V3h3',
  'border-all': 'M3 3h18v18H3z M12 3v18 M3 12h18',
  syringe:
    'M14 3l7 7-2 2-3-3-7 7v3H6v3H3v-3h3v-3l7-7-3-3 2-2z',
  handshake:
    'M3 12 7 8l4 4 2-2 4 4-4 4-2-2-4 4-4-4z M11 10l3-3M14 7l3 3',
  vial: 'M9 2h6v3l-3 16-3-16z M9 13h6',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7l1-8z',
  book: 'M4 19V5a2 2 0 0 1 2-2h13v17H6a2 2 0 0 1 0-4h13',
  star: 'M12 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z',
  'file-lines':
    'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13h8 M8 17h8 M8 9h2',
  gamepad: 'M4 8h16v8H4z M8 12h4 M10 10v4 M16 11h.01 M18 13h.01',
  microchip:
    'M6 6h12v12H6z M9 6V3 M12 6V3 M15 6V3 M9 18v3 M12 18v3 M15 18v3 M6 9H3 M6 12H3 M6 15H3 M18 9h3 M18 12h3 M18 15h3',
  language:
    'M3 6h10M8 4v2M5 8c2 5 6 5 6 5M12 8s-2 3-5 5M14 19l3-7 3 7M15 17h4',
};

const FALLBACK_PATH = 'M3 3h18v18H3z';

export default function Icon({ name, size = 16, className, style }) {
  const d = PATHS[name] || FALLBACK_PATH;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
