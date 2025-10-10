import React from "react";
import { Breadcrumbs } from "@/shared";

export default function Hero({ data }) {
  const { image, text, title } = data?.data || {};
  return (
    <div className="bg-yellow relative">
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
        <Breadcrumbs title1="حكاية لبيب" className="text-white" />
        <div className="flex flex-col gap-10">
          <h1
            className="display2-bold text-white text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="flex items-center justify-center gap-[50px] flex-wrap ">
            {" "}
            <div
              className="text-white max-w-[522px] h4-medium text-center xl:text-start"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className="max-w-[568px] w-full ">
              <img src={image} alt="hero image" className="w-full" />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
