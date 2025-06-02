'use client';

export default function BackButton({ children, className = '', ...rest }) {
  return (
    <button
      {...rest}
      className={`${className} h-[44px] w-[150px] bg-[#393939] text-white hover:bg-red-600 active:bg-red-400 transition-all duration-300 ease-liner`}
    >
      {children}
    </button>
  );
}
