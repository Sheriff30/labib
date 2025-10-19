import React from "react";

import {
  About,
  Testimonials,
  Hero,
  Fields,
  Initiatives,
  Form,
} from "@/pages/Home/components";
import { Partners } from "@/shared";
import { usePage } from "../../hooks/content";

export default function Page() {
  const { data: home, isLoading } = usePage("home");

  if (isLoading) {
    return (
      <div className="py-4 px-5 h-200 flex justify-center items-center bg-orange">
        <div className="max-w-[1232px] mx-auto text-center">
          جاري التحميل...
        </div>
      </div>
    );
  }
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* About */}
      <div data-aos="fade-up" data-aos-duration="800">
        <About data={home} />
      </div>
      {/* Partners */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <Partners />
      </div>
      {/* Fields */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <Fields />
      </div>
      {/* Initiatives */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        <Initiatives />
      </div>
      {/* Form */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <Form />
      </div>
    </>
  );
}
