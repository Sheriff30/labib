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

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* About */}
      <About />
      {/* Partners */}
      <Partners />
      {/* Testimonials */}
      <Testimonials />
      {/* Fields */}
      <Fields />
      {/* Initiatives */}
      <Initiatives />
      {/* Form */}
      <Form />
    </>
  );
}
