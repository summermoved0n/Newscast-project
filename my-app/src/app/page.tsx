import { getWeatherByQuery, getNews } from '@/lib/api';

import AdvertisementCard from '@/app/components/AdvertisementCard';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';

export default async function Page() {
  const weather = await getWeatherByQuery();

  // const news = await getNews();
  // console.log(news);

  return (
    <div>
      <Header weather={weather} />
      <main className="px-[20]">
        <Hero />
        {/* <AdvertisementCard news={news} /> */}
      </main>
    </div>
  );
}
