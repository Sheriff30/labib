import { SectionHeader } from "@/pages/Library/components";
import { NewsCard } from "@/shared";
import { IMAGE_BASE_URL } from "../../../lib/constants";
function Latest({ data }) {
  const { items, title } = data?.data || {};

  return (
    <div className="flex flex-col gap-8 ">
      <div
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <SectionHeader src="/latest.svg" title={title} link="/latest" />
      </div>
      <div className="grid gap-5 lg:grid-cols-2  ">
        <div 
          className="flex flex-col gap-5"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <NewsCard
            title={items?.[0]?.title}
            description={items?.[0]?.content}
            date={items?.[0]?.created_at}
            src={`${IMAGE_BASE_URL}${items?.[0]?.image}`}
            link={`/blog/${items?.[0]?.slug}`}
            className="max-h-[200px] lg:max-h-[140px]"
          />
          <NewsCard
            title={items?.[1]?.title}
            description={items?.[1]?.content}
            date={items?.[1]?.created_at}
            src={`${IMAGE_BASE_URL}${items?.[1]?.image}`}
            link={`/blog/${items?.[1]?.slug}`}
            className="max-h-[200px] lg:max-h-[140px]"
          />
        </div>
        <div 
          className="grid grid-cols-2 gap-5 h-full"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="300"
        >
          <NewsCard
            variant="compact"
            title={items?.[2]?.title}
            date={items?.[2]?.created_at}
            src={`${IMAGE_BASE_URL}${items?.[2]?.image}`}
            link={`/blog/${items?.[2]?.slug}`}
            className="max-h-[200px] lg:max-h-[216px]"
          />
          <NewsCard
            variant="compact"
            title={items?.[3]?.title}
            date={items?.[3]?.created_at}
            src={`${IMAGE_BASE_URL}${items?.[3]?.image}`}
            link={`/blog/${items?.[3]?.slug}`}
            className="max-h-[200px] lg:max-h-[216px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Latest;
