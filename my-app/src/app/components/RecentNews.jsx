'use client';

import SectionTitle from '@/app/components/SectionTitle';
import SmallAdItem from '@/app/components/SmallAdItem';

export default function RecentNews() {
  return (
    <section>
      <div className="flex justify-between mb-[20] relative border-b border-[#393939] pb-[14]  after:w-[70] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour={true} fontWeight={500} fontSize={'small'}>
          Recent
        </SectionTitle>
      </div>
      <ul className="flex flex-col justify-between gap-[10]">
        <SmallAdItem isSmallSize={true} />

        <SmallAdItem isSmallSize={true} />

        <SmallAdItem isSmallSize={true} />

        <SmallAdItem isSmallSize={true} />

        <SmallAdItem isSmallSize={true} />
      </ul>
    </section>
  );
}
