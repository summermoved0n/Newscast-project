import ColourTitleBg from '@/app/components/ColourTitleBg';
import SectionTitle from '@/app/components/SectionTitle';
import BigAdItem from '@/app/components/BigAdItem';
import SmallAdItem from '@/app/components/SmallAdItem';
import VideoItem from '@/app/components/VideoItem';

export default function Video({ video }) {
  return (
    <section>
      <div className="flex justify-between mb-[40] relative border-b border-[#393939] pb-[14]  after:w-[140] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour fontWeight={500}>
          Video
        </SectionTitle>
        <div className="flex gap-[12]">
          <ColourTitleBg>All</ColourTitleBg>
          <ColourTitleBg>Travel</ColourTitleBg>
          <ColourTitleBg>Recipes</ColourTitleBg>
          <ColourTitleBg>Health & Fitness</ColourTitleBg>
          <ColourTitleBg>Music</ColourTitleBg>
        </div>
      </div>
      <div className="grid grid-cols-[1fr] grid-rows-[2fr_1fr] gap-[30]">
        <VideoItem
          src={video[0].videos.medium.url}
        />
      </div>
    </section>
  );
}
