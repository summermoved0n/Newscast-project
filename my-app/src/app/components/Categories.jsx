'use client';

import Image from 'next/image';

import React from 'react';
import SectionTitle from './SectionTitle';
import SofiaFontText from './SofiaFontText';
import ColourTitleBg from './ColourTitleBg';

const categoriesData = [
  { categorie: 'Life Style', value: 50 },
  { categorie: 'World', value: 55 },
  { categorie: 'Foods', value: 40 },
  { categorie: 'Tachnology', value: 10 },
  { categorie: 'Sports', value: 42 },
  { categorie: 'Football', value: 15 },
  { categorie: 'Cricket', value: 67 },
  { categorie: 'Covid 19', value: 12 },
];

export default function Categories() {
  return (
    <section>
      <div className="flex justify-between mb-[24] relative border-b border-[#393939] pb-[14]  after:w-[70] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour={true} fontWeight={500} fontSize={'small'}>
          Categories
        </SectionTitle>
      </div>
      <ul className="flex flex-col justify-between gap-[12]">
        {categoriesData.map(({ categorie, value }) => (
          <li className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                className="mr-[12]"
                width={6}
                height={10}
                src={'/icons/arrow-right-icon.svg'}
                alt="arrow"
              />
              <SofiaFontText className="text-sm text-[#393939]">
                {categorie}
              </SofiaFontText>
            </div>
            <ColourTitleBg isNeedSofiaFont>{value}</ColourTitleBg>
          </li>
        ))}
      </ul>
    </section>
  );
}
