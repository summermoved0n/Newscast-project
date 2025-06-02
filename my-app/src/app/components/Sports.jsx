'use client';

import { useState } from 'react';

import ColourTitleBg from '@/app/components/ColourTitleBg';
import SectionTitle from '@/app/components/SectionTitle';
import BigAdItem from '@/app/components/BigAdItem';
import SmallAdItem from '@/app/components/SmallAdItem';
import SectionTopWraper from './SectionTopWraper';
import PrevPageBtn from './PrevPageBtn';
import NextPageBtn from './NextPageBtn';
import Pagination from './Pagination';
import Modal from '../components/Modal';
import NewsModalContent from '../components/NewsModalContent';

const titleArray = [
  'All',
  'Football',
  'Cricket',
  'Basketball',
  'Badminton',
  'Boxing',
  'Esports',
];

export default function Sports({ news }) {
  const [page, setPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const pageCount = 2;
  const startIndex = page * 6;
  const bigItem = news[startIndex];
  const smallItems = news.slice(startIndex + 1, startIndex + 6);

  const openModalFunc = (id) => {
    if (!id) return;

    const element = news.find((item) => item.article_id === id);
    setModalContent(element);
    setOpenModal(true);
  };
  return (
    <section>
      <SectionTopWraper>
        <SectionTitle isRedColour={true} fontWeight={500}>
          Sports
        </SectionTitle>
        <div className="flex items-center gap-[12px]">
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
      <div>
        <Pagination
          id={page}
          className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[30px]"
        >
          <BigAdItem
            article_id={bigItem.article_id}
            category={bigItem.category}
            image_url={bigItem.image_url}
            creator={bigItem.creator}
            title={bigItem.title}
            pubDate={bigItem.pubDate}
            getId={openModalFunc}
            description={bigItem.description}
          />
          <ul className="flex flex-col justify-start gap-[16px]">
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
                imageSize={'medium'}
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
