'use client';

import Image from 'next/image';
import Link from 'next/link';

import PurchaseNow from '@/app/components/PurchaseNow';

export default function Hero() {
  return (
    <section
      className="grid grid-cols-[1fr_2fr] gap-[153] items-center mb-[26]
"
    >
      <Link href={'/'}>
        <Image
          width={247}
          height={64}
          src="/images/Logo-min.png"
          alt="logo icon"
        />
      </Link>
      <PurchaseNow />
    </section>
  );
}
