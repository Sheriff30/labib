import { SectionHeader } from "@/pages/Library/components";
import { NewsCard } from "@/shared";
import { IMAGE_BASE_URL } from "../../../lib/constants";
function News({ data }) {
  const { title, items } = data?.data || {};
  return (
    <div className="flex flex-col gap-8 ">
      <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="100">
        <SectionHeader src="/news.svg" title={title} link="/news" />
      </div>
      <div
        className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="200"
      >
        {items?.map((item, index) => {
          return (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={300 + index * 100}
            >
              <NewsCard
                variant="compact"
                title={item.title}
                date={item.created_at}
                link={`/news/${item?.slug}`}
                src={`${IMAGE_BASE_URL}${item.image}`}
                className="max-h-[200px] lg:max-h-[290px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
