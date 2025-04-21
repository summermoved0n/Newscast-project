import { getWeatherByQuery, getNews } from '@/lib/api';

import AdvertisementCard from '@/app/components/AdvertisementCard';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Navigation from '@/app/components/Navigation';
import MainNews from '@/app/components/MainNews';

export default async function Page() {
  const weather = await getWeatherByQuery();

  const news = await getNews();
  console.log(news);

  return (
    <div className="font-normal">
      <Header weather={weather} />
      <main className="px-[20]">
        <Hero />
        <Navigation />
        <MainNews news={news} />
        <AdvertisementCard news={news} />
      </main>
    </div>
  );
}
