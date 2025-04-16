import { getWeatherByQuery, getNews } from '@/lib/api';

export default async function Page() {
  const data = await getWeatherByQuery();
  console.log('resault', data);
  // getNews();

  return (
    <main>
      <h1>Indonesia says located black box recorders from crashed plane</h1>
    </main>
  );
}
