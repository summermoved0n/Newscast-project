import dynamic from 'next/dynamic';

import {
  getNews,
  getEntertainmentNews,
  getSportsNews,
  getLifeStyleNews,
  getPixabayVideo,
} from '@/lib/api';

import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Navigation from '@/app/components/Navigation';
import MainNews from '@/app/components/MainNews';
import DontMiss from '@/app/components/DontMiss';
import RecentNews from '@/app/components/RecentNews';
import ErrorPage from './components/ErrorPage';

const Entertainment = dynamic(() => import('@/app/components/Entertainment'));
const Sports = dynamic(() => import('@/app/components/Sports'));
const LifeStyle = dynamic(() => import('@/app/components/LifeStyle'));
const PurchaseNow = dynamic(() => import('@/app/components/PurchaseNow'));
const Video = dynamic(() => import('@/app/components/Video'));
const StayConnected = dynamic(() => import('@/app/components/StayConnected'));
const Categories = dynamic(() => import('@/app/components/Categories'));
const FollowUs = dynamic(() => import('@/app/components/FollowUs'));
const Footer = dynamic(() => import('@/app/components/Footer'));

export default async function Page() {
  const news = await getNews();
  const entertainment = await getEntertainmentNews();
  const sport = await getSportsNews();
  const lifeStyle = await getLifeStyleNews();
  const pixabayVideo = await getPixabayVideo();

  const isError = Boolean(
    news && entertainment && sport && lifeStyle && pixabayVideo
  );

  return !isError ? (
    <ErrorPage />
  ) : (
    <div className="font-normal">
      <Header />
      <main className="px-[20px] mb-[50px] ">
        <Hero />
        <Navigation />
        <MainNews news={news} />
        <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] lg:grid-cols-[2fr_1fr] gap-[34px] mb-[30px]">
          <DontMiss news={entertainment} />
          <RecentNews news={news} />
        </div>
        <Entertainment news={entertainment} />
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-[34px]">
          <div className="flex flex-col gap-[50px]">
            <Sports news={sport} />
            <LifeStyle news={lifeStyle} />
            <PurchaseNow />
            <Video video={pixabayVideo} />
          </div>
          <div className="flex flex-col gap-[24px]">
            <StayConnected />
            <Categories />
          </div>
        </div>
      </main>
      <FollowUs />
      <Footer />
    </div>
  );
}
