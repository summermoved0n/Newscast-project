'use client';

import { Sofia_Sans } from 'next/font/google';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const font = Sofia_Sans({ subsets: ['latin'] });

import Loader from './Loader';

export default function InputSearch() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <form className="flex relative group" onSubmit={handleSubmitForm}>
      <input
        className={`${font.className} w-[150] bg-[#393939] border-solid border-l border-[rgba(255,255,255,0.3)] font-light text-white placeholder:text-[rgba(255,255,255,0.3)] placeholder:text-xs pl-[16] pr-[40] outline-none focus:placeholder:text-white`}
        type="text"
        placeholder="Search for"
        name="search"
        value={searchQuery}
        onChange={handleSearchInput}
        autoComplete="off"
      />
      <button
        className="flex items-center justify-center w-[20] h-[20] absolute top-[50%] right-[16] -translate-y-1/2 cursor-pointer"
        type="submit"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3_79)">
            <path
              className="fill-white opacity-30 group-focus-within:opacity-100"
              d="M9.0155 8.3085L11.157 10.4495L10.4495 11.157L8.3085 9.0155C7.51187 9.65411 6.521 10.0015 5.5 10C3.016 10 1 7.984 1 5.5C1 3.016 3.016 1 5.5 1C7.984 1 10 3.016 10 5.5C10.0015 6.521 9.65411 7.51187 9.0155 8.3085ZM8.0125 7.9375C8.64706 7.28494 9.00143 6.41021 9 5.5C9 3.566 7.4335 2 5.5 2C3.566 2 2 3.566 2 5.5C2 7.4335 3.566 9 5.5 9C6.41021 9.00143 7.28494 8.64706 7.9375 8.0125L8.0125 7.9375Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_79">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      {loading && (
        <Loader className="fixed inset-0 z-50 bg-gray-500/25 flex items-center justify-center" />
      )}
    </form>
  );
}
