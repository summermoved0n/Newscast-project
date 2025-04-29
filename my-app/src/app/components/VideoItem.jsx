import React from 'react';

export default function VideoItem({ src, className = '' }) {
  return (
    <>
      <video
        src={src}
        // width="870px"
        // height="400px"
        controls
        loop
        muted
        className={`${className}  h-[400px] object-cover`}
      />
    </>
  );
}
