import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

import {
  changeDataFormat,
  capitalizeFirstLetter,
  getRandomColor,
} from '@/lib/helpers';

export default function MainNewsItem({
  article_id,
  category,
  image_url,
  creator,
  title,
  pubDate,
  poisitionBlock,
}) {
  return (
    <div
      key={article_id}
      className={`${poisitionBlock} font-medium bg-cover bg-center relative p-[25] flex flex-col justify-between`}
      style={{ backgroundImage: `url(${image_url})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <p
        className={`${
          font.className
        } w-fit relative z-10 bg-[${getRandomColor()}] text-white text-xs font-normal py-[6] px-[8]`}
      >
        {capitalizeFirstLetter(category)}
      </p>
      <div className="relative z-10 text-white">
        <p className="text-xs">
          {!creator || creator === '' ? 'Unknown' : creator} -{' '}
          {changeDataFormat(pubDate)}
        </p>
        <p>{title}</p>
      </div>
    </div>
  );
}
