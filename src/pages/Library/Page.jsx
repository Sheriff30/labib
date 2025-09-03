import React from "react";
import { Hero, SectionHeader } from "@/pages/Library/components";

export default function Page() {
  return (
    <>
      <Hero />
      <div className="py-20 px-5">
        <div className="max-w-[1440px] mx-auto grid gap-10">
          {/* library */}
          <div className="flex flex-col gap-8 ">
            <SectionHeader />
            <div className="flex gap-5 flex-col lg:flex-row">
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center flex-col md:flex-row">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="md:max-w-[185px] w-full rounded-lg"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="h4-bold xl:truncate max-w-[290px]">
                      تنظيم ورش عمل وفعاليات للاطفال
                    </p>
                    <p className=" body-light text-primary-default">
                      في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة
                      والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة
                      فريدة
                    </p>
                    <p className="caption-light">7 يوليو 2025</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center flex-col md:flex-row">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="md:max-w-[185px] w-full rounded-lg"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="h4-bold xl:truncate max-w-[290px]">
                      تنظيم ورش عمل وفعاليات للاطفال
                    </p>
                    <p className=" body-light text-primary-default">
                      في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة
                      والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة
                      فريدة
                    </p>
                    <p className="caption-light">7 يوليو 2025</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 items-center">
                <img
                  src="/library.png"
                  alt="library img"
                  className="md:max-w-[290px] w-full rounded-lg"
                />
                <div className="flex flex-col gap-2 text-center lg:text-start">
                  <p className="h4-bold xl:truncate xl:max-w-[290px]">
                    تنظيم ورش عمل وفعاليات للاطفال
                  </p>

                  <p className="caption-light">7 يوليو 2025</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center">
                <img
                  src="/library.png"
                  alt="library img"
                  className="md:max-w-[290px] w-full rounded-lg"
                />
                <div className="flex flex-col gap-2 text-center lg:text-start">
                  <p className="h4-bold xl:truncate xl:max-w-[290px]">
                    تنظيم ورش عمل وفعاليات للاطفال
                  </p>

                  <p className="caption-light">7 يوليو 2025</p>
                </div>
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
            <SectionHeader />
            <div className="flex gap-6 flex-col lg:flex-row">
              <div className="rounded-lg overflow-hidden w-full lg:max-w-[500px]">
                <img
                  src="/library.png"
                  alt="articles img"
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5 items-center flex-col md:flex-row">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="md:max-w-[185px] w-full rounded-lg"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="h4-bold xl:truncate max-w-[290px]">
                      تنظيم ورش عمل وفعاليات للاطفال
                    </p>
                    <p className=" body-light text-primary-default">
                      في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة
                      والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة
                      فريدة
                    </p>
                    <p className="caption-light">7 يوليو 2025</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center flex-col md:flex-row">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="md:max-w-[185px] w-full rounded-lg"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="h4-bold xl:truncate max-w-[290px]">
                      تنظيم ورش عمل وفعاليات للاطفال
                    </p>
                    <p className=" body-light text-primary-default">
                      في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة
                      والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة
                      فريدة
                    </p>
                    <p className="caption-light">7 يوليو 2025</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center flex-col md:flex-row">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="md:max-w-[185px] w-full rounded-lg"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="h4-bold xl:truncate max-w-[290px]">
                      تنظيم ورش عمل وفعاليات للاطفال
                    </p>
                    <p className=" body-light text-primary-default">
                      في مكتبة لبيب، تبدأ حكايات الطفل بالحب وتنمو مع المعرفة
                      والإلهام. هنا، تُنسج النصائح والدراسات والمقالات في رحلة
                      فريدة
                    </p>
                    <p className="caption-light">7 يوليو 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
