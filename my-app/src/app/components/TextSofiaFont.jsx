'use client';

import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

export default function TextSofiaFont({ text }) {
  return <p className={font.className}>{text}</p>;
}
