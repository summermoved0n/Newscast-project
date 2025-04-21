import MainNewsItem from '@/app/components/MainNewsItem';

export default function MainNews({ news }) {
  return (
    <section className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-[15] mb-[50]">
      <MainNewsItem
        article_id={news[0].article_id}
        category={news[0].category}
        image_url={news[0].image_url}
        creator={news[0].creator}
        title={news[0].title}
        pubDate={news[0].pubDate}
        poisitionBlock={'col-span-1 row-span-2 text-4xl'}
      />

      <MainNewsItem
        article_id={news[1].article_id}
        category={news[1].category}
        image_url={news[1].image_url}
        creator={news[1].creator}
        title={news[1].title}
        pubDate={news[1].pubDate}
        poisitionBlock={'col-span-1'}
      />

      <MainNewsItem
        article_id={news[2].article_id}
        category={news[2].category}
        image_url={news[2].image_url}
        creator={news[2].creator}
        title={news[2].title}
        pubDate={news[2].pubDate}
        poisitionBlock={'col-span-1'}
      />

      <MainNewsItem
        article_id={news[3].article_id}
        category={news[3].category}
        image_url={news[3].image_url}
        creator={news[3].creator}
        title={news[3].title}
        pubDate={news[3].pubDate}
        poisitionBlock={'col-span-2'}
      />
    </section>
  );
}
