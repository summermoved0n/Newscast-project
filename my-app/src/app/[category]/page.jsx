'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getNewsByQuery } from '../../lib/api';
import { capitalizeFirstLetter } from '../../lib/helpers';

import SmallAdItem from '../components/SmallAdItem';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import BigAdItem from '../components/BigAdItem';
import Footer from '../components/Footer';
import SectionTopWraper from '../components/SectionTopWraper';
import SectionTitle from '../components/SectionTitle';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import NewsModalContent from '../components/NewsModalContent';
import BackButton from '../components/BackButton';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = useParams();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const smallItems = !results ? null : results.slice(1, results.length - 1);

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    getNewsByQuery(category)
      .then((data) => {
        setResults(data);
      })
      .finally(() => setLoading(false));
  }, [category]);

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
        <Navigation />
        <SectionTopWraper className="items-center">
          <SectionTitle isRedColour={true} fontWeight={500}>
            {capitalizeFirstLetter(category)}
          </SectionTitle>
        </SectionTopWraper>
        {loading ? (
          <Loader
            className="flex items-center justify-center"
            loading={loading}
          />
        ) : (
          <div>
            {Array.isArray(results) && results.length > 0 ? (
              <div className="">
                <BigAdItem
                  article_id={results[0].article_id}
                  category={results[0].category}
                  image_url={results[0].image_url}
                  creator={results[0].creator}
                  title={results[0].title}
                  pubDate={results[0].pubDate}
                  description={results[0].description}
                  getId={openModalFunc}
                />

                <ul className="grid grid-cols-1 md:grid-cols-[1fr_1fr] justify-between gap-[20] mt-[40]">
                  {smallItems.map(
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
                  )}
                </ul>
              </div>
            ) : (
              <div>
                <BackButton type="button" onClick={() => router.back()}>
                  ⬅ Back
                </BackButton>
                <p className="mt-[10] font-medium text-xl text-[#393939]">
                  Sorry, something went wrong, or try again later.
                </p>
              </div>
            )}
          </div>
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
