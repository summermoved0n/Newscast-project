'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import NavigationItem from '@/app/components/NavigationItem';
import InputSearch from '@/app/components/InputSearch';
import PageSelect from './PageSelect';
import Loader from './Loader';

const navArray = [
  { name: 'Home', page: '/' },
  { name: 'International', page: '/international' },
  { name: 'Sports', page: '/sports' },
  { name: 'Opinion', page: '/opinion' },
  { name: 'Business', page: '/business' },
  { name: 'Youth', page: '/youth' },
  { name: 'Entertainment', page: '/entertainment' },
  { name: 'Lifestyle', page: '/lifestyle' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  return (
    <aside className="flex justify-between mb-[25px] flex bg-[#393939]">
      <ul className="text-white flex">
        {navArray.map(({ name, page }) => (
          <NavigationItem
            key={name}
            className={`${page !== '/' && 'hidden lg:block'}`}
            current={pathname === page}
            pathname={page}
            onClick={() => {
              if (pathname === page) return;
              setLoading(true);
            }}
          >
            {name}
          </NavigationItem>
        ))}
        <PageSelect className="lg:hidden" />
      </ul>
      <InputSearch />

      {loading && (
        <Loader className="fixed inset-0 z-50 bg-gray-500/25 flex items-center justify-center" />
      )}
    </aside>
  );
}
