import React from "react";
import About from "./components/About";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Fields from "./components/Fields";
import Initiatives from "./components/Initiatives";
import Form from "./components/Form";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      {/* Header */}
      <Header />
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
      {/* Register */}
      <Register />
      {/* Footer */}
      <Footer />
    </>
  );
}
