'use client';

import { useRouter } from 'next/navigation';

export default function ErrorPage() {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 my-auto bg-gray-900 text-white">
      <button
        className="h-[40] w-[120] bg-cyan-700"
        type="button"
        onClick={() => router.push('/')}
      >
        Try again
      </button>
      <div className="flex justify-center items-center max-w-2xs mx-[10] my-auto h-fit bg-slate-600 bg-opacity-20 rounded-md py-[30] px-[20]">
        <p>ErrorPage</p>
      </div>
    </div>
  );
}
