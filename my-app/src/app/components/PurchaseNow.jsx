import Button from './Button';

import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

export default function PurchaseNow() {
  return (
    <div className="bg-[url('/images/add-bg-pic.jpg')] bg-cover bg-center flex justify-between items-center px-[26] py-[16]">
      <div className="text-sm">
        <p className={`${font.className} text-white`}>
          Best Selling <b>BLOG</b> and <b>MAGAZINE</b>
          <br /> Theme of All Time
        </p>
        <p className="text-red-500">Experience the change!</p>
      </div>

      <Button isHeroAdBtn>PURCHASE NOW</Button>
    </div>
  );
}
