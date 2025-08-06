import React from "react";

export default function About() {
  const numbers = [
    {
      number: "+300,00K",
      detail: "طفل استفادوا من التجارب التعليمية التفاعلية",
    },
    {
      number: "+23K",
      detail: "مدرسة شاركت في تقديم أو تفعيل تجارب لبيب",
    },
    {
      number: "+4K",
      detail: "تجربة تعليمية تفاعلية صُممت بعناية في مجالات متنوعة",
    },
  ];

  return (
    <div className="bg-[#FEF6EE]">
      <div className="px-[20px] py-[64px]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-center mb-[24px] h2-bold">
            أرقام تروي حكايتنا.. وتأثيرنا يكبر كل يوم
          </h2>
          <div className="flex gap-[48px] justify-center flex-wrap">
            {numbers.map((i, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-[8px] text-center xl:text-start "
                >
                  <h3 className="h3-bold-english"> {i.number}</h3>
                  <div className="titles-medium">{i.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="py-[32px] px-[20px]">
        <div className="max-w-[1440px] mx-auto flex gap-[64px] items-center justify-between flex-col lg:flex-row">
          <div className="flex flex-col">
            <div className="h1-bold mb-[8px]">لبيب</div>
            <p className="mb-[24px] h3-light">
              شركة سعودية رائدة في ابتكار وتطوير تجارب تعليمية ترفيهية وتفاعلية
              للأطفال، نعيد من خلالها تشكيل مفهوم التعلّم، عبر تجارب تجمع بين
              المعرفة، المتعة، والواقع.نصمم عوالم ملهمة تُسهم في تنمية وعي
              الطفل، وتطوير مهاراته، وغرس حب الاستكشاف في نفسه منذ الصغر.
            </p>
            <a
              href="/"
              className="bg-[#0E2C43] cursor-pointer py-[10.5px] px-[16px] flex items-center gap-[8px] w-fit rounded-[16px] cta-large text-white "
            >
              <div>الحكاية كاملة</div>
              <img src="/arrow.svg" alt="arrow" />
            </a>
          </div>
          <div className="max-w-[207px] w-full ">
            <img src="/logo.svg" alt="about labeeb image" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
