import clsx from 'clsx';

import { getRandomColor } from '../../lib/helpers';

import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

export default function ColourTitleBg({ children, isNeedSofiaFont }) {
  return (
    <p
      className={clsx(
        `w-fit bg-[${getRandomColor()}] text-white text-xs font-normal py-[6] px-[8]`,
        isNeedSofiaFont && font.className
      )}
    >
      {children}
    </p>
  );
}
