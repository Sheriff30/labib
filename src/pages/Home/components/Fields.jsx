import React from "react";
import { usePage } from "../../../hooks/content";

export default function Fields() {
  const { data } = usePage("fields");

  const fields = data?.content
    ?.filter((section) => section.type === "text_with_image")
    ?.slice(0, 3);

  return (
    <div className="bg-[#F9FAFB] py-[100px] px-[20px]">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex gap-[24px] items-center justify-center text-center flex-col lg:flex-row lg:justify-between mb-[56px]">
          <h1 className="h1-bold">رحلة تعليمية شاملة لأجيال المستقبل</h1>
          <a href="/fields" className="h4-link text-[#F06827]">
            عرض كل المجالات
          </a>
        </div>
        <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-3 ">
          {fields?.map((field, index) => {
            const { title, text, image } = field?.data || {};
            return (
              <div
                key={index}
                className="flex flex-col bg-white px-[16px] py-[70px] items-center text-center xl:items-start xl:text-start shadow-[0px_4px_16px_0px_#24252E05] rounded-[8px]"
              >
                <img
                  src={image}
                  alt={title}
                  className="mb-[24px] max-w-[160px]  h-[100px]"
                />
                <h2 className="h3-bold mb-[13px]">{title}</h2>
                <p
                  className="h4-light"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
