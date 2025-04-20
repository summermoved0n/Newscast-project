'use client';

import Image from 'next/image';
import { Sofia_Sans } from 'next/font/google';

import { changeKelvinToCelsius, correctFormOfData } from '@/lib/helpers';
import SocialMediaBlock from './SocialMediaBlock';

const font = Sofia_Sans({ subsets: ['latin'] });

export default function Header({ weather }) {
  const temperature = changeKelvinToCelsius(weather.main.temp);
  const cityName = weather.name;
  const dataToday = correctFormOfData();

  return (
    <header
      className={`${font.className} px-[20] bg-white flex h-[42] items-center justify-between`}
    >
      <div className="flex items-center h-[100%]">
        <Image
          className="mr-[7]"
          width={16}
          height={16}
          src="/icons/weather-icon.svg"
          alt="weather icon"
        />
        <p className="mr-[8] relative">
          <span className="flex justify-center w-[26]">{temperature}</span>
          <Image
            className="absolute top-0 right-0"
            width={10}
            height={10}
            src="/icons/celsius-icon.svg"
            alt="celsius icon"
          />
        </p>
        <p className="mr-[16]">{cityName}</p>
        <Image
          className="mr-[12]"
          width={16}
          height={16}
          src="/icons/clock-icon.svg"
          alt="clock icon"
        />
        <p className="mr-[14]">{dataToday}</p>
        <p className="flex items-center px-[7] text-white bg-red-500 h-[100%] mr-[17]">
          Breaking News
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, hic?
        </p>
      </div>
      <SocialMediaBlock />
    </header>
  );
}
