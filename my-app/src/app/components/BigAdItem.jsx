'use client';

import clsx from 'clsx';
import { capitalizeFirstLetter, changeDataFormat } from '@/lib/helpers';

import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

import ColourTitleBg from '@/app/components/ColourTitleBg';

export default function BigAdItem({
  article_id,
  category,
  image_url,
  creator,
  title,
  pubDate,
  description,
  getId,
  className = '',
  ...props
}) {
  return (
    <div
      id={article_id}
      className="relative cursor-pointer"
      onClick={(e) => getId(e.currentTarget.id)}
    >
      <span className="absolute top-[25px] left-[25px] z-10">
        <ColourTitleBg isNeedSofiaFont>
          {capitalizeFirstLetter(category)}
        </ColourTitleBg>
      </span>
      <div className="relative w-full h-[250px] mb-[25px] z-0">
        <img
          className={clsx(
            !image_url && 'bg-gray-500',
            `object-cover w-full h-full ${className}`
          )}
          src={image_url}
          alt={title}
          loading="lazy"
          {...props}
        />
      </div>
      <p className="text-[#393939] text-xs mb-[6px]">
        {!creator || creator === '' ? 'Unknown' : creator} -{' '}
        <span className={`${font.className} text-[rgba(57,57,57,0.6)]`}>
          {changeDataFormat(pubDate)}
        </span>
      </p>
      <p className="text-[#393939] font-medium mb-[6px]">{title}</p>
      <p className={`${font.className} text-[rgba(57,57,57,0.6)] line-clamp-3`}>
        {description}
      </p>
    </div>
  );
}
