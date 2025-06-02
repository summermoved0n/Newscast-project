'use client';

import Image from 'next/image';

export default function PrevPageBtn({ page, setPage }) {
  const prevPage = () => {
    if (page > 0) setPage((p) => p - 1);
  };

  return (
    <button
      type="button"
      onClick={prevPage}
      disabled={page === 0}
      className="flex justify-center items-center w-[24px] h-[24px] bg-red-500 text-white hover:bg-red-600 active:bg-red-400 transition-all duration-300 ease-liner disabled:bg-red-200 disabled:cursor-not-allowed"
    >
      <Image
        className="invert-[1]"
        width={9}
        height={6}
        src="/icons/arrow-left-icon.svg"
        alt="arrow-left icon"
      />
    </button>
  );
}
