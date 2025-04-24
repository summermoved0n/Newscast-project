'use client';

import clsx from 'clsx';

export default function SectionTitle({
  children,
  isRedColour,
  fontWeight,
  fontSize,
}) {
  return (
    <h2
      className={clsx(
        isRedColour ? 'text-red-500' : 'text-white',
        fontSize === 'small' ? 'text-sm' : 'text-2xl',
        fontWeight === 400 && 'font-normal',
        fontWeight === 500 && 'font-medium',
        `leading-none`
      )}
    >
      {children}
    </h2>
  );
}
