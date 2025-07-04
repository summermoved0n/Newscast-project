import React from 'react';
import Image from 'next/image';
import SofiaFontText from './SofiaFontText';
import SocialMediaBlock from './SocialMediaBlock';
import SectionTitle from './SectionTitle';
import ColourTitleBg from './ColourTitleBg';
import EmailForm from './EmailForm';

const tagsArray = [
  'Football',
  'Cricket',
  'Covid 19',
  'Life Style',
  'Tranding News',
  'Technology',
  'Travel',
];

export default function Footer() {
  return (
    <footer className="bg-[#393939] pt-[44px] pb-[82px]">
      <div className="px-[20px] grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_1fr] gap-[30px]">
        <div className="flex flex-col gap-[30px]">
          <a href="/" rel="noopener noreferrer">
            <Image
              width={288}
              height={288}
              src={'/icons/logo-final-whaite.svg'}
              alt="footer logo"
            />
          </a>
          <SofiaFontText className="text-sm text-white">
            Follow us in social medias or leave your message in the form down
            below and we will contact with you.
          </SofiaFontText>
          <SocialMediaBlock isFooterIcon />
        </div>
        <div className="pt-[6px]">
          <div className="flex justify-between mb-[20px] relative border-b border-white pb-[14px] after:w-[70px] after:h-px after:absolute after:bottom-[-1px] after:left-0 after:border-b after:border-red-500">
            <SectionTitle>Photo gallery</SectionTitle>
          </div>
          <ul className="grid grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr] gap-[7px]">
            <li>
              <Image
                width={85}
                height={85}
                src={'/images/footer-trees-gallery.jpg'}
                alt="trees"
              />
            </li>
            <li>
              <Image
                width={85}
                height={85}
                src={'/images/footer-crab-gallery.jpg'}
                alt="crab"
              />
            </li>
            <li>
              <Image
                width={85}
                height={85}
                src={'/images/footer-book-gallery.jpg'}
                alt="book"
              />
            </li>
            <li>
              <Image
                width={85}
                height={85}
                src={'/images/footer-snow-gallery.jpg'}
                alt="snow"
              />
            </li>
            <li>
              <Image
                width={85}
                height={85}
                src={'/images/footer-salat-gallery.jpg'}
                alt="salat"
              />
            </li>
            <li>
              <Image
                width={85}
                height={85}
                src={'/images/footer-bread-gallery.jpg'}
                alt="bread"
              />
            </li>
          </ul>
        </div>
        <div className="py-[6px]">
          <div className="flex justify-between mb-[24px] relative border-b border-white pb-[14px] after:w-[70px] after:h-px after:absolute after:bottom-[-1px] after:left-0 after:border-b after:border-red-500">
            <SectionTitle>Tags</SectionTitle>
          </div>
          <ul className="flex flex-wrap gap-[10px]">
            {tagsArray.map((item) => (
              <li key={item}>
                <ColourTitleBg isNeedSofiaFont>{item}</ColourTitleBg>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-[6px]">
          <div className="flex justify-between mb-[24px] relative border-b border-white pb-[14px] after:w-[70px] after:h-px after:absolute after:bottom-[-1px] after:left-0 after:border-b after:border-red-500">
            <SectionTitle>Stay In Touch</SectionTitle>
          </div>
          <SofiaFontText className="text-white text-sm mb-[16px]">
            To be updated with all the latest news, offers and special
            annoucements.
          </SofiaFontText>
          <EmailForm isFooterForm />
        </div>
      </div>
    </footer>
  );
}
