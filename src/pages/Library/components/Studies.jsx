import { SectionHeader } from "@/pages/Library/components";
import { NewsCard } from "@/shared";
import { useArticles } from "../../../hooks/content";
import { IMAGE_BASE_URL } from "../../../lib/constants";
function Studies() {
  const { data } = useArticles("studies");

  const studies = data?.data.slice(0, 2) || [];
  return (
    <div className="flex flex-col gap-8 ">
      <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="100">
        <SectionHeader
          src="/studies.svg"
          title="الدراسات والأبحاث"
          link="/studies"
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-5 ">
        <div
          className="flex flex-col gap-5"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          {studies?.map((item) => (
            <NewsCard
              variant="detailed"
              key={item.id}
              title={item.title}
              description={item.content}
              date={item.created_at}
              link={`/blog/${item?.slug}`}
              src={`${IMAGE_BASE_URL}${item.image}`}
              className="max-h-[200px] lg:max-h-[140px]"
            />
          ))}
        </div>
        <div
          className="grid grid-cols-3 gap-2.5 lg:gap-5 w-full"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="300"
        >
          <img
            src="/post3.png"
            alt="studies and research img"
            className="w-full max-h-[140px] object-cover rounded"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="400"
          />
          <img
            src="/post3.png"
            alt="studies and research img"
            className="w-full max-h-[140px] object-cover rounded"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="450"
          />
          <img
            src="/post3.png"
            alt="studies and research img"
            className="w-full max-h-[140px] object-cover rounded"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="500"
          />
          <img
            src="/post3.png"
            alt="studies and research img"
            className="w-full max-h-[140px] object-cover rounded"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="550"
          />
          <img
            src="/post3.png"
            alt="studies and research img"
            className="w-full max-h-[140px] object-cover rounded"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="600"
          />
          <img
            src="/post3.png"
            alt="studies and research img"
            className="w-full max-h-[140px] object-cover rounded"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="650"
          />
        </div>
      </div>
    </div>
  );
}

export default Studies;
