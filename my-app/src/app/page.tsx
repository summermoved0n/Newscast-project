import {
  getWeatherByQuery,
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
import Entertainment from '@/app/components/Entertainment';
import Sports from '@/app/components/Sports';
import LifeStyle from '@/app/components/LifeStyle';
import PurchaseNow from '@/app/components/PurchaseNow';
import Video from '@/app/components/Video';
import StayConnected from '@/app/components/StayConnected';
import Categories from '@/app/components/Categories';
import FollowUs from '@/app/components/FollowUs';
import Footer from '@/app/components/Footer';
import ErrorPage from './components/ErrorPage';

export default async function Page() {
  const weather = await getWeatherByQuery();
  const news = await getNews();
  const entertainment = await getEntertainmentNews();
  const sport = await getSportsNews();
  const lifeStyle = await getLifeStyleNews();
  const pixabayVideo = await getPixabayVideo();

  const isError = Boolean(
    weather && news && entertainment && sport && lifeStyle && pixabayVideo
  );
  console.log(isError);

  return !isError ? (
    <ErrorPage />
  ) : (
    <div className="font-normal">
      <Header weather={weather} news={news} />
      <main className="px-[20] mb-[50] ">
        <Hero />
        <Navigation />
        <MainNews news={news} />
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] lg:grid-cols-[2fr_1fr] gap-[34] mb-[30]">
          <DontMiss news={entertainment} />
          <RecentNews news={news} />
        </div>
        <Entertainment news={entertainment} />
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-[34]">
          <div className="flex flex-col gap-[50px]">
            <Sports news={sport} />
            <LifeStyle news={lifeStyle} />
            <PurchaseNow />
            <Video video={pixabayVideo} />
          </div>
          <div className="flex flex-col gap-[24]">
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
