'use client';

import Image from 'next/image';

export default function NextPageBtn({ page, setPage, pageCount }) {
  const nextPage = () => {
    if (page < pageCount - 1) setPage((p) => p + 1);
  };

  return (
    <button
      type="button"
      onClick={nextPage}
      disabled={page === pageCount - 1}
      className="flex justify-center items-center w-[24px] h-[24px] bg-red-500 text-white hover:bg-red-600 active:bg-red-400 transition-all duration-300 ease-liner disabled:bg-red-200 disabled:cursor-not-allowed"
    >
      <Image
        className="invert-[1]"
        width={9}
        height={6}
        src="/icons/arrow-right-icon.svg"
        alt="arrow-right icon"
      />
    </button>
  );
}
