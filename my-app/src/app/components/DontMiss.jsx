import ColourTitleBg from '@/app/components/ColourTitleBg';
import SectionTitle from '@/app/components/SectionTitle';
import BigAdItem from '@/app/components/BigAdItem';
import SmallAdItem from '@/app/components/SmallAdItem';

export default function DontMiss({news}) {
  return (
    <section>
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
        <BigAdItem
          article_id={news[0].article_id}
          category={news[0].category}
          image_url={news[0].image_url}
          creator={news[0].creator}
          title={news[0].title}
          pubDate={news[0].pubDate}
        />
        <ul className="flex flex-col justify-between">
          <SmallAdItem
            article_id={news[1].article_id}
            image={news[1].image_url}
            creator={news[1].creator}
            title={news[1].title}
            pubDate={news[1].pubDate}
          />

          <SmallAdItem
            article_id={news[2].article_id}
            image={news[2].image_url}
            creator={news[2].creator}
            title={news[2].title}
            pubDate={news[2].pubDate}
          />

          <SmallAdItem
            article_id={news[3].article_id}
            image={news[3].image_url}
            creator={news[3].creator}
            title={news[3].title}
            pubDate={news[3].pubDate}
          />

          <SmallAdItem
            article_id={news[4].article_id}
            image={news[4].image_url}
            creator={news[4].creator}
            title={news[4].title}
            pubDate={news[4].pubDate}
          />

          <SmallAdItem
            article_id={news[5].article_id}
            image={news[5].image_url}
            creator={news[5].creator}
            title={news[5].title}
            pubDate={news[5].pubDate}
          />
        </ul>
      </div>
    </section>
  );
}
