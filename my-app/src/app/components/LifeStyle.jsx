import ColourTitleBg from '@/app/components/ColourTitleBg';
import SectionTitle from '@/app/components/SectionTitle';
import BigAdItem from '@/app/components/BigAdItem';
import SmallAdItem from '@/app/components/SmallAdItem';

export default function LifeStyle({ news }) {
  return (
    <section>
      <div className="flex justify-between mb-[40] relative border-b border-[#393939] pb-[14]  after:w-[140] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour={true} fontWeight={500}>
          Life Style
        </SectionTitle>
        <div className="flex gap-[12]">
          <ColourTitleBg>All</ColourTitleBg>
          <ColourTitleBg>Travel</ColourTitleBg>
          <ColourTitleBg>Recipes</ColourTitleBg>
          <ColourTitleBg>Health & Fitness</ColourTitleBg>
          <ColourTitleBg>Music</ColourTitleBg>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-[30]">
        <div className="flex flex-col gap-[26px]">
          <BigAdItem
            article_id={news[0].article_id}
            category={news[0].category}
            image_url={news[0].image_url}
            creator={news[0].creator}
            title={news[0].title}
            pubDate={news[0].pubDate}
            description={news[0].description}
          />

          <ul className="flex flex-col gap-[22px]">
            <SmallAdItem
              article_id={news[1].article_id}
              image={news[1].image_url}
              creator={news[1].creator}
              title={news[1].title}
              pubDate={news[1].pubDate}
              imageSize={'big'}
            />

            <SmallAdItem
              article_id={news[2].article_id}
              image={news[2].image_url}
              creator={news[2].creator}
              title={news[2].title}
              pubDate={news[2].pubDate}
              imageSize={'big'}
            />
          </ul>
        </div>

        <div className="flex flex-col gap-[26px]">
          <BigAdItem
            article_id={news[0].article_id}
            category={news[0].category}
            image_url={news[0].image_url}
            creator={news[0].creator}
            title={news[0].title}
            pubDate={news[0].pubDate}
            description={news[0].description}
          />

          <ul className="flex flex-col gap-[22px]">
            <SmallAdItem
              article_id={news[1].article_id}
              image={news[1].image_url}
              creator={news[1].creator}
              title={news[1].title}
              pubDate={news[1].pubDate}
              imageSize={'big'}
            />

            <SmallAdItem
              article_id={news[2].article_id}
              image={news[2].image_url}
              creator={news[2].creator}
              title={news[2].title}
              pubDate={news[2].pubDate}
              imageSize={'big'}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
