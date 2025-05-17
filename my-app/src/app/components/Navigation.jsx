'use client';

import { usePathname } from 'next/navigation';
import NavigationItem from '@/app/components/NavigationItem';
import InputSearch from '@/app/components/InputSearch';
import PageSelect from './PageSelect';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="flex justify-between mb-[25] flex bg-[#393939]">
      <ul className="text-white flex">
        <NavigationItem current={pathname === '/'} pathname="/">
          Home
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/international'}
          pathname="/international"
        >
          International
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/sports'}
          pathname="/sports"
        >
          Sports
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/opinion'}
          pathname="/opinion"
        >
          Opinion
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/business'}
          pathname="/business"
        >
          Business
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/youth'}
          pathname="/youth"
        >
          Youth
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/entertainment'}
          pathname="/entertainment"
        >
          Entertainment
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/lifestyle'}
          pathname="/lifestyle"
        >
          Lifestyle
        </NavigationItem>
        <PageSelect className="lg:hidden" />
      </ul>
      <InputSearch />
    </aside>
  );
}
