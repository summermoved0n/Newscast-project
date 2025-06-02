'use client'

import { changeDataFormat, capitalizeFirstLetter } from '@/lib/helpers';
import ColourTitleBg from '@/app/components/ColourTitleBg';

export default function MainNewsItem({
  article_id,
  category,
  image_url,
  creator,
  title,
  pubDate,
  getId,
  poisitionBlock,
}) {
  return (
    <div
      id={article_id}
      key={article_id}
      className={`${poisitionBlock} font-medium bg-cover bg-center relative p-[15px] flex flex-col justify-between cursor-pointer`}
      style={{ backgroundImage: `url(${image_url})` }}
      onClick={(e) => getId(e.currentTarget.id)}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <span className="relative z-10">
        <ColourTitleBg className="text-xl" isNeedSofiaFont={true}>
          {capitalizeFirstLetter(category)}
        </ColourTitleBg>
      </span>
      <div className="relative z-10 text-white">
        <p className="text-xs">
          {!creator || creator === '' ? 'Unknown' : creator} -{' '}
          {changeDataFormat(pubDate)}
        </p>
        <p className="line-clamp-2">{title}</p>
      </div>
    </div>
  );
}
