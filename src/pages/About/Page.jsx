import React, { Fragment } from "react";
import { Hero } from "@/pages/About/components";
import { Partners } from "@/shared";
import { usePage } from "../../hooks/content";
import { cn } from "../../lib/utils";

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
  const { data: about, isLoading } = usePage("about");

  const hero = about?.content?.filter(
    (section) => section.type === "hero"
  )?.[0];
  const text_section = about?.content?.filter(
    (section) => section.type === "text_section"
  )?.[0];
  const text_with_image = about?.content?.filter(
    (section) => section.type === "text_with_image"
  );

  console.log(text_with_image);

  if (isLoading) {
    return (
      <div className="py-4 px-5 h-200 flex justify-center items-center bg-yellow">
        <div className="max-w-[1232px] mx-auto text-center">
          جاري التحميل...
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero data={hero} />
      <div className="px-5 py-8">
        <div className="max-w-[1232px] mx-auto">
          <h2 className="h1-bold mb-2">{text_section?.data?.title} </h2>
          <p
            className="h3-light"
            dangerouslySetInnerHTML={{ __html: text_section?.data?.text }}
          />
        </div>{" "}
      </div>
      <div className="px-5 py-8 lg:py-30">
        <div className="max-w-[1232px] mx-auto flex flex-col gap-10 lg:gap-30 ">
          {text_with_image?.map((item) => {
            const { title, text, image, image_position } = item?.data || {};
            return (
              <Fragment key={title}>
                <div
                  className={cn("flex gap-12.5 items-center flex-col  ", {
                    "lg:flex-row": image_position === "right",
                    "lg:flex-row-reverse": image_position === "left",
                  })}
                >
                  <img
                    src={image}
                    alt="about shape"
                    className="w-full max-w-[408px]"
                  />
                  <div>
                    <h2 className="h1-bold mb-2">{title}</h2>
                    <div
                      className="h4-light values"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  </div>{" "}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <Partners />
    </>
  );
}
