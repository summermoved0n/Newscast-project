import ColourTitleBg from '@/app/components/ColourTitleBg';
import SectionTitle from '@/app/components/SectionTitle';
import BigAdItem from '@/app/components/BigAdItem';
import SmallAdItem from '@/app/components/SmallAdItem';

export default function DontMiss() {
  return (
    <section className="">
      <div className="flex justify-between mb-[24] relative border-b border-[#393939] pb-[14]  after:w-[140] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour={true} fontWeight={500}>
          Don't Miss
        </SectionTitle>
        <div className="flex gap-[12]">
          <ColourTitleBg isNeedSofiaFont={false}>All</ColourTitleBg>
          <ColourTitleBg isNeedSofiaFont={false}>Lifestyle</ColourTitleBg>
          <ColourTitleBg isNeedSofiaFont={false}>Vogue</ColourTitleBg>
          <ColourTitleBg isNeedSofiaFont={false}>
            Health & Fitness
          </ColourTitleBg>
          <ColourTitleBg isNeedSofiaFont={false}>Travel</ColourTitleBg>
          <ColourTitleBg isNeedSofiaFont={false}>Gadgets</ColourTitleBg>
          <ColourTitleBg isNeedSofiaFont={false}>World</ColourTitleBg>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-[30]">
        <BigAdItem />
        <ul className="flex flex-col justify-between">
          <SmallAdItem />

          <SmallAdItem />

          <SmallAdItem />

          <SmallAdItem />

          <SmallAdItem />
        </ul>
      </div>
    </section>
  );
}
