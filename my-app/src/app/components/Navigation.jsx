'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import NavigationItem from '@/app/components/NavigationItem';
import InputSearch from '@/app/components/InputSearch';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="flex justify-between mb-[25] flex bg-[#393939]">
      <ul className="flex text-white">
        <NavigationItem current={pathname === '/'} pathname="/">
          Home
        </NavigationItem>
        <NavigationItem
          current={pathname === '/international'}
          pathname="/international"
        >
          International
        </NavigationItem>
        <NavigationItem current={pathname === '/sports'} pathname="/sports">
          Sports
        </NavigationItem>
        <NavigationItem current={pathname === '/opinion'} pathname="/opinion">
          Opinion
        </NavigationItem>
        <NavigationItem current={pathname === '/business'} pathname="/business">
          Business
        </NavigationItem>
        <NavigationItem current={pathname === '/youth'} pathname="/youth">
          Youth
        </NavigationItem>
        <NavigationItem
          current={pathname === '/entertainment'}
          pathname="/entertainment"
        >
          Entertainment
        </NavigationItem>
        <NavigationItem
          current={pathname === '/lifestyle'}
          pathname="/lifestyle"
        >
          Lifestyle
        </NavigationItem>
        <li className="flex gap-[10] py-[15] px-[17]">
          <span className="text-xl">Page</span>
          <Image
            className="invert-[1]"
            width={9}
            height={6}
            src="/icons/arrow-down-icon.svg"
            alt="arrow-down icon"
          />
        </li>
      </ul>
      <InputSearch />
    </aside>
  );
}
