'use client';

export default function SectionTopWraper({ children, className = '' }) {
  return (
    <div
      className={`${className} flex justify-between mb-[24px] relative border-b border-[#393939] pb-[14px] after:w-[140px] after:h-px after:absolute after:bottom-[-1px] after:left-0 after:border-b after:border-red-500`}
    >
      {children}
    </div>
  );
}
