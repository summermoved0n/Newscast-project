'use client';

export default function Button({ children }) {
  return (
    <button
      type="button"
      className="w-[180] h-[44] bg-red-500 text-white hover:bg-red-600 active:bg-red-400 transition-all duration-300 ease-liner"
    >
      {children}
    </button>
  );
}
