import React, { Fragment } from "react";
import { Hero } from "@/pages/About/components";
import { Partners } from "@/shared";
import { usePage } from "../../hooks/content";
import { cn } from "../../lib/utils";

export default function Page() {
  const { data: about, isLoading } = usePage("about");

  const hero = about?.content?.filter(
    (section) => section.type === "hero"
  )?.[0];
  const text_section = about?.content?.filter(
    (section) => section.type === "text_section"
  )?.[0];
  const text_with_image = about?.content?.filter(
    (section) => section.type === "text_with_image"
  );

  if (isLoading) {
    return (
      <div className="py-4 px-5 h-200 flex justify-center items-center bg-yellow">
        <div className="max-w-[1232px] mx-auto text-center">
          جاري التحميل...
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero data={hero} />
      <div className="px-5 py-8">
        <div className="max-w-[1232px] mx-auto">
          <h2 className="h1-bold mb-2">{text_section?.data?.title} </h2>
          <p
            className="h3-light"
            dangerouslySetInnerHTML={{ __html: text_section?.data?.text }}
          />
        </div>{" "}
      </div>
      <div className="px-5 py-8 lg:py-30">
        <div className="max-w-[1232px] mx-auto flex flex-col gap-10 lg:gap-30 ">
          {text_with_image?.map((item) => {
            const { title, text, image, image_position } = item?.data || {};
            return (
              <Fragment key={title}>
                <div
                  className={cn("flex gap-12.5 items-center flex-col  ", {
                    "lg:flex-row": image_position === "right",
                    "lg:flex-row-reverse": image_position === "left",
                  })}
                >
                  <img
                    src={image}
                    alt="about shape"
                    className="w-full max-w-[408px]"
                  />
                  <div>
                    <h2 className="h1-bold mb-2">{title}</h2>
                    <div
                      className="h4-light values"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  </div>{" "}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <Partners />
    </>
  );
}
