'use client';

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal({ show, children, onClose }) {
  return (
    <Transition.Root as={Fragment} show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-start sm:items-center overflow-y-auto"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <Dialog.Panel className="relative transform overflow-hidden sm:rounded-lg bg-white shadow-xl transition-all p-7 sm:my-auto mx-auto sm:w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <button
            className="absolute w-[30px] h-[30px] sm:w-[20px] sm:h-[20px] top-[20px] right-[20px] sm:top-[15px] sm:right-[15px] text-black font-semibold"
            onClick={onClose}
          >
            ✕
          </button>
          {children}
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
