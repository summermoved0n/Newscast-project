import {
  changeDataFormat,
  capitalizeFirstLetter,
  getRandomColor,
} from '@/lib/helpers';

import ColourTitleBg from '@/app/components/ColourTitleBg';

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
      <ColourTitleBg className="relative z-10">
        {capitalizeFirstLetter(category)}
      </ColourTitleBg>
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
