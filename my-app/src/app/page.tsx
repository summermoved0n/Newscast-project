import { getWeatherByQuery, getNews, getEntertainmentNews } from '@/lib/api';

import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Navigation from '@/app/components/Navigation';
import MainNews from '@/app/components/MainNews';
import DontMiss from '@/app/components/DontMiss';
import RecentNews from '@/app/components/RecentNews';
import Entertainment from '@/app/components/Entertainment';

export default async function Page() {
  // const weather = await getWeatherByQuery();

  const news = await getNews();

  // const entertainment = await getEntertainmentNews();
  // console.log(entertainment);

  return (
    <div className="font-normal">
      {/* <Header weather={weather} /> */}
      <main className="px-[20]">
        <Hero />
        <Navigation />
        <MainNews news={news} />
        <div className="grid grid-cols-[2fr_1fr] gap-[34] mb-[30]">
          {/* <DontMiss news={entertainment} /> */}
          {/* <RecentNews /> */}
        </div>
        {/* <Entertainment news={entertainment} /> */}
      </main>
    </div>
  );
}
