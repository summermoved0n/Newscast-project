'use client';

export default function AdvertisementCard({ news }) {
  return (
    <ul>
      {news.map(
        ({ article_id, image_url, category, title, pubDate, country }) => (
          <li
            key={article_id}
            id={article_id}
            className="flex gap-10 m-2 p-2 border border-black rounded-xl md:flex-col md:gap-20"
          >
            <div>
              <img src={image_url} alt={country} width={100} />
            </div>
            <div>
              <p>
                {category[0]} - {pubDate}
              </p>
              <p className="text-sm">{title}</p>
            </div>
          </li>
        )
      )}
    </ul>
  );
}
