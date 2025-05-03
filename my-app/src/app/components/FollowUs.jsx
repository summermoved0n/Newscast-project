'use client';

import React from 'react';
import Image from 'next/image';
import SofiaFontText from './SofiaFontText';

export default function FollowUs() {
  return (
    <section className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] relative">
      <Image
        width={288}
        height={288}
        src={'/images/follow-us-first-pic.jpg'}
        alt="chair and card"
      />
      <Image
        width={288}
        height={288}
        src={'/images/follow-us-second-pic.jpg'}
        alt="laptop on the table"
      />
      <Image
        width={288}
        height={288}
        src={'/images/follow-us-mid-pic.jpg'}
        alt="laptop and screen"
      />
      <Image
        width={288}
        height={288}
        src={'/images/follow-us-prelast-pic.jpg'}
        alt="taping on keyboard"
      />
      <Image
        width={288}
        height={288}
        src={'/images/follow-us-last-pic.jpg'}
        alt="man in suit"
      />
      <a
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[146] min-h-[146] rounded-full bg-[rgba(194,55,133,0.6)] flex flex-col items-center justify-center gap-[13]"
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="invert-[1]"
          width={30}
          height={30}
          src={'/icons/instagram-icon.svg'}
          alt="man in suit"
        />
        <SofiaFontText className="text-lg font-medium text-white">
          Follow us
        </SofiaFontText>
      </a>
    </section>
  );
}
