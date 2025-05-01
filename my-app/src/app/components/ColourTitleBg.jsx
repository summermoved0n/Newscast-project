'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { getRandomColor } from '../../lib/helpers';

import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

export default function ColourTitleBg({
  children,
  isNeedSofiaFont,
  isMediaCard,
  className = '',
}) {
  const [color, setColor] = useState('#808080');

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  return (
    <p
      className={clsx(
        isMediaCard ? 'p-[12]' : 'py-[6] px-[8]',
        `${className} w-fit text-white text-xs font-normal`,
        isNeedSofiaFont && font.className
      )}
      style={{ backgroundColor: color }}
    >
      {children}
    </p>
  );
}
