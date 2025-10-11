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
          <h2 className="text-center mb-[24px] h2-bold">
            {text_section?.data?.title}
          </h2>
          <div className="flex gap-[48px] justify-center flex-wrap">
            <div className="flex flex-col gap-[8px] text-center xl:text-start ">
              <div
                className="about-numbers"
                dangerouslySetInnerHTML={{
                  __html: text_section?.data?.text,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[32px] px-[20px]">
        <div className="max-w-[1232px] mx-auto flex gap-[64px] items-center justify-between flex-col lg:flex-row">
          <div className="flex flex-col">
            <div
              className="h1-bold mb-[8px]"
              dangerouslySetInnerHTML={{ __html: text_with_image?.data?.title }}
            />
            <p
              className="mb-[24px] h3-light"
              dangerouslySetInnerHTML={{ __html: text_with_image?.data?.text }}
            />

            <a
              href="/about"
              className="bg-[#0E2C43] cursor-pointer py-[10.5px] px-[16px] flex items-center gap-[8px] w-fit rounded-[16px] cta-large text-white "
            >
              <div>الحكاية الكاملة</div>
              <img src="/arrow.svg" alt="arrow" />
            </a>
          </div>
          <div className="max-w-[207px] w-full ">
            <img
              src={`${IMAGE_BASE_URL}${text_with_image?.data?.image}`}
              alt="about labeeb image"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
