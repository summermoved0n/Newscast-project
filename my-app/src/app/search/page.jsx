'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getNewsByQuery } from '../../lib/api';
import { capitalizeFirstLetter } from '../../lib/helpers';

import SmallAdItem from '../components/SmallAdItem';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SectionTopWraper from '../components/SectionTopWraper';
import SectionTitle from '../components/SectionTitle';
import Loader from '../components/Loader';

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getNewsByQuery(query)
      .then((data) => {
        setResults(data);
      })
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow px-[20] mb-[50]">
        <Hero />
        <Navigation />
        <SectionTopWraper>
          <SectionTitle isRedColour={true} fontWeight={500}>
            {capitalizeFirstLetter(query)}
          </SectionTitle>
        </SectionTopWraper>
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <ul className="flex flex-wrap justify-start gap-[20]">
            {results.length !== 0 ? (
              results.map(
                ({ article_id, image_url, creator, title, pubDate }) => (
                  <SmallAdItem
                    key={article_id}
                    article_id={article_id}
                    image={image_url}
                    creator={creator}
                    title={title}
                    pubDate={pubDate}
                  />
                )
              )
            ) : (
              <li>
                <button type="button" onClick={() => router.back()}>
                  Back
                </button>
                <p>Sorry, but with this request "{query}" no results...</p>
              </li>
            )}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}
