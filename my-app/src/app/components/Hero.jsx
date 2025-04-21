'use client';

import Image from 'next/image';

import Button from './Button';

import { Sofia_Sans } from 'next/font/google';
import Link from 'next/link';
const font = Sofia_Sans({ subsets: ['latin'] });

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
      <div className="bg-[url('/images/add-bg-pic.jpg')] bg-cover bg-center flex justify-between items-center px-[26] py-[16]">
        <div className="text-sm">
          <p className={`${font.className} text-white`}>
            Best Selling <b>BLOG</b> and <b>MAGAZINE</b>
            <br /> Theme of All Time
          </p>
          <p className="text-red-500">Experience the change!</p>
        </div>

        <Button text={'PURCHASE NOW'} />
      </div>
    </section>
  );
}
