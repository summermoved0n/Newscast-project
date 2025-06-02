'use client';

import clsx from 'clsx';

import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

import { changeDataFormat, capitalizeFirstLetter } from '@/lib/helpers';
import ColourTitleBg from '@/app/components/ColourTitleBg';

export default function NewsModalContent({
  id,
  category,
  country,
  creator,
  description,
  image,
  time,
  title,
}) {
  return (
    <div
      id={id}
      className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-[30px] pt-[50px]"
    >
      <div className="relative">
        <span className="absolute top-[6px] left-[6px] z-10">
          <ColourTitleBg isNeedSofiaFont={true}>
            {capitalizeFirstLetter(category)}
          </ColourTitleBg>
        </span>
        <img
          className={clsx(
            !image && 'bg-gray-500',
            `object-cover w-[250px] h-[250px]`
          )}
          src={image}
          alt={title}
          loading="lazy"
        />

        <p className="text-[#393939] text-xl my-[10px]">
          Country: {capitalizeFirstLetter(country)}
        </p>
        <p className="text-[#393939] text-xl mb-[6px]">
          {!creator || creator === '' ? 'Unknown' : creator} -{' '}
          <span className={`${font.className} text-[rgba(57,57,57,0.6)]`}>
            {changeDataFormat(time)}
          </span>
        </p>
      </div>
      <div>
        <p className="text-[#393939] text-2xl pb-[4px] mb-[10px] border-b-4 border-[#393939]">
          Description:
        </p>
        <p className="text-[rgba(57,57,57,0.6)] text-xl overflow-y-auto overflow-x-hidden max-h-[500px] pr-4 w-[350px]">
          {description ? description : 'No description ☹'}
        </p>
      </div>
    </div>
  );
}
