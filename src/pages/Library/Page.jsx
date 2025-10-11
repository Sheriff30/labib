import React from "react";
import { Hero } from "@/pages/Library/components";
import Latest from "./components/Latest";
import Banner from "./components/Banner";
import Articles from "./components/Articles";
import Studies from "./components/Studies";
import News from "./components/News";
import { usePage } from "../../hooks/content";

export default function Page() {
  const { data, isLoading } = usePage("library");

  const latest = data?.content?.filter(
    (section) => section.data.model === "articles"
  )?.[0];
  const news = data?.content?.filter(
    (section) => section.data.model === "news"
  )?.[0];
  const hero = data?.content?.filter((section) => section.type === "hero")?.[0];
  const image_gallery = data?.content?.filter(
    (section) => section.type === "image_gallery"
  )?.[0];

  if (isLoading) {
    return (
      <div className="py-4 px-5 h-200 flex justify-center items-center bg-secondary-default">
        <div className="max-w-[1232px] mx-auto text-center">
          جاري التحميل...
        </div>
      </div>
    );
  }
  return (
    <>
      <Hero data={hero} />
      <div className="py-20 px-5">
        <div className="max-w-[1232px] mx-auto grid gap-10">
          {/* library */}
          <Latest data={latest} />
          {/* banner */}
          <Banner data={image_gallery} />
          {/*  articles */}
          <Articles />
          {/*  studies and research */}
          <Studies />
          {/* news */}
          <News data={news} />
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
