'use client';

import clsx from 'clsx';

import { changeDataFormat, capitalizeFirstLetter } from '@/lib/helpers';
import ColourTitleBg from '@/app/components/ColourTitleBg';

const typeImageSize = {
  small: 'w-[70px] h-[70px]',
  medium: 'w-[90px] h-[70px]',
  big: 'w-[130px] h-[100px]',
};

export default function SmallAdItem({
  article_id,
  image,
  category,
  creator,
  title,
  pubDate,
  imageSize,
  isNeedColorBgText,
  className = '',
  ...props
}) {
  return (
    <li key={article_id} id={article_id} className="relative flex gap-[20]">
      <div
        className={clsx(
          imageSize === 'small' && typeImageSize.small,
          imageSize === 'medium' && typeImageSize.medium,
          imageSize === 'big' && typeImageSize.big,
          'relative'
        )}
      >
        {isNeedColorBgText && (
          <span className="absolute top-[6] left-[6] z-10">
            <ColourTitleBg isNeedSofiaFont={true}>
              {capitalizeFirstLetter(category)}
            </ColourTitleBg>
          </span>
        )}
        <img
          className={clsx(
            !image && 'bg-gray-500',
            `object-cover w-full h-full ${className}`
          )}
          src={image}
          alt={title}
          loading="lazy"
          {...props}
        />
      </div>
      <div className="flex flex-col justify-center max-w-[250px]">
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
