import { Sofia_Sans } from 'next/font/google';
import { changeDataFormat, capitalizeFirstLetter } from '@/lib/helpers';

const font = Sofia_Sans({ subsets: ['latin'] });

export default function MainNews({ news }) {
  const freshNews = news.slice(0, 4);
  console.log(freshNews);

  // let gridClass = '';

  // if (freshNews[index] === 0) {
  //   gridClass = 'col-span-1 row-span-2';
  // } else if (index === 1 || index === 2) {
  //   gridClass = 'col-span-1';
  // } else if (index === 3) {
  //   gridClass = 'col-span-2';
  // } else {
  //   gridClass = 'col-span-3';
  // }

  return (
    <section className="grid grid-cols-[2fr_1fr_1fr] grid-rows-[2fr] gap-[15]">
      {freshNews.map(
        ({ article_id, category, image_url, creator, title, pubDate }) => (
          <div
            key={article_id}
            className={`bg-cover bg-center relative`}
            style={{ backgroundImage: `url(${image_url})` }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <span className={`${font.className} relative z-10 text-white`}>
              {capitalizeFirstLetter(category)}
            </span>
            <div className="relative z-10 text-white">
              <p>
                {!creator || creator === '' ? 'Unknown' : creator} -{' '}
                {changeDataFormat(pubDate)}
              </p>
              <p>{title}</p>
            </div>
          </div>
        )
      )}
    </section>
  );
}
