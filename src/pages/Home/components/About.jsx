import React from "react";
import { IMAGE_BASE_URL } from "../../../lib/constants";

export default function About({ data }) {
  const text_section = data?.content?.filter(
    (section) => section.type === "text_section"
  )?.[0];
  const text_with_image = data?.content?.filter(
    (section) => section.type === "text_with_image"
  )?.[0];

  return (
    <div className="bg-[#FEF6EE]">
      <div className="px-[20px] py-[64px]">
        <div className="max-w-[1232px] mx-auto">
          <h2
            className="text-center mb-[24px]  text-2xl font-bold md:text-[40px]"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            {text_section?.data?.title}
          </h2>
          <div className="flex gap-[48px] justify-center flex-wrap">
            <div className="flex flex-col gap-[8px] text-center xl:text-start ">
              <div
                className="about-numbers"
                dangerouslySetInnerHTML={{
                  __html: text_section?.data?.text,
                }}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[32px] px-[20px]">
        <div className="max-w-[1232px] mx-auto flex gap-[64px] items-center justify-between flex-col lg:flex-row">
          <div
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            <div
              className="h2-bold mb-[8px]"
              dangerouslySetInnerHTML={{ __html: text_with_image?.data?.title }}
            />
            <p
              className="mb-[24px] h3-light"
              dangerouslySetInnerHTML={{ __html: text_with_image?.data?.text }}
            />
            <div className="flex justify-between gap-1 items-center">
              <a
                href="/about"
                className="bg-[#0E2C43] cursor-pointer py-[10.5px] px-[16px] flex items-center gap-[8px] w-fit rounded-[16px] cta-large text-white hover:bg-[#1a3a5c] transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                <div>الحكاية الكاملة</div>
                <img src="/arrow.svg" alt="arrow" />
              </a>

              <img
                src={`${IMAGE_BASE_URL}${text_with_image?.data?.image}`}
                alt="about labeeb image"
                className=" w-full max-w-[136px] lg:max-w-[207px] block lg:hidden"
              />
            </div>
          </div>
          <div
            className="flex justify-start w-full"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <img
              src={`${IMAGE_BASE_URL}${text_with_image?.data?.image}`}
              alt="about labeeb image"
              className=" w-full max-w-[136px] lg:max-w-[207px] hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
