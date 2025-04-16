import { getWeatherByQuery, getNews } from '@/lib/api';
import { changeKelvinToCelsius } from '@/lib/helpers';

export default async function Page() {
  // getWeatherByQuery();

  const news = await getNews();
  console.log(news);

  return (
    <main>
      <h1>Indonesia says located black box recorders from crashed plane</h1>
    </main>
  );
}
