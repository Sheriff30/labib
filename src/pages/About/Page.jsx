import React, { Fragment } from "react";
import { Hero } from "@/pages/About/components";
import { Partners } from "@/shared";
import { usePage } from "../../hooks/content";
import { cn } from "../../lib/utils";
import { IMAGE_BASE_URL } from "../../lib/constants";

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
      <div className="py-4 px-5 h-[664px] flex justify-center items-center bg-yellow">
        <div className="max-w-[1232px] mx-auto text-center">
          جاري التحميل...
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero data={hero} />
      <div
        className="px-5 py-8"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="max-w-[1232px] mx-auto">
          <h2
            className="h2-bold mb-2"
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {text_section?.data?.title}
          </h2>
          <p
            className="h4-light"
            dangerouslySetInnerHTML={{ __html: text_section?.data?.text }}
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="400"
          />
        </div>
      </div>
      <div className="px-5 py-8 lg:py-30">
        <div className="max-w-[1232px] mx-auto flex flex-col gap-10 lg:gap-30 ">
          {text_with_image?.map((item, index) => {
            const { title, text, image, image_position } = item?.data || {};
            return (
              <Fragment key={title}>
                <div
                  className={cn("flex gap-12.5 items-center flex-col  ", {
                    "lg:flex-row": image_position === "right",
                    "lg:flex-row-reverse": image_position === "left",
                  })}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 200}
                >
                  <img
                    src={`${IMAGE_BASE_URL}${image}`}
                    alt="about shape"
                    className="w-full max-w-[350px]"
                    data-aos={
                      image_position === "right" ? "fade-right" : "fade-left"
                    }
                    data-aos-duration="700"
                    data-aos-delay={index * 200 + 200}
                  />
                  <div
                    data-aos={
                      image_position === "right" ? "fade-left" : "fade-right"
                    }
                    data-aos-duration="700"
                    data-aos-delay={index * 200 + 300}
                  >
                    <h2
                      className="h2-bold mb-2"
                      data-aos="fade-down"
                      data-aos-duration="600"
                      data-aos-delay={index * 200 + 400}
                    >
                      {title}
                    </h2>
                    <div
                      className="h4-light values"
                      dangerouslySetInnerHTML={{ __html: text }}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 200 + 500}
                    />
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <Partners data={about} />
      </div>
    </>
  );
}
