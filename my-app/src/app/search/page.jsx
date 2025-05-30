'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getNewsByQuery } from '../../lib/api';
import { capitalizeFirstLetter } from '../../lib/helpers';

import SmallAdItem from '../components/SmallAdItem';
import Hero from '../components/Hero';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import SectionTopWraper from '../components/SectionTopWraper';
import SectionTitle from '../components/SectionTitle';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import NewsModalContent from '../components/NewsModalContent';

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getNewsByQuery(query)
      .then((data) => {
        setResults(data);
      })
      .finally(() => setLoading(false));
  }, [query]);

  const openModalFunc = (id) => {
    if (!id) return;

    const element = results.find((item) => item.article_id === id);
    setModalContent(element);
    setOpenModal(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow px-[20] mb-[50]">
        <Hero />
        <SectionTopWraper className="items-center">
          <SectionTitle isRedColour={true} fontWeight={500}>
            {capitalizeFirstLetter(query)}
          </SectionTitle>
          <BackButton type="button" onClick={() => router.back()}>
            ⬅ Back
          </BackButton>
        </SectionTopWraper>
        {loading ? (
          <Loader
            className="flex items-center justify-center"
            loading={loading}
          />
        ) : (
          <ul className="flex flex-wrap justify-start gap-[20]">
            {Array.isArray(results) && results.length > 0 ? (
              results.map(
                ({ article_id, image_url, creator, title, pubDate }) => (
                  <SmallAdItem
                    key={article_id}
                    article_id={article_id}
                    image={image_url}
                    creator={creator}
                    title={title}
                    pubDate={pubDate}
                    getId={openModalFunc}
                  />
                )
              )
            ) : (
              <li>
                <p>
                  Sorry, but with this request "
                  <span className="text-xl text-red-500 font-medium">
                    {query}
                  </span>
                  " no results...
                </p>
              </li>
            )}
          </ul>
        )}
      </div>
      <Footer />

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
    </div>
  );
}
