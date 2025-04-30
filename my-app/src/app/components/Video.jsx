import ColourTitleBg from '@/app/components/ColourTitleBg';
import SectionTitle from '@/app/components/SectionTitle';
import VideoItem from '@/app/components/VideoItem';

export default function Video({ video }) {
  console.log(video);
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
      <div className="grid grid-cols-[1fr] grid-rows-[2fr_1fr] gap-[24]">
        <VideoItem src={video[1].videos.medium.url} creator={video[1].user} />
        <div className="flex justify-between gap-[24]">
          <VideoItem
            src={video[2].videos.small.url}
            creator={video[2].user}
            small
          />
          <VideoItem
            src={video[3].videos.small.url}
            creator={video[3].user}
            small
          />
          <VideoItem
            src={video[5].videos.small.url}
            creator={video[5].user}
            small
          />
        </div>
      </div>
    </section>
  );
}
