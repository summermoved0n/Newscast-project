import clsx from 'clsx';

import Link from 'next/link';

export default function NavigationItem({
  current,
  pathname,
  children,
  selectItem,
  className = '',
  ...props
}) {
  return (
    <li
      className={clsx(className, 'text-xl', current && 'bg-red-500 text-white')}
    >
      <Link
        href={pathname}
        className={clsx(
          selectItem ? 'py-[10] px-[10]' : 'py-[15] px-[17]',
          'flex items-center justify-center relative',
          current &&
            'after:w-[40%] after:absolute after:bottom-[10] after:border after:border-white'
        )}
        {...props}
      >
        <span>{children}</span>
      </Link>
    </li>
  );
}
