'use client';

import { useState } from 'react';

import ColourTitleBg from '@/app/components/ColourTitleBg';
import SectionTitle from '@/app/components/SectionTitle';
import VideoItem from '@/app/components/VideoItem';
import SectionTopWraper from './SectionTopWraper';
import PrevPageBtn from './PrevPageBtn';
import NextPageBtn from './NextPageBtn';
import Pagination from './Pagination';

const titleArray = ['All', 'Travel', 'Recipes', 'Health & Fitness', 'Music'];

export default function Video({ video }) {
  const [page, setPage] = useState(0);

  const pageCount = Math.floor(video.length / 4);
  const startIndex = page * 4;
  const bigItem = video[startIndex];
  const smallItems = video.slice(startIndex + 1, startIndex + 4);
  return (
    <section className="mb-0">
      <SectionTopWraper>
        <SectionTitle isRedColour fontWeight={500}>
          Video
        </SectionTitle>
        <div className="flex gap-[12px] items-center">
          <ul className="hidden md:flex gap-[12px]">
            {titleArray.map((item) => (
              <li key={item}>
                <ColourTitleBg>{item}</ColourTitleBg>
              </li>
            ))}
          </ul>
          <div className="flex gap-[10px]">
            <PrevPageBtn page={page} setPage={setPage} pageCount={pageCount} />
            <NextPageBtn page={page} setPage={setPage} pageCount={pageCount} />
          </div>
        </div>
      </SectionTopWraper>
      <Pagination
        id={page}
        className="grid grid-cols-[1fr] md:grid-rows-[2fr_1fr] gap-[24px]"
      >
        <VideoItem
          src={bigItem.videos.medium.url}
          creator={bigItem.user}
          views={bigItem.views}
          type={bigItem.type}
          tags={bigItem.tags}
        />
        <ul className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] justify-between gap-[24px]">
          {smallItems.map((item) => (
            <li key={item.id}>
              <VideoItem
                src={item.videos.small.url}
                creator={item.user}
                views={item.views}
                type={item.type}
                tags={item.tags}
                small
              />
            </li>
          ))}
        </ul>
      </Pagination>
    </section>
  );
}
