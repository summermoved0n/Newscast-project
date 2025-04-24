'use client';

import Image from 'next/image';

export default function NextPageBtn() {
  return (
    <button
      type="button"
      className="flex justify-center items-center w-[24] h-[24] bg-red-500 text-white hover:bg-red-600 active:bg-red-400 transition-all duration-300 ease-liner"
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
