'use client';

import Image from 'next/image';
import { Sofia_Sans } from 'next/font/google';

import { getWeatherByQuery } from '@/lib/api';
import { changeKelvinToCelsius, correctFormOfData } from '@/lib/helpers';
import SocialMediaBlock from './SocialMediaBlock';
import { useEffect, useState } from 'react';

const font = Sofia_Sans({ subsets: ['latin'] });

export default function Header({ news }) {
  const [temperature, setTemperature] = useState(null);
  const [cityName, setCityName] = useState(null);

  const dataToday = correctFormOfData();

  useEffect(() => {
    getWeatherByQuery().then((data) => {
      setTemperature(changeKelvinToCelsius(data.main.temp));
      setCityName(data.name);
    });
  }, []);

  return (
    <header
      className={`${font.className} bg-white flex h-[42] items-center justify-between shadow-[0_1px_10px_0_rgba(246,80,80,0.15)] text-xs mb-[26] px-[20]`}
    >
      <div className="flex items-center justify-between h-full w-full sm:w-auto">
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
        <p className="flex items-center px-[7] text-white bg-red-500 h-full sm:mr-[17]">
          Breaking News
        </p>
        <p className="hidden sm:block">{news[0].title}</p>
      </div>
      <div className="hidden lg:block">
        <SocialMediaBlock />
      </div>
    </header>
  );
}
