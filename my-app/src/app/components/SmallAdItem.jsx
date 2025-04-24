'use client';

import clsx from 'clsx';

import Image from 'next/image';
import { changeDataFormat } from '@/lib/helpers';

export default function SmallAdItem({
  article_id,
  image,
  creator,
  title,
  pubDate,
  isSmallSize,
}) {
  console.log(image);
  return (
    <li key={article_id} className="relative flex gap-[20]">
      <div
        className={clsx(
          isSmallSize ? 'w-[70px]' : 'w-[90px]',
          `relative w-full h-[70px]`
        )}
      >
        <Image className="object-cover" fill src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#393939] text-xs mb-[6]">
          {!creator || creator === '' ? 'Unknown' : creator} -
          <span className="text-[rgba(57,57,57,0.6)]">
            {changeDataFormat(pubDate)}
          </span>
        </p>
        <p className="text-[#393939] text-base">{title}</p>
      </div>
    </li>
  );
}
