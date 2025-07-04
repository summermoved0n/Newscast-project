'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import NavigationItem from './NavigationItem';
import Loader from './Loader';

const listOfOptions = [
  { name: 'International', value: '/international' },
  { name: 'Sports', value: '/sports' },
  { name: 'Opinion', value: '/opinion' },
  { name: 'Business', value: '/business' },
  { name: 'Youth', value: '/youth' },
  { name: 'Entertainment', value: '/entertainment' },
  { name: 'Lifestyle', value: '/lifestyle' },
];

export default function PageSelect({ className = '' }) {
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenSelect(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li
      className={`${className} flex gap-[10px] py-[15px] px-[17px] cursor-pointer relative`}
      ref={dropdownRef}
      onClick={() => setIsOpenSelect(!isOpenSelect)}
    >
      <span className="text-xl">Page</span>
      <Image
        className="invert-[1]"
        width={9}
        height={6}
        src="/icons/arrow-down-icon.svg"
        alt="arrow-down icon"
      />

      {isOpenSelect && (
        <ul
          className="absolute z-50 p-[10px] top-[55px] left-0 bg-gray-300 rounded-lg text-[#393939]
"
        >
          {listOfOptions.map(({ name, value }) => (
            <NavigationItem
              key={name}
              className="hover:text-red-500"
              current={pathname === value}
              pathname={value}
              onClick={() => {
                if (pathname === value) return;
                setLoading(true);
              }}
              selectItem
              smallScreen
            >
              {name}
            </NavigationItem>
          ))}
        </ul>
      )}

      {loading && (
        <Loader className="fixed inset-0 z-50 bg-gray-500/25 flex items-center justify-center" />
      )}
    </li>
  );
}
