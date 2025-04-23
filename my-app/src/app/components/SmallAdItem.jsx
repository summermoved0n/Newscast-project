'use client';

import Image from 'next/image';

export default function SmallAdItem() {
  return (
    <li className="relative flex gap-[20]">
      <div className="relative w-full h-[70px] w-[90px]">
        <Image
          className="object-cover"
          fill
          src={'/images/footer-book-gallery.jpg'}
          alt="book"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#393939] text-xs mb-[6]">
          Lorem ipsum -{' '}
          <span className="text-[rgba(57,57,57,0.6)]">dolor sit amet.</span>
        </p>
        <p className="text-[#393939] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </li>
  );
}
