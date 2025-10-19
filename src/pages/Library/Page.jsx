import React from "react";
import { Hero } from "@/pages/Library/components";
import Latest from "./components/Latest";
import Banner from "./components/Banner";
import Articles from "./components/Articles";
import Studies from "./components/Studies";
import News from "./components/News";
import { usePage } from "../../hooks/content";
import EmailForm from "./components/EmailForm";

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
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <Latest data={latest} />
          </div>
          {/* banner */}
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <Banner data={image_gallery} />
          </div>
          {/*  articles */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <Articles />
          </div>
          {/*  studies and research */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <Studies />
          </div>
          {/* news */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <News data={news} />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="600"
      >
        <EmailForm />
      </div>
    </>
  );
}
