import { getWeatherByQuery, getNews } from '@/lib/api';
import { changeKelvinToCelsius } from '@/lib/helpers';

export default async function Page() {
  getWeatherByQuery();
  // const temperatere = weatherData.main.temp;
  // console.log(temperatere);
  // console.log('resault', weatherData);
  // getNews();

  return (
    <main>
      <h1>Indonesia says located black box recorders from crashed plane</h1>
    </main>
  );
}
