import { getWeatherByQuery, getNews } from '@/lib/api';
import { changeKelvinToCelsius } from '@/lib/helpers';

export default async function Page() {
  const weather = await getWeatherByQuery();
  const temperature = changeKelvinToCelsius(weather.main.temp);
  console.log(temperature);

  // const news = await getNews();
  // console.log(news);

  return (
    <main>
      <h1>
        Indonesia says located black box recorders from crashed plane{' '}
        <span>{temperature}</span>
      </h1>
    </main>
  );
}
