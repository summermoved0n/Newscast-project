'use client';

export default function Button({ children, isHeroAdBtn, ...rest }) {
  return (
    <button
      {...rest}
      className={`${
        isHeroAdBtn ? 'w-[180]' : 'w-full'
      } h-[44] bg-red-500 text-white hover:bg-red-600 active:bg-red-400 transition-all duration-300 ease-liner disabled:bg-red-300 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
