'use client';

import Image from 'next/image';

const socialMediaStyles =
  'flex justify-center items-center w-[24] h-[24] rounded-[50%] transition-all duration-300 ease-liner';

export default function SocialMediaBlock() {
  return (
    <ul className="flex gap-[10]">
      <li>
        <a
          className={`${socialMediaStyles} bg-blue-500 hover:bg-blue-700`}
          href="https://www.facebook.com/"
        >
          <Image
            className="invert-[1]"
            width={8}
            height={14}
            src="icons/facebook-icon.svg"
            alt="facebook icon"
          />
        </a>
      </li>

      <li>
        <a
          className={`${socialMediaStyles} bg-[#42C0F5] hover:bg-purple-400`}
          href="https://twitter.com
  "
        >
          <Image
            className="invert-[1]"
            width={14}
            height={14}
            src="icons/twitter-icon.svg"
            alt="twitter icon"
          />
        </a>
      </li>

      <li>
        <a
          className={`${socialMediaStyles} bg-[#C23785] hover:bg-fuchsia-700`}
          href="https://www.instagram.com
  "
        >
          <Image
            className="invert-[1]"
            width={14}
            height={14}
            src="icons/instagram-icon.svg"
            alt="instagram icon"
          />
        </a>
      </li>

      <li>
        <a
          className={`${socialMediaStyles} bg-[#EF5043] hover:bg-red-600`}
          href="https://www.youtube.com/"
        >
          <Image
            className="invert-[1]"
            width={14}
            height={11}
            src="icons/youtube-icon.svg"
            alt="youtube icon"
          />
        </a>
      </li>
    </ul>
  );
}
