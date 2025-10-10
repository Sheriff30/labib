import React from "react";
import { Breadcrumbs } from "@/shared";
import { usePage } from "../../hooks/content";

export default function Page() {
  const { data, isLoading } = usePage("terms");

  const text_section = data?.content?.filter(
    (section) => section.type === "text_section"
  );
  const hero = data?.content?.filter((section) => section.type === "hero");

  const updated_at = data?.updated_at;
  if (isLoading) {
    return (
      <div className="py-4 pb-15 px-5">
        <div className="max-w-[1232px] mx-auto text-center">
          جاري التحميل...
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="px-[20px] pb-[100px]">
        <div className="max-w-[1232px] mx-auto flex flex-col gap-10">
          <Breadcrumbs title1="الشروط والأحكام" />

          <div className="flex flex-col gap-[24px]">
            {hero?.map((item) => {
              const { title, text } = item?.data || {};

              return (
                <div className="flex flex-col gap-[24px]">
                  <h1 className="h1-bold">{title}</h1>
                  <div className="flex items-center gap-1 flex-wrap">
                    <div
                      className="titles-medium"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                    <div>{updated_at.split("T")[0].replace(/-/g, "/")}</div>
                  </div>
                </div>
              );
            })}
            <div className="flex flex-col gap-[24px]">
              {text_section?.map((item, index) => {
                const { title, text } = item?.data || {};

                return (
                  <div key={index}>
                    <h2 className="title-bold">{title}</h2>
                    <p
                      className="body-light"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
