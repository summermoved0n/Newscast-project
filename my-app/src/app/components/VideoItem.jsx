'use client';

import { useRef, useState, useEffect } from 'react';

import { capitalizeFirstLetter } from '@/lib/helpers';
import ColourTitleBg from '@/app/components/ColourTitleBg';

import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

export default function CustomPlayer({ src, small }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setPlaying(false);
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div
      className={`w-full relative mx-auto`}
      onClick={() => {
        playing && togglePlay();
      }}
    >
      <span className={`top-[25] left-[25] absolute z-10`}>
        <ColourTitleBg isNeedSofiaFont>
          {capitalizeFirstLetter('category')}
        </ColourTitleBg>
      </span>
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover`}
      />
      {!playing && (
        <button
          onClick={togglePlay}
          className={`${
            !small ? 'h-[70px] w-[70px]' : 'h-[38px] w-[38px]'
          } absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent  rounded-full border-[2px] border-white`}
        >
          <svg
            width={small ? '16' : '20'}
            height={small ? '16' : '24'}
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12L0.499999 23.2583L0.5 0.741669L20 12Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      {small ? (
        <div className={`mt-[25]`}>
          <p className={`${font.className} text-[#393939] text-xs mb-[6]`}>
            Lorem ipsum. -{' '}
            <span className={`text-[rgba(57,57,57,0.6)]`}>Lorem, ipsum.</span>
          </p>
          <p className="text-[#393939] text-base line-clamp-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      ) : (
        <div className={`bottom-[50] left-[25] absolute z-10 text-white`}>
          <p className={`${font.className} text-xs mb-[6]`}>
            Lorem ipsum. - Lorem, ipsum.
          </p>
          <p className="font-medium text-4xl line-clamp-2 w-[50%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officia?
          </p>
        </div>
      )}
    </div>
  );
}
