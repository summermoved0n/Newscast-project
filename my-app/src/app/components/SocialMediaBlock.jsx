'use client';

import Image from 'next/image';

const socialMediaStyles =
  'flex justify-center items-center w-[24] h-[24] rounded-[50%] transition-all duration-300 ease-liner';

export default function SocialMediaBlock({ isFooterIcon }) {
  return (
    <ul className="flex gap-[10]">
      <li>
        <a
          className={`${
            isFooterIcon ? 'w-[40] h-[40]' : 'w-[24] h-[24]'
          } flex justify-center items-center  rounded-[50%] transition-all duration-300 ease-liner bg-blue-500 hover:bg-blue-700`}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert-[1]"
            width={isFooterIcon ? 11 : 8}
            height={isFooterIcon ? 20 : 14}
            src="icons/facebook-icon.svg"
            alt="facebook icon"
          />
        </a>
      </li>

      <li>
        <a
          className={`${
            isFooterIcon ? 'w-[40] h-[40]' : 'w-[24] h-[24]'
          } flex justify-center items-center rounded-[50%] transition-all duration-300 ease-liner bg-[#42C0F5] hover:bg-blue-500`}
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert-[1]"
            width={isFooterIcon ? 20 : 14}
            height={isFooterIcon ? 17 : 14}
            src="icons/twitter-icon.svg"
            alt="twitter icon"
          />
        </a>
      </li>

      <li>
        <a
          className={`${
            isFooterIcon ? 'w-[40] h-[40]' : 'w-[24] h-[24]'
          } flex justify-center items-center rounded-[50%] transition-all duration-300 ease-liner bg-[#C23785] hover:bg-fuchsia-700`}
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert-[1]"
            width={isFooterIcon ? 20 : 14}
            height={isFooterIcon ? 20 : 14}
            src="icons/instagram-icon.svg"
            alt="instagram icon"
          />
        </a>
      </li>

      <li>
        <a
          className={`${
            isFooterIcon ? 'w-[40] h-[40]' : 'w-[24] h-[24]'
          } flex justify-center items-center rounded-[50%] transition-all duration-300 ease-liner bg-[#EF5043] hover:bg-red-600`}
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="invert-[1]"
            width={isFooterIcon ? 20 : 14}
            height={isFooterIcon ? 17 : 11}
            src="icons/youtube-icon.svg"
            alt="youtube icon"
          />
        </a>
      </li>
    </ul>
  );
}
