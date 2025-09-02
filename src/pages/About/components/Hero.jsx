import React from "react";

export default function Hero() {
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
      <div className=" max-w-[1440px] pb-[125px]  mx-auto flex flex-col pt-[200px] lg:pt-[352px] px-[20px] gap-[60px] relative z-20 ">
        <h1 className="display2-bold text-white text-center">حكاية لبيب </h1>
        <div className="flex items-center justify-center gap-[50px] flex-wrap ">
          {" "}
          <div className="text-white max-w-[522px] h4-medium text-center xl:text-start">
            في عام 2018، وُلدت فكرة “لبيب” كشرارة جريئة مليئة بالشغف، تحمل حلمًا
            لإلهام أطفال الشرق الأوسط. انطلقنا من أروقة المدارس، وامتدت أصداء
            رحلاتنا المدرسية إلى أكثر من 10,000 مدرسة، ناشرةً الفرح والإلهام.{" "}
            <br />
            ومنذ ذلك الحين، كبرت أحلامنا وتوسعت رؤيتنا، متخطيةً أسوار المدارس،
            لتفتح آفاقًا جديدة وتصبح “لبيب” للترفيه شريكًا في صياغة تجارب تُحيي
            أحلام الأطفال، وتمزج بين التعليم، الثقافة، والترفيه. واليوم، نحن لا
            نكتفي بإبداع لحظات عابرة، بل نرسم ذكريات خالدة تُلهم الأجيال بروح
            مليئة بالشغف والدهشة.
          </div>
          <div className="max-w-[568px] w-full ">
            <img src="/about-hero.svg" alt="hero image" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
