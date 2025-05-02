'use client';

import Image from 'next/image';

import SectionTitle from '@/app/components/SectionTitle';
import ColourTitleBg from './ColourTitleBg';

export default function StayConnected() {
  return (
    <section>
      <div className="flex justify-between mb-[26] relative border-b border-[#393939] pb-[14]  after:w-[70] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour fontWeight={500} fontSize={'small'}>
          Stay Connected
        </SectionTitle>
      </div>
      <ul className="flex flex-wrap justify-between gap-[10]">
        <li>
          <ColourTitleBg className="flex gap-[12]" isMediaCard isNeedSofiaFont>
            <Image
              className="invert-[1]"
              width={20}
              height={20}
              src={'/icons/facebook-icon.svg'}
              alt="facebook"
            />
            <span className="flex flex-col font-medium text-xs">
              <span>15000</span>
              <span>Followers</span>
            </span>
          </ColourTitleBg>
        </li>
        <li>
          <ColourTitleBg className="flex gap-[12]" isMediaCard isNeedSofiaFont>
            <Image
              className="invert-[1]"
              width={20}
              height={20}
              src={'/icons/instagram-icon.svg'}
              alt="instagram"
            />
            <span className="flex flex-col font-medium text-xs">
              <span>15000</span>
              <span>Followers</span>
            </span>
          </ColourTitleBg>
        </li>
        <li>
          <ColourTitleBg className="flex gap-[12]" isMediaCard isNeedSofiaFont>
            <Image
              className="invert-[1]"
              width={20}
              height={20}
              src={'/icons/youtube-icon.svg'}
              alt="facebook"
            />
            <span className="flex flex-col font-medium text-xs">
              <span>15000</span>
              <span>Followers</span>
            </span>
          </ColourTitleBg>
        </li>
        <li>
          <ColourTitleBg className="flex gap-[12]" isMediaCard isNeedSofiaFont>
            <Image
              className="invert-[1]"
              width={20}
              height={20}
              src={'/icons/twitter-icon.svg'}
              alt="facebook"
            />
            <span className="flex flex-col font-medium text-xs">
              <span>15000</span>
              <span>Followers</span>
            </span>
          </ColourTitleBg>
        </li>
        <li>
          <ColourTitleBg className="flex gap-[12]" isMediaCard isNeedSofiaFont>
            <Image
              className="invert-[1]"
              width={20}
              height={20}
              src={'/icons/be-icon.svg'}
              alt="facebook"
            />
            <span className="flex flex-col font-medium text-xs">
              <span>15000</span>
              <span>Followers</span>
            </span>
          </ColourTitleBg>
        </li>
        <li>
          <ColourTitleBg className="flex gap-[12]" isMediaCard isNeedSofiaFont>
            <Image
              className="invert-[1]"
              width={20}
              height={20}
              src={'/icons/ball-icon.svg'}
              alt="facebook"
            />
            <span className="flex flex-col font-medium text-xs">
              <span>15000</span>
              <span>Followers</span>
            </span>
          </ColourTitleBg>
        </li>
      </ul>
    </section>
  );
}
