import React from "react";

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
      <div className=" max-w-[1440px] pb-[125px]  mx-auto flex flex-col pt-[200px] lg:pt-[352px] px-[20px] gap-[60px] relative z-20 ">
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
  );
}
