'use client';

import ColourTitleBg from '@/app/components/ColourTitleBg';
import SectionTitle from '@/app/components/SectionTitle';
import BigAdItem from '@/app/components/BigAdItem';
import SmallAdItem from '@/app/components/SmallAdItem';
import Modal from '../components/Modal';
import NewsModalContent from '../components/NewsModalContent';
import { useState } from 'react';

const titleArray = [
  'All',
  'Lifestyle',
  'Vogue',
  'Health & Fitness',
  'Travel',
  'Gadgets',
  'World',
];

export default function DontMiss({ news }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModalFunc = (id) => {
    if (!id) return;

    const element = news.find((item) => item.article_id === id);
    setModalContent(element);
    setOpenModal(true);
  };

  return (
    <section>
      <div className="flex justify-between mb-[24px] relative border-b border-[#393939] pb-[14px]  after:w-[140px] after:h-px after:absolute after:bottom-[-1px] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour={true} fontWeight={500}>
          Don't Miss
        </SectionTitle>
        <ul className="hidden md:flex gap-[12px]">
          {titleArray.map((item) => (
            <li key={item}>
              <ColourTitleBg>{item}</ColourTitleBg>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-[30px]">
        <BigAdItem
          article_id={news[0].article_id}
          category={news[0].category}
          image_url={news[0].image_url}
          creator={news[0].creator}
          title={news[0].title}
          pubDate={news[0].pubDate}
          description={news[0].description}
          getId={openModalFunc}
        />
        <ul className="flex flex-col justify-between gap-[15px] sm:gap-[5px]">
          <SmallAdItem
            article_id={news[1].article_id}
            image={news[1].image_url}
            creator={news[1].creator}
            title={news[1].title}
            pubDate={news[1].pubDate}
            getId={openModalFunc}
            imageSize={'medium'}
          />

          <SmallAdItem
            article_id={news[2].article_id}
            image={news[2].image_url}
            creator={news[2].creator}
            title={news[2].title}
            pubDate={news[2].pubDate}
            getId={openModalFunc}
            imageSize={'medium'}
          />

          <SmallAdItem
            article_id={news[3].article_id}
            image={news[3].image_url}
            creator={news[3].creator}
            title={news[3].title}
            pubDate={news[3].pubDate}
            getId={openModalFunc}
            imageSize={'medium'}
          />

          <SmallAdItem
            article_id={news[4].article_id}
            image={news[4].image_url}
            creator={news[4].creator}
            title={news[4].title}
            pubDate={news[4].pubDate}
            getId={openModalFunc}
            imageSize={'medium'}
          />

          <SmallAdItem
            article_id={news[5].article_id}
            image={news[5].image_url}
            creator={news[5].creator}
            title={news[5].title}
            pubDate={news[5].pubDate}
            getId={openModalFunc}
            imageSize={'medium'}
          />
        </ul>
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
