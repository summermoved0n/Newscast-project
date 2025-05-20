'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import NavigationItem from '@/app/components/NavigationItem';
import InputSearch from '@/app/components/InputSearch';
import PageSelect from './PageSelect';
import Loader from './Loader';

export default function Navigation() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  return (
    <aside className="flex justify-between mb-[25] flex bg-[#393939]">
      <ul className="text-white flex">
        <NavigationItem
          current={pathname === '/'}
          pathname="/"
          onClick={() => setLoading(true)}
        >
          Home
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/international'}
          pathname="/international"
          onClick={() => setLoading(true)}
        >
          International
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/sports'}
          pathname="/sports"
          onClick={() => setLoading(true)}
        >
          Sports
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/opinion'}
          pathname="/opinion"
          onClick={() => setLoading(true)}
        >
          Opinion
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/business'}
          pathname="/business"
          onClick={() => setLoading(true)}
        >
          Business
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/youth'}
          pathname="/youth"
          onClick={() => setLoading(true)}
        >
          Youth
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/entertainment'}
          pathname="/entertainment"
          onClick={() => setLoading(true)}
        >
          Entertainment
        </NavigationItem>
        <NavigationItem
          className="hidden lg:block"
          current={pathname === '/lifestyle'}
          pathname="/lifestyle"
          onClick={() => setLoading(true)}
        >
          Lifestyle
        </NavigationItem>
        <PageSelect className="lg:hidden" />
      </ul>
      <InputSearch />

      {loading && (
        <Loader className="fixed inset-0 z-50 bg-gray-500/25 flex items-center justify-center" />
      )}
    </aside>
  );
}
