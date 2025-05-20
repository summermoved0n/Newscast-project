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
    <div id={id} className="grid grid-cols-[1fr_350px] gap-[30] pt-[30]">
      <div className="relative">
        <span className="absolute top-[6] left-[6] z-10">
          <ColourTitleBg isNeedSofiaFont={true}>
            {capitalizeFirstLetter(category)}
          </ColourTitleBg>
        </span>
        <img
          className={clsx(
            !image && 'bg-gray-500',
            `object-cover w-[250] h-[250]`
          )}
          src={image}
          alt={title}
          loading="lazy"
        />

        <p className="text-[#393939] text-xl my-[10]">
          Country: {capitalizeFirstLetter(country)}
        </p>
        <p className="text-[#393939] text-xl mb-[6]">
          {!creator || creator === '' ? 'Unknown' : creator} -{' '}
          <span className={`${font.className} text-[rgba(57,57,57,0.6)]`}>
            {changeDataFormat(time)}
          </span>
        </p>
      </div>
      <div className="">
        <p className="text-[#393939] text-2xl pb-[4] mb-[10] border-b-4 border-[#393939]">
          Description:
        </p>
        <p className="text-[rgba(57,57,57,0.6)] text-xl overflow-y-auto overflow-x-hidden max-h-[500px] pr-4">
          {description ? description : 'No description ☹'}
        </p>
      </div>
    </div>
  );
}
