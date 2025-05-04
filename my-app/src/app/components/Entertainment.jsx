'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import SectionTitle from './SectionTitle';
import SmallAdItem from './SmallAdItem';
import MainNewsItem from './MainNewsItem';
import PrevPageBtn from './PrevPageBtn';
import NextPageBtn from './NextPageBtn';

const pageCount = 2;

export default function Entertainment({ news }) {
  const [page, setPage] = useState(0);

  const startIndex = page * 4;
  const mainItem = news[startIndex];
  const smallItems = news.slice(startIndex + 1, startIndex + 4);
  return (
    <section className="mb-[150]">
      <div className="flex justify-between mb-[24] relative border-b border-[#393939] pb-[14]  after:w-[140] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour={true} fontWeight={500}>
          Entertainment
        </SectionTitle>
        <div className="flex gap-[10]">
          <PrevPageBtn page={page} setPage={setPage} pageCount={pageCount} />
          <NextPageBtn page={page} setPage={setPage} pageCount={pageCount} />
        </div>
      </div>

      <div className="relative w-full min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-[1fr] grid-rows-[4fr_1fr] gap-[24] absolute top-0 left-0 w-full mb-[50]"
          >
            <MainNewsItem
              article_id={mainItem.article_id}
              category={mainItem.category}
              image_url={mainItem.image_url}
              creator={mainItem.creator}
              title={mainItem.title}
              pubDate={mainItem.pubDate}
              poisitionBlock={'col-span-1 row-span-1 text-4xl'}
            />

            <ul className="flex justify-between">
              {smallItems.map((item) => (
                <SmallAdItem
                  key={item.article_id}
                  article_id={item.article_id}
                  category={item.category}
                  image={item.image_url}
                  creator={item.creator}
                  title={item.title}
                  pubDate={item.pubDate}
                  imageSize={'big'}
                  isNeedColorBgText
                />
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
