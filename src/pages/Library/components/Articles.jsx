import React from "react";
import { SectionHeader } from "@/pages/Library/components";
import { NewsCard } from "@/shared";
import { useArticles } from "../../../hooks/content";
import { IMAGE_BASE_URL } from "../../../lib/constants";
import { Link } from "react-router-dom";

const arabicMonths = {
  0: "يناير",
  1: "فبراير",
  2: "مارس",
  3: "أبريل",
  4: "مايو",
  5: "يونيو",
  6: "يوليو",
  7: "أغسطس",
  8: "سبتمبر",
  9: "أكتوبر",
  10: "نوفمبر",
  11: "ديسمبر",
};

// Function to format date to Arabic
const formatDateToArabic = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = arabicMonths[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

function Articles() {
  const { data } = useArticles("articles");

  const articles = data?.data.slice(0, 4) || [];

  return (
    <div className="flex flex-col gap-8 ">
      <div data-aos="fade-right" data-aos-duration="600" data-aos-delay="100">
        <SectionHeader src="/articles.svg" title="المقالات" link="/articles" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Link
          to={`/blog/${articles?.[0]?.slug}`}
          className="rounded-lg overflow-hidden w-full  relative"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          <img
            src={`${IMAGE_BASE_URL}${articles?.[0]?.image}`}
            alt="articles img"
            className="h-90 lg:h-115 w-full object-cover "
          />
          <div className="absolute top-0 left-0 w-full h-full  bg-gradient-navy p-8 flex flex-col gap-2 text-white justify-end">
            <p className="h4-bold">{articles?.[0]?.title}</p>
            <p
              className="body-light"
              dangerouslySetInnerHTML={{ __html: articles?.[0]?.content }}
            />

            <p className="caption-light">
              {formatDateToArabic(articles?.[0]?.created_at)}{" "}
            </p>
          </div>
        </Link>
        <div
          className="flex flex-col gap-5"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="300"
        >
          <NewsCard
            variant="detailed"
            key={articles?.[1]?.id}
            title={articles?.[1]?.title}
            description={articles?.[1]?.content}
            date={articles?.[1]?.created_at}
            link={`/blog/${articles?.[1]?.slug}`}
            src={`${IMAGE_BASE_URL}${articles?.[1]?.image}`}
            className="max-h-[200px] lg:max-h-[140px]"
          />
          <NewsCard
            variant="detailed"
            key={articles?.[2]?.id}
            title={articles?.[2]?.title}
            description={articles?.[2]?.content}
            date={articles?.[2]?.created_at}
            link={`/blog/${articles?.[2]?.slug}`}
            src={`${IMAGE_BASE_URL}${articles?.[2]?.image}`}
            className="max-h-[200px] lg:max-h-[140px]"
          />
          <NewsCard
            variant="detailed"
            key={articles?.[3]?.id}
            title={articles?.[3]?.title}
            description={articles?.[3]?.content}
            date={articles?.[3]?.created_at}
            link={`/blog/${articles?.[3]?.slug}`}
            src={`${IMAGE_BASE_URL}${articles?.[3]?.image}`}
            className="max-h-[200px] lg:max-h-[140px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Articles;
