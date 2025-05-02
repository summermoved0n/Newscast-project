'use client';

import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

export default function SofiaFontText({ children, className = '' }) {
  return <p className={`${font.className} ${className}`}>{children}</p>;
}
