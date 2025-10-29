import React from "react";
import FieldsSwiper from "./FieldsSwiper";
import { usePage } from "../../../hooks/content";
import { IMAGE_BASE_URL } from "../../../lib/constants";

export default function Fields() {
  const { data } = usePage("fields");

  const fields = data?.content
    ?.filter((section) => section.type === "text_with_image")
    ?.slice(0, 3);

  return (
    <div className="bg-[#F9FAFB] py-[100px] px-[20px]">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex gap-[24px] items-center justify-center text-center flex-col lg:flex-row lg:justify-between mb-[56px]">
          <h1 className="h1-bold" data-aos="fade-down" data-aos-duration="600">
            رحلة تعليمية شاملة لأجيال المستقبل
          </h1>
          <a
            href="/fields"
            className="h4-link text-[#F06827] hover:text-[#e55a1f] transition-colors duration-300"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            عرض كل المجالات
          </a>
        </div>
        {/* Mobile Swiper */}
        <FieldsSwiper fields={fields} />
        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-[16px]">
          {fields?.map((field, index) => {
            const { title, text, image } = field?.data || {};
            return (
              <div
                key={index}
                className="flex flex-col bg-white px-[16px] py-[70px] items-center text-center xl:items-start xl:text-start shadow-[0px_4px_16px_0px_#24252E05] rounded-[8px] hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={index * 150}
              >
                <img
                  src={`${IMAGE_BASE_URL}${image}`}
                  alt={title}
                  className="mb-[24px] max-w-[160px]  h-[100px]"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={index * 150 + 200}
                />
                <h2
                  className="h3-bold mb-[13px]"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 150 + 300}
                >
                  {title}
                </h2>
                <p
                  className="h4-light"
                  dangerouslySetInnerHTML={{ __html: text }}
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay={index * 150 + 400}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
