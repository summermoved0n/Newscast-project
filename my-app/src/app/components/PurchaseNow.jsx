'use client';

import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import EmailForm from './EmailForm';

import { Sofia_Sans } from 'next/font/google';
const font = Sofia_Sans({ subsets: ['latin'] });

export default function PurchaseNow() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-[url('/images/add-bg-pic.jpg')] bg-cover bg-center flex justify-between items-center px-[26px] py-[16px] w-full max-w-[770px]">
      <div className="text-sm">
        <p className={`${font.className} text-white`}>
          Best Selling <b>BLOG</b> and <b>MAGAZINE</b>
          <br /> Theme of All Time
        </p>
        <p className="text-red-500">Experience the change!</p>
      </div>

      <Button onClick={() => setOpenModal(true)} isHeroAdBtn>
        PURCHASE NOW
      </Button>

      {openModal && (
        <Modal show={true} onClose={() => setOpenModal(false)}>
          <p className="text-gray-700 text-lg pt-[30px] mb-[30px]">
            Please leave your email and we'll contact with you😎
          </p>
          <EmailForm />
        </Modal>
      )}
    </div>
  );
}
