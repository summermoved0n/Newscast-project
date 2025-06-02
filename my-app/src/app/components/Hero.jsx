'use client';

import Image from 'next/image';
import Link from 'next/link';

import PurchaseNow from '@/app/components/PurchaseNow';

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-between items-start mb-[26px] gap-[20px] sm:flex-row sm:items-center md:gap-[150px]
"
    >
      <Link href={'/'}>
        <Image
          className="md:w-[247px]"
          width={180}
          height={64}
          src="/images/Logo-min.png"
          alt="logo icon"
        />
      </Link>
      <PurchaseNow />
    </section>
  );
}
