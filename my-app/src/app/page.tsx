import { getWeatherByQuery, getNews } from '@/lib/api';

import AdvertisementCard from '@/app/components/AdvertisementCard';
import Header from '@/app/components/Header';

export default async function Page() {
  const weather = await getWeatherByQuery();

  // const news = await getNews();
  // console.log(news);

  return (
    <div>
      <Header weather={weather} />
      <main className="px-[20]">{/* <AdvertisementCard news={news} /> */}</main>
    </div>
  );
}
