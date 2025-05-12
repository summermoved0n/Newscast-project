'use client';

import { useState } from 'react';

import ColourTitleBg from '@/app/components/ColourTitleBg';
import SectionTitle from '@/app/components/SectionTitle';
import BigAdItem from '@/app/components/BigAdItem';
import SmallAdItem from '@/app/components/SmallAdItem';
import PrevPageBtn from './PrevPageBtn';
import NextPageBtn from './NextPageBtn';
import SectionTopWraper from './SectionTopWraper';
import Pagination from './Pagination';

const titleArray = ['All', 'Travel', 'Recipes', 'Health & Fitness', 'Music'];

export default function LifeStyle({ news }) {
  const [page, setPage] = useState(0);

  const pageCount = 2;

  const firstIndex = page * 3;
  const secondIndex = firstIndex + 3;

  const firstBigItem = news[firstIndex];
  const firstSmallItems = news.slice(firstIndex + 1, firstIndex + 3);

  const secondBigItem = news[secondIndex];
  const secondSmallItems = news.slice(secondIndex + 1, secondIndex + 3);
  return (
    <section>
      <SectionTopWraper>
        <SectionTitle isRedColour={true} fontWeight={500}>
          Life Style
        </SectionTitle>
        <div className="flex items-center gap-[12]">
          <ul className="flex gap-[12]">
            {titleArray.map((item) => (
              <li key={item}>
                <ColourTitleBg>{item}</ColourTitleBg>
              </li>
            ))}
          </ul>
          <div className="flex gap-[10]">
            <PrevPageBtn page={page} setPage={setPage} pageCount={pageCount} />
            <NextPageBtn page={page} setPage={setPage} pageCount={pageCount} />
          </div>
        </div>
      </SectionTopWraper>
      <Pagination id={page} className="grid grid-cols-[1fr_1fr] gap-[30]">
        <div className="flex flex-col gap-[26px]">
          <BigAdItem
            article_id={firstBigItem.article_id}
            category={firstBigItem.category}
            image_url={firstBigItem.image_url}
            creator={firstBigItem.creator}
            title={firstBigItem.title}
            pubDate={firstBigItem.pubDate}
            description={firstBigItem.description}
          />

          <ul className="flex flex-col gap-[22px]">
            {firstSmallItems.map((item) => (
              <SmallAdItem
                key={item.article_id}
                article_id={item.article_id}
                image={item.image_url}
                creator={item.creator}
                title={item.title}
                pubDate={item.pubDate}
                imageSize={'big'}
              />
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-[26px]">
          <BigAdItem
            article_id={secondBigItem.article_id}
            category={secondBigItem.category}
            image_url={secondBigItem.image_url}
            creator={secondBigItem.creator}
            title={secondBigItem.title}
            pubDate={secondBigItem.pubDate}
            description={secondBigItem.description}
          />

          <ul className="flex flex-col gap-[22px]">
            {secondSmallItems.map((item) => (
              <SmallAdItem
                key={item.article_id}
                article_id={item.article_id}
                image={item.image_url}
                creator={item.creator}
                title={item.title}
                pubDate={item.pubDate}
                imageSize={'big'}
              />
            ))}
          </ul>
        </div>
      </Pagination>
    </section>
  );
}
