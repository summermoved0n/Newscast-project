'use client';

import Modal from '../components/Modal';
import NewsModalContent from '../components/NewsModalContent';
import SectionTitle from '@/app/components/SectionTitle';
import SmallAdItem from '@/app/components/SmallAdItem';
import { useState } from 'react';

export default function RecentNews({ news }) {
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
      <div className="flex justify-between mb-[20] relative border-b border-[#393939] pb-[14]  after:w-[70] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour fontWeight={500} fontSize={'small'}>
          Recent
        </SectionTitle>
      </div>
      <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-start  justify-between gap-[10]">
        <SmallAdItem
          article_id={news[4].article_id}
          image={news[4].image_url}
          creator={news[4].creator}
          title={news[4].title}
          pubDate={news[4].pubDate}
          getId={openModalFunc}
          imageSize={'small'}
        />

        <SmallAdItem
          article_id={news[5].article_id}
          image={news[5].image_url}
          creator={news[5].creator}
          title={news[5].title}
          pubDate={news[5].pubDate}
          getId={openModalFunc}
          imageSize={'small'}
        />

        <SmallAdItem
          article_id={news[6].article_id}
          image={news[6].image_url}
          creator={news[6].creator}
          title={news[6].title}
          pubDate={news[6].pubDate}
          getId={openModalFunc}
          imageSize={'small'}
        />

        <SmallAdItem
          article_id={news[7].article_id}
          image={news[7].image_url}
          creator={news[7].creator}
          title={news[7].title}
          pubDate={news[7].pubDate}
          getId={openModalFunc}
          imageSize={'small'}
        />

        <SmallAdItem
          article_id={news[8].article_id}
          image={news[8].image_url}
          creator={news[8].creator}
          title={news[8].title}
          pubDate={news[8].pubDate}
          getId={openModalFunc}
          imageSize={'small'}
        />
      </ul>

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
