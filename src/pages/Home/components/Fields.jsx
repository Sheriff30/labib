import React from "react";

export default function Fields() {
  const fields = [
    {
      title: "الرحلات المدرسية",
      description:
        "رحلات مدرسية تعليمية وممتعة تُنمي الفضول، وتفتح أبواب الاكتشاف وسط أجواء مليئة بالحماس والتجارب الآمنة.",
      image: "/fields1.svg",
    },
    {
      title: "المعسكرات الصيفية",
      description:
        "مخيمات تعليمية وترفيهية في أجواء آمنة تنمّي مهارات الطفل، وتُحفّز مواهبه وتدعمه ليعبّر عن نفسه بثقة.",
      image: "/fields2.svg",
    },
    {
      title: "⁠منتجات لمرحلة الطفولة",
      description:
        "نُصمم منتجات تفاعلية تُحرّك خيال الطفل، وتمزج بين التفاعل البصري والحركة والواقع الافتراضي بإبداع ذكي.",
      image: "/fields3.svg",
    },
  ];
  return (
    <div className="bg-[#F9FAFB] py-[100px] px-[20px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex gap-[24px] items-center justify-center text-center flex-col lg:flex-row lg:justify-between mb-[56px]">
          <h1 className="h1-bold">رحلة تعليمية شاملة لأجيال المستقبل</h1>
          <a className="h4-link text-[#F06827]">عرض كل المجالات</a>
        </div>
        <div className="flex gap-[16px] flex-col xl:flex-row ">
          {fields.map((field, index) => {
            return (
              <div
                key={index}
                className="flex flex-col bg-white px-[16px] py-[70px] items-center text-center xl:items-start xl:text-start shadow-[0px_4px_16px_0px_#24252E05] rounded-[8px]"
              >
                <img
                  src={field.image}
                  alt={field.title}
                  className="mb-[24px] w-[90px] h-[90px]"
                />
                <h2 className="h3-bold mb-[13px]">{field.title}</h2>
                <p className="h4-light">{field.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
