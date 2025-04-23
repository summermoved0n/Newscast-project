'use client';

import Image from 'next/image';

import ColourTitleBg from '@/app/components/ColourTitleBg';

export default function BigAdItem() {
  return (
    <div className="relative">
      <span className="absolute top-[25] left-[25] z-10">
        <ColourTitleBg isNeedSofiaFont={true}>Business</ColourTitleBg>
      </span>
      <div className="relative w-full h-[250px] mb-[25] z-0">
        <Image
          className="object-cover"
          fill
          src={'/images/footer-book-gallery.jpg'}
          alt="book"
        />
      </div>
      <p className="text-[#393939] text-xs mb-[6]">
        Lorem ipsum -{' '}
        <span className="text-[rgba(57,57,57,0.6)]">dolor sit amet.</span>
      </p>
      <p className="text-[#393939] font-medium mb-[6]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
        voluptatum.
      </p>
      <span className="block text-[rgba(57,57,57,0.6)]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        impedit odit reiciendis nihil blanditiis beatae deleniti repellendus
        veniam error doloremque!
      </span>
    </div>
  );
}
