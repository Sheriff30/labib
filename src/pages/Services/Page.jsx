import React from "react";
import { NewsCard } from "@/shared";
import { Breadcrumbs } from "@/shared";
import { Link } from "react-router-dom";

export default function Page() {
  return (
    <div className="py-4 pb-15 px-5">
      <div className="max-w-[1232px] mx-auto ">
        <div className="mb-6">
          <Breadcrumbs link1="/services" title1="الخدمات" />
        </div>

        <div className="max-w-[1022px] mx-auto grid gap-15">
          <div className="flex flex-col gap-4">
            <div className="h1-bold">مجالاتنا</div>
            <div className="h4-light">
              نقدّم في "لبيب" مجموعة متكاملة من الخدمات التعليمية التفاعلية
              المصمّمة لتوسيع مدارك الطفل وتعزيز ارتباطه بالمجتمع، من خلال تجارب
              حقيقية وتعاونات مؤسسية هادفة، تشمل:
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-30">
            {/* service 1 */}
            <div className="flex gap-15 flex-col items-center lg:flex-row">
              <img
                src="/service1.svg"
                alt="fields"
                className="max-w-[245px] w-full"
              />
              <div className="flex flex-col gap-2">
                <div className="h2-bold">
                  الرحلات المدرسية والتجارب التعليمية المبتكرة
                </div>
                <div className="h4-light mb-1">
                  رحلات مصممة بعناية وبرامج تفاعلية إلى وجهات متنوعة، ثقافية،
                  تعليمية، ترفيهية أو مهنية. تلهم الفضول وتنمّي المهارات، وتربط
                  المعرفة بالواقع من خلال أنشطة عملية وملهمة.
                </div>
                <Link to="/" className="text-red underline text-lg font-bold">
                  طلب الخدمة
                </Link>{" "}
              </div>
            </div>
            {/* service 2 */}
            <div className="flex gap-15 flex-col items-center lg:flex-row-reverse">
              <img
                src="/service2.svg"
                alt="fields"
                className="max-w-[245px] w-full"
              />
              <div className="flex flex-col gap-2">
                <div className="h2-bold">
                  المعسكرات الصيفية والفعاليات لاصيفية{" "}
                </div>
                <div className="h4-light mb-1">
                  معسكرات حضورية أو افتراضية، موسمية أو بعد ساعات العمل، تمزج
                  بين المتعة والتعلم الهادف، وتقدم أنشطة تراعي الفئة العمرية
                  وتثري التجربة التعليمية والاجتماعية للأطفال والشباب من الطلاب
                  والطالبات.
                </div>
                <Link to="/" className="text-red underline text-lg font-bold">
                  طلب الخدمة
                </Link>{" "}
              </div>
            </div>
            {/* service 3 */}
            <div className="flex gap-15 flex-col items-center lg:flex-row">
              <img
                src="/service3.svg"
                alt="fields"
                className="max-w-[245px] w-full"
              />
              <div className="flex flex-col gap-2">
                <div className="h2-bold">المبادرات القيمية </div>
                <div className="h4-light mb-1">
                  تنظيم وتنفيذ مبادرات وبرامج إبداعية تعزز الهوية والانتماء،
                  وتربط الأطفال والشباب بثقافتهم ومجتمعهم، عبر أنشطة إثرائية
                  وتجارب ملهمة تترك أثرًا طويل المدى.
                </div>
                <Link to="/" className="text-red underline text-lg font-bold">
                  طلب الخدمة
                </Link>{" "}
              </div>
            </div>
            {/* service 4 */}
            <div className="flex gap-15 flex-col items-center lg:flex-row-reverse">
              <img
                src="/service4.svg"
                alt="fields"
                className="max-w-[245px] w-full"
              />
              <div className="flex flex-col gap-2">
                <div className="h2-bold">
                  الحلول التسويقية للبرامج و الفعاليات{" "}
                </div>
                <div className="h4-light mb-1">
                  حملات استراتيجية للقطاعين العام والخاص، تهدف إلى الترويج
                  للبرامج والفعاليات التعليمية والترفيهية الموجهة للمدارس
                  والجهات التعليمية أو للأطفال وأسرهم، بأسلوب يصل مباشرة إلى
                  الفئة المستهدفة ويحفّز المشاركة والتفاعل.
                </div>
                <Link to="/" className="text-red underline text-lg font-bold">
                  طلب الخدمة
                </Link>{" "}
              </div>
            </div>
            {/* service 5 */}
            <div className="flex gap-15 flex-col items-center lg:flex-row">
              <img
                src="/service5.svg"
                alt="fields"
                className="max-w-[245px] w-full"
              />
              <div className="flex flex-col gap-2">
                <div className="h2-bold">
                  الحلول الاستشارية في تصميم وتنفيذ المبادرات{" "}
                </div>
                <div className="h4-light mb-1">
                  خدمات واستشارات متخصصة لدعم وتمكين المؤسسات والجهات التعليمية
                  والمنظمات في ابتكار وتنفيذ مبادرات وتجارب تتمحور حول الطفل،
                  بأهداف واضحة وأثر فعلي ملموس يمتد على المدى الطويل، بما يضمن
                  استدامة الفائدة وتعزيز النتائج الإيجابية.
                </div>
                <Link to="/" className="text-red underline text-lg font-bold">
                  طلب الخدمة
                </Link>{" "}
              </div>
            </div>
            {/* service 6 */}
            <div className="flex gap-15 flex-col items-center lg:flex-row-reverse">
              <img
                src="/service6.svg"
                alt="fields"
                className="max-w-[245px] w-full"
              />
              <div className="flex flex-col gap-2">
                <div className="h2-bold">
                  المنتجات الإبداعية لمرحلة الطفولة{" "}
                </div>
                <div className="h4-light mb-1">
                  معسكرات حضورية أو افتراضية، موسمية أو بعد ساعات العمل، تمزج
                  بين المتعة والتعلم الهادف، وتقدم أنشطة تراعي الفئة العمرية
                  وتثري التجربة التعليمية والاجتماعية للأطفال والشباب من الطلاب
                  والطالبات.
                </div>
                <Link to="/" className="text-red underline text-lg font-bold">
                  طلب الخدمة
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
