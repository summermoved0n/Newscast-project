import clsx from 'clsx';

import Link from 'next/link';

export default function NavigationItem({
  current,
  pathname,
  children,
  selectItem,
  smallScreen,
  className = '',
  ...props
}) {
  return (
    <li
      className={clsx(
        className,
        'text-xl',
        current && !smallScreen && 'bg-red-500 text-white',
        current && smallScreen && ' text-red-500'
      )}
    >
      <Link
        href={pathname}
        className={clsx(
          selectItem ? 'py-[10] px-[10]' : 'py-[15] px-[17]',
          'flex items-center justify-center relative',
          current &&
            !smallScreen &&
            'after:w-[40%] after:absolute after:bottom-[10] after:border after:border-white',
          current &&
            smallScreen &&
            'after:w-[40%] after:absolute after:bottom-[5] after:border after:border-red-500'
        )}
        {...props}
      >
        <span>{children}</span>
      </Link>
    </li>
  );
}
