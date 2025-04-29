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
  className = '',
  ...props
}) {
  return (
    <div id={article_id} className="relative">
      <span className="absolute top-[25] left-[25] z-10">
        <ColourTitleBg isNeedSofiaFont>
          {capitalizeFirstLetter(category)}
        </ColourTitleBg>
      </span>
      <div className="relative w-full h-[250px] mb-[25] z-0">
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
      <p className="text-[#393939] text-xs mb-[6]">
        {!creator || creator === '' ? 'Unknown' : creator} -{' '}
        <span className={`${font.className} text-[rgba(57,57,57,0.6)]`}>
          {changeDataFormat(pubDate)}
        </span>
      </p>
      <p className="text-[#393939] font-medium mb-[6]">{title}</p>
      <span
        className={`${font.className} block text-[rgba(57,57,57,0.6)] line-clamp-3`}
      >
        {description}
      </span>
    </div>
  );
}
