'use client';

import SectionTitle from '@/app/components/SectionTitle';
import SmallAdItem from '@/app/components/SmallAdItem';

export default function RecentNews({ news }) {
  return (
    <section>
      <div className="flex justify-between mb-[20] relative border-b border-[#393939] pb-[14]  after:w-[70] after:h-px after:absolute after:bottom-[-1] after:left-0 after:border-b after:border-red-500">
        <SectionTitle isRedColour={true} fontWeight={500} fontSize={'small'}>
          Recent
        </SectionTitle>
      </div>
      <ul className="flex flex-col justify-between gap-[10]">
        <SmallAdItem
          article_id={news[4].article_id}
          image={news[4].image_url}
          creator={news[4].creator}
          title={news[4].title}
          pubDate={news[4].pubDate}
          imageSize={'small'}
        />

        <SmallAdItem
          article_id={news[5].article_id}
          image={news[5].image_url}
          creator={news[5].creator}
          title={news[5].title}
          pubDate={news[5].pubDate}
          imageSize={'small'}
        />

        <SmallAdItem
          article_id={news[6].article_id}
          image={news[6].image_url}
          creator={news[6].creator}
          title={news[6].title}
          pubDate={news[6].pubDate}
          imageSize={'small'}
        />

        <SmallAdItem
          article_id={news[7].article_id}
          image={news[7].image_url}
          creator={news[7].creator}
          title={news[7].title}
          pubDate={news[7].pubDate}
          imageSize={'small'}
        />

        <SmallAdItem
          article_id={news[8].article_id}
          image={news[8].image_url}
          creator={news[8].creator}
          title={news[8].title}
          pubDate={news[8].pubDate}
          imageSize={'small'}
        />
      </ul>
    </section>
  );
}
