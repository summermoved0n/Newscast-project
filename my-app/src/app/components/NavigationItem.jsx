import clsx from 'clsx';

import Link from 'next/link';

export default function NavigationItem({ current, pathname, children }) {
  return (
    <li className={clsx('text-xl', current && 'bg-red-500 text-white')}>
      <Link
        href={pathname}
        className={clsx(
          'flex items-center justify-center py-[15] px-[17] relative',
          current &&
            'after:w-[40%] after:absolute after:bottom-[10] after:border after:border-white'
        )}
      >
        <span>{children}</span>
      </Link>
    </li>
  );
}
