import React from "react";

export default function Fields() {
  const fields = [
    {
      title: "الرحلات الرحلات المدرسية والتجارب التعليمية المبتكرة",
      description:
        "رحلات مصممة بعناية وبرامج تفاعلية إلى وجهات متنوعة، ثقافية، تعليمية، ترفيهية أو مهنية. تلهم الفضول وتنمّي المهارات، وتربط المعرفة بالواقع من خلال أنشطة عملية وملهمة.",
      image: "/fields1.png",
    },
    {
      title: "المعسكرات الصيفية والفعاليات لاصيفية",
      description:
        "معسكرات حضورية أو افتراضية، موسمية أو بعد ساعات العمل، تمزج بين المتعة والتعلم الهادف، وتقدم أنشطة تراعي الفئة العمرية وتثري التجربة التعليمية والاجتماعية للأطفال والشباب من الطلاب والطالبات.",
      image: "/fields2.png",
    },
    {
      title: (
        <>
          المبادرات الثقافية
          <br />
          والمجتمعية
        </>
      ),
      description:
        "تنظيم وتنفيذ مبادرات وبرامج إبداعية تعزز الهوية والانتماء، وتربط الأطفال والشباب بثقافتهم ومجتمعهم، عبر أنشطة إثرائية وتجارب ملهمة تترك أثرًا طويل المدى.",
      image: "/fields3.png",
    },
  ];
  return (
    <div className="bg-[#F9FAFB] py-[100px] px-[20px]">
      <div className="max-w-[1232px] mx-auto">
        <div className="flex gap-[24px] items-center justify-center text-center flex-col lg:flex-row lg:justify-between mb-[56px]">
          <h1 className="h1-bold">رحلة تعليمية شاملة لأجيال المستقبل</h1>
          <a className="h4-link text-[#F06827]">عرض كل المجالات</a>
        </div>
        <div className="grid grid-cols-3 gap-[16px] lg:grid-cols-3 ">
          {fields.map((field, index) => {
            return (
              <div
                key={index}
                className="flex flex-col bg-white px-[16px] py-[70px] items-center text-center xl:items-start xl:text-start shadow-[0px_4px_16px_0px_#24252E05] rounded-[8px]"
              >
                <img
                  src={field.image}
                  alt={field.title}
                  className="mb-[24px] max-w-[160px]  h-[100px]"
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
