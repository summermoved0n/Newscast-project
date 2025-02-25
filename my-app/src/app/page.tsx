'use client';

// import { Sofia_Sans } from 'next/font/google';
import { getWeatherByQuery, getNews } from '@/lib/api';
// const font = Sofia_Sans({ subsets: ['latin'] });

export default function Page() {
  getWeatherByQuery();
  // getNews();

  return (
    <main>
      <h1>Indonesia says located black box recorders from crashed plane</h1>
    </main>
  );
}
