'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

import ErrorBtn from './ErrorBtn';
import Loader from './Loader';

export default function ErrorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showCancelBtn, setShowCancelBtn] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current); // очищення при анмаунті компонента
    };
  }, []);

  const startLoading = () => {
    setLoading(true);
    // запускаємо таймер тільки при старті лоадера
    timeoutRef.current = setTimeout(() => {
      setShowCancelBtn(true);
    }, 5000);
  };

  const stopLoading = () => {
    setLoading(false);
    setShowCancelBtn(false);
    clearTimeout(timeoutRef.current); // очищення таймера
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 my-auto bg-gray-900 text-white px-[20] pt-[80]">
      <div className="text-center p-6 bg-slate-600 bg-opacity-20  rounded-md">
        <h2 className="text-xl font-semibold text-red-500 mb-4">
          Oops! Something went wrong 😕
        </h2>
        <p className="mb-6 md:mb-2">
          There might be an issue with your internet connection or our server
          may be temporarily unavailable.
        </p>
        <p className="mb-6 md:mb-4">
          Please check your connection or try again in a few minutes.
        </p>
        <p className="mb-6">
          If the issue persists, feel free to contact us at{' '}
          <a
            href="mailto:newcast@support.com"
            className="text-cyan-400 underline text-lg"
          >
            newcast@support.com
          </a>
          . We’ll look into it as soon as possible.
        </p>
        <ErrorBtn
          className="h-[40] w-[120] bg-cyan-700 hover:bg-cyan-500 bg-opacity-40 rounded-md transition-all"
          onClick={() => {
            startLoading();
            router.refresh();
          }}
        >
          Try Again
        </ErrorBtn>
      </div>

      {loading && (
        <div className="flex items-center justify-center">
          <Loader className="fixed inset-0 z-50 bg-gray-500/25 flex items-center justify-center" />
          {showCancelBtn && (
            <button
              className="fixed top-1/2 cursor-pointer z-50"
              onClick={() => {
                stopLoading();
              }}
            >
              Cancel
            </button>
          )}
        </div>
      )}
    </div>
  );
}
