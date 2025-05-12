'use client';

export default function SectionTopWraper({ children }) {
  return (
    <div className="flex justify-between mb-[24] relative border-b border-[#393939] pb-[14]  after:w-[140] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
      {children}
    </div>
  );
}
