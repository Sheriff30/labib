import React from "react";
import { Breadcrumbs } from "@/shared";
import { IMAGE_BASE_URL } from "../../../lib/constants";
export default function Hero({ data }) {
  const { image, text, title } = data?.data || {};

  return (
    <div className="bg-secondary-default relative">
      <img
        src="/hero-shape1.svg"
        alt="hero shape"
        className="absolute bottom-0 ltr:right-0"
      />

      <img
        src="/hero-shape2.svg"
        alt="hero shape"
        className="absolute left-0 ltr:right-0"
      />
      <div className=" max-w-[1232px] pb-[125px]  mx-auto flex flex-col pt-[120px] lg:pt-[180px] px-[20px]  relative z-20 gap-10 lg:gap-[108px] ">
        <div
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="100"
        >
          <Breadcrumbs link1="/" title1="مكتبة لبيب" className="text-white" />
        </div>
        <div className="flex flex-col gap-10">
          <h1
            className="display2-bold text-white text-center"
            dangerouslySetInnerHTML={{ __html: title }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          />
          <div className="flex items-center justify-center gap-[50px] flex-wrap ">
            {" "}
            <div
              className="text-white max-w-[522px] h4-medium text-center xl:text-start"
              dangerouslySetInnerHTML={{ __html: text }}
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="400"
            />
            <div 
              className="max-w-[568px] w-full"
              data-aos="fade-left"
              data-aos-duration="700" 
              data-aos-delay="400"
            >
              <img
                src={`${IMAGE_BASE_URL}${image}`}
                alt="hero image"
                className="w-full"
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
