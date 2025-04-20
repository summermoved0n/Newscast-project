'use client';

export default function Button({ text }) {
  return (
    <button type="button" className="w-[180] h-[44] bg-red-500 text-white">
      {text}
    </button>
  );
}
