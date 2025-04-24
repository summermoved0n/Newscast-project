import SectionTitle from './SectionTitle';
import SmallAdItem from './SmallAdItem';
import MainNewsItem from './MainNewsItem';
import PrevPageBtn from './PrevPageBtn';
import NextPageBtn from './NextPageBtn';

export default function Entertainment({ news }) {
  console.log(news);

  return (
    <section className="">
      <div className="flex justify-between mb-[24] relative border-b border-[#393939] pb-[14]  after:w-[140] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour={true} fontWeight={500}>
          Entertainment
        </SectionTitle>
        <div className="flex gap-[10]">
          <PrevPageBtn />
          <NextPageBtn />
        </div>
      </div>
      <div className="grid grid-cols-[1fr] gap-[24]">
        <MainNewsItem
          article_id={news[0].article_id}
          category={news[0].category}
          image_url={news[0].image_url}
          creator={news[0].creator}
          title={news[0].title}
          pubDate={news[0].pubDate}
          poisitionBlock={'col-span-1 row-span-1 text-4xl'}
        />
        <ul className="flex justify-between">
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
        </ul>
      </div>
    </section>
  );
}
