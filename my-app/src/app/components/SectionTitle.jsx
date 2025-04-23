'use client';

import clsx from 'clsx';

export default function SectionTitle({ children, isRedColour, fontWeight }) {
  return (
    <h2
      className={clsx(
        isRedColour ? 'text-red-500' : 'text-white',
        fontWeight === 400 && 'font-normal',
        fontWeight === 500 && 'font-medium',
        `text-2xl leading-none`
      )}
    >
      {children}
    </h2>
  );
}
