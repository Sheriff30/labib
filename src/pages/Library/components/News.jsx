import { SectionHeader } from "@/pages/Library/components";
import { NewsCard } from "@/shared";
import { IMAGE_BASE_URL } from "../../../lib/constants";
function News({ data }) {
  const { title, items } = data?.data || {};
  return (
    <div className="flex flex-col gap-8 ">
      <SectionHeader src="/news.svg" title={title} link="/news" />
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items?.map((item) => {
          return (
            <NewsCard
              variant="compact"
              key={item.id}
              title={item.title}
              date={item.created_at}
              link={`/news/${item?.slug}`}
              src={`${IMAGE_BASE_URL}${item.image}`}
              className="max-h-[200px] lg:max-h-[290px]"
            />
          );
        })}
      </div>
    </div>
  );
}

export default News;
