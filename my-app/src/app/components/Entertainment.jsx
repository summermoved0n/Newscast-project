'use client';

import { useState } from 'react';

import SectionTitle from './SectionTitle';
import SmallAdItem from './SmallAdItem';
import MainNewsItem from './MainNewsItem';
import PrevPageBtn from './PrevPageBtn';
import NextPageBtn from './NextPageBtn';
import Pagination from './Pagination';
import SectionTopWraper from './SectionTopWraper';
import Modal from './Modal';
import NewsModalContent from './NewsModalContent';

export default function Entertainment({ news }) {
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const pageCount = 2;
  const startIndex = page * 4;
  const mainItem = news[startIndex];
  const smallItems = news.slice(startIndex + 1, startIndex + 4);

  const openModalFunc = (id) => {
    if (!id) return;

    const element = news.find((item) => item.article_id === id);
    setModalContent(element);
    setOpenModal(true);
  };

  return (
    <section className="mb-[50px]">
      <SectionTopWraper>
        <SectionTitle isRedColour fontWeight={500}>
          Entertainment
        </SectionTitle>
        <div className="flex gap-[10px]">
          <PrevPageBtn page={page} setPage={setPage} pageCount={pageCount} />
          <NextPageBtn page={page} setPage={setPage} pageCount={pageCount} />
        </div>
      </SectionTopWraper>
      <div className="h-[705px] lg:h-[322px] xl:h-[524px]">
        <Pagination
          id={page}
          className="grid grid-cols-1 lg:grid-cols-[1fr] grid-rows-[1fr_1fr] lg:grid-rows-[2fr_1fr] xl:grid-rows-[4fr_1fr] gap-[44px] lg:gap-[24px] absolute top-0 left-0 w-full"
        >
          <MainNewsItem
            article_id={mainItem.article_id}
            category={mainItem.category}
            image_url={mainItem.image_url}
            creator={mainItem.creator}
            title={mainItem.title}
            pubDate={mainItem.pubDate}
            getId={openModalFunc}
            poisitionBlock={'sm:col-span-1 sm:row-span-1 text-2xl lg:text-4xl'}
          />

          <ul className="flex flex-col lg:flex-row justify-between gap-[16px]">
            {smallItems.map((item) => (
              <SmallAdItem
                key={item.article_id}
                article_id={item.article_id}
                category={item.category}
                image={item.image_url}
                creator={item.creator}
                title={item.title}
                pubDate={item.pubDate}
                getId={openModalFunc}
                imageSize={'big'}
                isNeedColorBgText
              />
            ))}
          </ul>
        </Pagination>
      </div>

      {openModal && (
        <Modal show={true} onClose={() => setOpenModal(false)}>
          <NewsModalContent
            id={modalContent.article_id}
            category={modalContent.category}
            country={modalContent.country}
            creator={modalContent.creator}
            description={modalContent.description}
            image={modalContent.image_url}
            time={modalContent.pubDate}
            title={modalContent.title}
          />
        </Modal>
      )}
    </section>
  );
}
