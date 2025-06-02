'use client';

export default function ErrorBtn({ children, className = '', onClick }) {
  return (
    <button
      className={`${className} h-[40px] w-[120px] bg-cyan-700 bg-opacity-40 cursor-pointer`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
