import { getWeatherByQuery, getNews } from '@/lib/api';

import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Navigation from '@/app/components/Navigation';
import MainNews from '@/app/components/MainNews';
import DontMiss from '@/app/components/DontMiss';

export default async function Page() {
  // const weather = await getWeatherByQuery();

  // const news = await getNews();
  // console.log(news);

  return (
    <div className="font-normal">
      {/* <Header weather={weather} /> */}
      <main className="px-[20]">
        <Hero />
        <Navigation />
        {/* <MainNews news={news} /> */}
        <div className="grid grid-cols-[2fr_1fr] gap-[34]">
          <DontMiss />
          <div></div>
        </div>
      </main>
    </div>
  );
}
