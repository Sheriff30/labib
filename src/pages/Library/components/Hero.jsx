import React from "react";
import { Breadcrumbs } from "@/shared";
export default function Hero() {
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
        <Breadcrumbs link1="/" title1="مكتبة لبيب" className="text-white" />
        <div className="flex flex-col gap-10">
          <h1 className="display2-bold text-white text-center">مكتبة لبيب </h1>
          <div className="flex items-center justify-center gap-[50px] flex-wrap ">
            {" "}
            <div className="text-white max-w-[522px] h4-medium text-center xl:text-start ">
              مكتبة لبيب منصة متخصصة تهدف إلى نشر الأخبار، المقالات، والدراسات
              التي تعزز فهم نمو الطفل ودعمه في مختلف مراحل حياته. نسعى لأن نكون
              مرجعًا موثوقًا لكل من يشارك في رحلة الطفل التعليمية والتربوية، من
              أسر ومربين وشركاء، من خلال محتوى يثري المعرفة ويحفّز على التنمية
              المستدامة.
            </div>
            <div className="max-w-[421px] w-full ">
              <img src="/library.svg" alt="hero image" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
