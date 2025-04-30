'use client';
import { useRef, useState } from 'react';

export default function CustomPlayer({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

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
    <div className="relative w-full max-w-[800px] mx-auto">
      <video ref={videoRef} src={src} className="w-full" />
      {!playing && (
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-[22] rounded-[50%] border border-white"
        >
          <svg
            width="20"
            height="24"
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
    </div>
  );
}
