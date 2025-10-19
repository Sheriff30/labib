import React from "react";
import { NewsCard } from "@/shared";
import { Breadcrumbs } from "@/shared";
import { Link } from "react-router-dom";
import { usePage } from "../../hooks/content";
import { cn } from "../../lib/utils";
import { IMAGE_BASE_URL } from "../../lib/constants";

export default function Page() {
  const { data, isLoading } = usePage("fields");

  const text_section = data?.content?.filter(
    (section) => section.type === "text_section"
  );
  const text_with_image = data?.content?.filter(
    (section) => section.type === "text_with_image"
  );

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
    <div className="py-4 pb-15 px-5">
      <div className="max-w-[1232px] mx-auto ">
        <div 
          className="mb-6"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <Breadcrumbs title1="المجالات" />
        </div>

        <div className="max-w-[1022px] mx-auto grid gap-15">
          {text_section?.map((item, index) => {
            return (
              <div 
                key={index} 
                className="flex flex-col gap-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={200 + index * 150}
              >
                <div 
                  className="h1-bold"
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay={300 + index * 150}
                >
                  {item?.data?.title}
                </div>
                <div
                  className="h4-light"
                  dangerouslySetInnerHTML={{ __html: item?.data?.text }}
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={400 + index * 150}
                />
              </div>
            );
          })}

          <div className="flex flex-col gap-6 lg:gap-30">
            {text_with_image?.map((item, index) => {
              const { title, text, image, image_position } = item?.data || {};
              return (
                <div
                  key={title}
                  className={cn("flex gap-15 flex-col items-center  ", {
                    "lg:flex-row": image_position === "right",
                    "lg:flex-row-reverse": image_position === "left",
                  })}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 200}
                >
                  <img
                    src={`${IMAGE_BASE_URL}${image}`}
                    alt="fields"
                    className="max-w-[245px] w-full"
                    data-aos={image_position === "right" ? "fade-right" : "fade-left"}
                    data-aos-duration="700"
                    data-aos-delay={index * 200 + 200}
                  />
                  <div 
                    className="flex flex-col gap-2"
                    data-aos={image_position === "right" ? "fade-left" : "fade-right"}
                    data-aos-duration="700"
                    data-aos-delay={index * 200 + 300}
                  >
                    <div 
                      className="h2-bold"
                      data-aos="fade-down"
                      data-aos-duration="600"
                      data-aos-delay={index * 200 + 400}
                    >
                      {title}
                    </div>
                    <div
                      className="h4-light mb-1"
                      dangerouslySetInnerHTML={{ __html: text }}
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 200 + 500}
                    />
                    <Link
                      to="/"
                      className="text-red underline text-lg font-bold hover:text-red-600 transition-colors duration-300"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay={index * 200 + 600}
                    >
                      طلب الخدمة
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
