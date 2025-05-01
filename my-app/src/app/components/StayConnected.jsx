'use client';

import SectionTitle from '@/app/components/SectionTitle';
import SmallAdItem from '@/app/components/SmallAdItem';

export default function StayConnected() {
  return (
    <section>
      <div className="flex justify-between mb-[20] relative border-b border-[#393939] pb-[14]  after:w-[70] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour fontWeight={500} fontSize={'small'}>
          Stay Connected
        </SectionTitle>
      </div>
      <ul className="flex flex-col justify-between gap-[10]"></ul>
    </section>
  );
}
