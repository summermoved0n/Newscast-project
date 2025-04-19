'use client';

import Image from 'next/image';

import { changeKelvinToCelsius, correctFormOfData } from '@/lib/helpers';
import SocialMediaBlock from './SocialMediaBlock';

export default function Header({ weather }) {
  const temperature = changeKelvinToCelsius(weather.main.temp);
  const cityName = weather.name;
  const dataToday = correctFormOfData();

  return (
    <header className="flex">
      <Image
        width={20}
        height={20}
        src="/icons/weather-icon.svg"
        alt="weather icon"
      />
      <p className="flex">
        <span>{temperature}</span>
        <Image
          width={10}
          height={10}
          src="/icons/celsius-icon.svg"
          alt="celsius icon"
        />
      </p>
      <p>{cityName}</p>
      <p>{dataToday}</p>
      <p>Breaking News</p>
      <SocialMediaBlock />
    </header>
  );
}
