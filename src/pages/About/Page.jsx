import React, { useState } from "react";
import { Hero } from "@/pages/About/components";
import { Partners } from "@/shared";

const VALUES = [
  {
    title: "الطفل أولًا",
    description:
      "نؤمن بأن الطفل هو جوهر العملية التعليمية، لذا نُصمم كل تجربة بناءً على احتياجاته العمرية والمعرفية، لنوفر له بيئة تعلم آمنة، محفزة، وملهمة، تُراعي اختلاف قدراته وتُعزز ثقته بنفسه منذ المراحل الأولى.",
  },
  {
    title: "المتعة بالتعلّم",
    description:
      "نعتبر المتعة مدخلًا أساسيًا للتعلّم الفعّال، لذا ندمج اللعب والتفاعل في كل تجربة، لصناعة ارتباط إيجابي ومستدام بين الطفل والمعرفة.",
  },
  {
    title: "تجارب تصنع أثرًا",
    description:
      "نحرص على تقديم تجارب تفاعلية تحمل معنى وقيمة حقيقية، تُثري حياة الأطفال وتترك أثرًا ممتدًا في تفكيرهم وسلوكهم ومهاراتهم.",
  },
  {
    title: "الابتكار",
    description:
      "نبتكر بخيال واسع ونحوّل الأفكار إلى تجارب تعليمية ترفيهية واقعية، تواكب احتياجات الطفل، وتفتح أمامه مسارات جديدة للتعلّم تُعزز جاهزيته للمستقبل.",
  },
  {
    title: "الشراكة المجتمعية",
    description:
      "نُؤمن أن التعليم مسؤولية جماعية، ونبني شراكات استراتيجية مع المدارس، والجهات الحكومية، والمجتمعية، لصناعة تجارب تعليمية مؤثرة ومستدامة.",
  },
  {
    title: "تمكين الطفل",
    description:
      "نُصمم تجارب تفاعلية تجعل الطفل مشاركًا في التعلّم، وتُنمّي لديه روح الاستكشاف، ومهارات التفكير والتعبير والابتكار، ليكون فاعلًا في مجتمعه ومستقبله.",
  },
];
export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const fullText = "كيف نصنع تجربة تجعل الطفل يُقبل على المعرفة كما يُقبل على اللعب؟ هذا السؤال قادنا إلى تصميم تجارب تعليمية تفاعلية تجمع بين المتعة والتعلّم، تجعل الطفل يستكشف ويتعلم ويكتشف قدراته في بيئة آمنة ومحفزة. نحن نؤمن أن التعليم الحقيقي يحدث عندما يشارك الطفل بفعالية في تجربة التعلّم، وليس مجرد متلقٍ سلبي للمعلومات.";
  
  const shortText = "كيف نصنع تجربة تجعل الطفل يُقبل على المعرفة كما يُقبل على";

  return (
    <>
      <Hero />
      <div className="px-5 py-8">
        <div className="max-w-[1232px] mx-auto">
          <h2 className="h1-bold mb-2">لبيب</h2>
          <p className="h3-light">
            شركة سعودية رائدة في ابتكار وتطوير تجارب تعليمية ترفيهية وتفاعلية
            للأطفال، نعيد من خلالها تشكيل مفهوم التعلّم عبر تجارب تجمع بين
            المعرفة، المتعة، والواقع.
          </p>
          <p className="mb-10 h3-light">
            نصمم عوالم ملهمة تُسهم في تنمية وعي الطفل، تطوير مهاراته، وغرس حب
            الاستكشاف في نفسه منذ الصغر.
          </p>
          <p className="h3-light">بدأت فكرة "لبيب" بسؤال جوهري:</p>
          <p className="h3-light">
            {showMore ? fullText : shortText}
            {!showMore && "..."}
            {" "}
            <button 
              onClick={() => setShowMore(!showMore)}
              className="underline text-blue cursor-pointer bg-transparent border-none p-0 font-inherit"
            >
              {showMore ? "أقل" : "المزيد"}
            </button>
          </p>
        </div>{" "}
      </div>
      <div className="px-5 py-8 lg:py-30">
        <div className="max-w-[1232px] mx-auto flex flex-col gap-10 lg:gap-30 ">
          <div className="flex gap-12.5 items-center flex-col lg:flex-row">
            <img
              src="/vission.svg"
              alt="about shape"
              className="w-full max-w-[408px]"
            />
            <div>
              <h2 className="h1-bold mb-2">رؤيتنا</h2>
              <div className="h4-bold">
                أن نكون نموذجًا وطنيًا رائدًا يعيد رسم تجربة الطفولة مع المعرفة،
                من خلال تصميم محتوى تعليمي تفاعلي يجعل الطفل أقرب إلى الواقع،
                وأكثر وعيًا بذاته ومجتمعه.
              </div>
              <div className="h4-light">
                نسعى إلى إلهام المدارس والجهات الحكومية والمجتمعية لإشراك الطفل
                في رحلته نحو النمو والاكتشاف، ضمن بيئات تربط التعلّم بالحياة،
                وتُسهم في بناء جودة حياة ترتقي بتجربة الطفل، وتنسجم مع تطلعات
                رؤية السعودية 2030.
              </div>
            </div>{" "}
          </div>
          <div className="flex gap-12.5 items-center flex-col-reverse lg:flex-row">
            <div>
              <h2 className="h1-bold mb-2">رسالتنا</h2>
              <div className="h3-medium">
                نلتزم بتصميم محتوى تعليمي تفاعلي يُقدَّم للأطفال من خلال أنشطة
                واقعية وممتعة مثل الرحلات، المخيمات، والبرامج المتخصصة، ليكون
                التعلّم تجربة حيّة وملهمة.
              </div>
              <div className="h3-light">
                نؤمن أن الطفل يتعلم أكثر عندما يشارك، ويستكشف، ويتفاعل، ولهذا
                (نصمّم تجاربنا بالشراكة مع المدارس، والجهات الحكومية والمجتمعية،
                لمنح الطفل مساحة يشارك فيها، ويكتشف قدراته، وينمّي مهاراته بثقة.
                هدفنا أن نكون جزءًا من رحلة المملكة في تنمية الإنسان، وتحسين
                جودة حياة الطفل.)
              </div>
            </div>{" "}
            <img
              src="/message.svg"
              alt="about shape"
              className="w-full max-w-[408px]"
            />
          </div>
          <div className="flex gap-12.5 items-center flex-col lg:flex-row">
            <img
              src="/values.svg"
              alt="about shape"
              className="w-full max-w-[408px]"
            />
            <div className="flex flex-col gap-2">
              <h2 className="h1-bold mb-2">قيمنا</h2>
              <div className="flex flex-col gap-2">
                {VALUES.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-1 p-2 border border-primary-default/25 shadow-xs rounded-lg"
                  >
                    <p>{item.title}</p>
                    <p className="text-secondary-default body-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <Partners />
    </>
  );
}
