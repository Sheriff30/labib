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
            <div className="grid gap-5 lg:grid-cols-2  ">
              <div className="flex flex-col gap-5">
                <div className="grid md:grid-cols-[0.5fr_1fr] gap-5 items-center h-full">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="w-full rounded-lg h-full object-cover"
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
                <div className="grid md:grid-cols-[0.5fr_1fr] gap-5 items-center h-full">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="w-full rounded-lg h-full object-cover"
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
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-5 ">
                  <img
                    src="/library.png"
                    alt="library img"
                    className=" w-full rounded-lg"
                  />
                  <div className="flex flex-col gap-2 text-center lg:text-start">
                    <p className="h4-bold xl:truncate xl:max-w-[290px]">
                      تنظيم ورش عمل وفعاليات للاطفال
                    </p>

                    <p className="caption-light">7 يوليو 2025</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5 ">
                  <img
                    src="/library.png"
                    alt="library img"
                    className=" w-full rounded-lg"
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
                <div className="grid md:grid-cols-[0.5fr_1fr] gap-5 items-center h-full">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="w-full rounded-lg h-full object-cover"
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
                <div className="grid md:grid-cols-[0.5fr_1fr] gap-5 items-center h-full">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="w-full rounded-lg h-full object-cover"
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
                </div>{" "}
                <div className="grid md:grid-cols-[0.5fr_1fr] gap-5 items-center h-full">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="w-full rounded-lg h-full object-cover"
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
          {/*  studies and research */}
          <div className="flex flex-col gap-8 ">
            <SectionHeader />
            <div className="grid lg:grid-cols-2 gap-5 ">
              <div className="flex flex-col gap-5 ">
                <div className="grid md:grid-cols-[0.5fr_1fr] gap-5 items-center h-full">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="w-full rounded-lg h-full object-cover"
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
                <div className="grid md:grid-cols-[0.5fr_1fr] gap-5 items-center h-full">
                  <img
                    src="/library.png"
                    alt="library img"
                    className="w-full rounded-lg h-full object-cover"
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
              <div className="grid grid-cols-3 gap-5 w-full">
                <img
                  src="/library.png"
                  alt="studies and research img"
                  className="w-full h-full object-cover rounded"
                />
                <img
                  src="/library.png"
                  alt="studies and research img"
                  className="w-full h-full object-cover rounded"
                />
                <img
                  src="/library.png"
                  alt="studies and research img"
                  className="w-full h-full object-cover rounded"
                />
                <img
                  src="/library.png"
                  alt="studies and research img"
                  className="w-full h-full object-cover rounded"
                />
                <img
                  src="/library.png"
                  alt="studies and research img"
                  className="w-full h-full object-cover rounded"
                />
                <img
                  src="/library.png"
                  alt="studies and research img"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
          {/* news */}
          <div className="flex flex-col gap-8 ">
            <SectionHeader />
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="flex flex-col gap-5 ">
                <img
                  src="/library.png"
                  alt="library img"
                  className=" w-full rounded-lg"
                />
                <div className="flex flex-col gap-2 text-center lg:text-start">
                  <p className="h4-bold xl:truncate xl:max-w-[290px]">
                    تنظيم ورش عمل وفعاليات للاطفال
                  </p>

                  <p className="caption-light">7 يوليو 2025</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 ">
                <img
                  src="/library.png"
                  alt="library img"
                  className=" w-full rounded-lg"
                />
                <div className="flex flex-col gap-2 text-center lg:text-start">
                  <p className="h4-bold xl:truncate xl:max-w-[290px]">
                    تنظيم ورش عمل وفعاليات للاطفال
                  </p>

                  <p className="caption-light">7 يوليو 2025</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 ">
                <img
                  src="/library.png"
                  alt="library img"
                  className=" w-full rounded-lg"
                />
                <div className="flex flex-col gap-2 text-center lg:text-start">
                  <p className="h4-bold xl:truncate xl:max-w-[290px]">
                    تنظيم ورش عمل وفعاليات للاطفال
                  </p>

                  <p className="caption-light">7 يوليو 2025</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 ">
                <img
                  src="/library.png"
                  alt="library img"
                  className=" w-full rounded-lg"
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
