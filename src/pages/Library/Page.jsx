import React from "react";
import { Hero, SectionHeader } from "@/pages/Library/components";
import { NewsCard } from "@/shared";

export default function Page() {
  return (
    <>
      <Hero />
      <div className="py-20 px-5">
        <div className="max-w-[1232px] mx-auto grid gap-10">
          {/* library */}
          <div className="flex flex-col gap-8 ">
            <SectionHeader src="/latest.svg" title="الأحدث" link="/latest" />
            <div className="grid gap-5 lg:grid-cols-2  ">
              <div className="flex flex-col gap-5">
                <NewsCard
                  title="تنظيم ورش عمل وفعاليات للاطفال"
                  description="في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة فريدة"
                  date="7 يوليو 2025"
                  src="/post3.png"
                  className="max-h-[200px] lg:max-h-[140px]"
                />
                <NewsCard
                  title="إقامة زيارات مدرسية توعوية تثقيفية"
                  description="في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة فريدة"
                  date="7 يوليو 2025"
                  src="/post2.png"
                  className="max-h-[200px] lg:max-h-[140px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <NewsCard
                  variant="compact"
                  title="التسويق لمهرجان ثقافة الطفل"
                  date="7 يوليو 2025"
                  src="/post2.png"
                  className="max-h-[200px] lg:max-h-[216px]"
                />
                <NewsCard
                  variant="compact"
                  title="إقامة زيارات مدرسية توعوية تثقيفية"
                  date="7 يوليو 2025"
                  src="/post1.png"
                  className="max-h-[200px] lg:max-h-[216px]"
                />
              </div>
            </div>
          </div>
          {/* banner */}
          <div className="bg-red py-15 flex justify-center items-center text-white bg-gradient-red rounded-lg ">
            <div className="text-5xl md:text-9xl font-roboto font-bold">
              Banner
            </div>
          </div>
          {/*  articles */}
          <div className="flex flex-col gap-8 ">
            <SectionHeader
              src="/articles.svg"
              title="المقالات"
              link="/articles"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg overflow-hidden w-full  relative">
                <img
                  src="/library.png"
                  alt="articles img"
                  className="h-full w-full object-cover "
                />
                <div className="absolute top-0 left-0 w-full h-full  bg-gradient-navy p-8 flex flex-col gap-2 text-white justify-end">
                  <p className="h4-bold">إقامة زيارات مدرسية توعوية تثقيفية</p>
                  <p className="body-light">
                    في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة
                    والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة
                    فريدة
                  </p>
                  <p className="caption-light">7 يوليو 2025</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <NewsCard
                  title="التسويق لمهرجان ثقافة الطفل"
                  description="في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة فريدة"
                  date="7 يوليو 2025"
                  src="/post1.png"
                  className="max-h-[200px] lg:max-h-[140px]"
                />
                <NewsCard
                  variant="detailed"
                  title="تنظيم ورش عمل وفعاليات للاطفال"
                  description="في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة فريدة"
                  date="7 يوليو 2025"
                  src="/post3.png"
                  className="max-h-[200px] lg:max-h-[140px]"
                />
                <NewsCard
                  variant="detailed"
                  title="إقامة زيارات مدرسية توعوية تثقيفية"
                  description="في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة فريدة"
                  date="7 يوليو 2025"
                  src="/post2.png"
                  className="max-h-[200px] lg:max-h-[140px]"
                />
              </div>
            </div>
          </div>
          {/*  studies and research */}
          <div className="flex flex-col gap-8 ">
            <SectionHeader
              src="/studies.svg"
              title="الدراسات والأبحاث"
              link="/studies"
            />
            <div className="grid lg:grid-cols-2 gap-5 ">
              <div className="flex flex-col gap-5 ">
                <NewsCard
                  variant="detailed"
                  title="تنظيم ورش عمل وفعاليات للاطفال"
                  description="في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة فريدة"
                  date="7 يوليو 2025"
                  src="/post3.png"
                  className="max-h-[200px] lg:max-h-[140px]"
                />
                <NewsCard
                  variant="detailed"
                  title="إقامة زيارات مدرسية توعوية تثقيفية"
                  description="في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة فريدة"
                  date="7 يوليو 2025"
                  src="/post2.png"
                  className="max-h-[200px] lg:max-h-[140px]"
                />
              </div>
              <div className="grid grid-cols-3 gap-2.5 lg:gap-5 w-full">
                <img
                  src="/post3.png"
                  alt="studies and research img"
                  className="w-full max-h-[140px] object-cover rounded"
                />
                <img
                  src="/post3.png"
                  alt="studies and research img"
                  className="w-full max-h-[140px] object-cover rounded"
                />
                <img
                  src="/post3.png"
                  alt="studies and research img"
                  className="w-full max-h-[140px] object-cover rounded"
                />
                <img
                  src="/post3.png"
                  alt="studies and research img"
                  className="w-full max-h-[140px] object-cover rounded"
                />
                <img
                  src="/post3.png"
                  alt="studies and research img"
                  className="w-full max-h-[140px] object-cover rounded"
                />
                <img
                  src="/post3.png"
                  alt="studies and research img"
                  className="w-full max-h-[140px] object-cover rounded"
                />
              </div>
            </div>
          </div>
          {/* news */}
          <div className="flex flex-col gap-8 ">
            <SectionHeader src="/news.svg" title="الأخبار" link="/news" />
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <NewsCard
                variant="compact"
                title="إقامة زيارات مدرسية توعوية تثقيفية"
                date="7 يوليو 2025"
                src="/post1.png"
                className="max-h-[200px] lg:max-h-[290px]"
              />
              <NewsCard
                variant="compact"
                title="التسويق لمهرجان ثقافة الطفل"
                date="7 يوليو 2025"
                src="/post2.png"
                className="max-h-[200px] lg:max-h-[290px]"
              />
              <NewsCard
                variant="compact"
                title="إقامة زيارات مدرسية توعوية تثقيفية"
                date="7 يوليو 2025"
                src="/post3.png"
                className="max-h-[200px] lg:max-h-[290px]"
              />
              <NewsCard
                variant="compact"
                title="التسويق لمهرجان ثقافة الطفل"
                date="7 يوليو 2025"
                src="/post2.png"
                className="max-h-[200px] lg:max-h-[290px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-8 bg-default">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-3">
          <p className="text-xl">
            لأنك تهتم برفاه ونمو الطفل،انضم الآن إلى نشرتنا واحصل على أحدث
            المقالات والدراسات والتجارب التي تُلهمك وتمكنك من تحقيق تأثير حقيقي
            ومستدام.
          </p>
          <form action="" className="grid grid-cols-[1fr_75px] gap-1.5">
            <input
              type="text"
              placeholder="ادخل بريدك الالكتروني"
              className="bg-white py-[10px] px-[12.5px] rounded-md border border-offwhite"
            />
            <button
              type="submit"
              className="bg-black text-white  font-bold rounded-3xl"
            >
              اشترك
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
