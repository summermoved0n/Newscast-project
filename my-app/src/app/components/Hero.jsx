'use client';

import Image from 'next/image';
import Link from 'next/link';

import PurchaseNow from '@/app/components/PurchaseNow';

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-between items-start mb-[26] gap-[20] sm:flex-row sm:items-center md:gap-[150]
"
    >
      <Link href={'/'}>
        <Image
          className="md:w-[247]"
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
