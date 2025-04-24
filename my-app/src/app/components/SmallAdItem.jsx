'use client';

import clsx from 'clsx';

import { changeDataFormat } from '@/lib/helpers';

export default function SmallAdItem({
  article_id,
  image,
  creator,
  title,
  pubDate,
  isSmallSize,
  className = '',
  ...props
}) {
  return (
    <li key={article_id} className="relative flex gap-[20]">
      <div
        className={clsx(
          isSmallSize ? 'w-[70px]' : 'w-[90px]',
          `relative w-full h-[70px]`
        )}
      >
        <img
          className={clsx(
            isSmallSize ? 'w-[70px]' : 'w-[90px]',
            `object-cover h-[70px] ${className}`
          )}
          src={image}
          alt={title}
          loading="lazy"
          {...props}
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[#393939] text-xs mb-[6]">
          {!creator || creator === '' ? 'Unknown' : creator} -{' '}
          <span className="text-[rgba(57,57,57,0.6)]">
            {changeDataFormat(pubDate)}
          </span>
        </p>
        <p className="text-[#393939] text-base line-clamp-2">{title}</p>
      </div>
    </li>
  );
}
