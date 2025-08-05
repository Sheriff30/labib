import React from "react";
import About from "./components/About";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";

export default function Page() {
  const navItems = [
    {
      label: "حكاية لبيب",
      href: "/",
    },
    {
      label: "المنتجات",
      href: "/products",
    },
    {
      label: "مبادراتنا",
      href: "/initiatives",
    },
    {
      label: "مكتبة لبيب",
      href: "/library",
    },
    {
      label: "الشروط والأحكام",
      href: "/terms",
    },
  ];
  return (
    <>
      {/* Header */}
      <div className="py-[20px] lg:py-[48px] px-[20px]">
        <header className="max-w-[1440px] mx-auto flex justify-between items-center">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-[70px] h-[50px] lg:w-[103px] lg:h-[64px]"
          />

          <ul className="flex gap-[40px] items-center">
            {navItems.map((link, index) => {
              return (
                <li key={index} className="cursor-pointer hidden lg:block">
                  <a href={link.href} className="body-medium">
                    {link.label}
                  </a>
                </li>
              );
            })}

            <li className="cursor-pointer">EN</li>
            <li className="cursor-pointer">
              <img
                src="/menu.svg"
                alt="menu"
                className="w-[20px] h-[20px] lg:w-[35px] lg:h-[33px]"
              />
            </li>
          </ul>
        </header>
      </div>
      {/* Hero */}
      <div className="bg-[#F06827] relative ">
        <img
          src="/hero-shape1.svg"
          alt="hero shape"
          className="absolute bottom-0 ltr:right-0"
        />

        <img
          src="/hero-shape2.svg"
          alt="hero shape"
          className="absolute left-0 ltr:right-0"
        />
        <div className=" max-w-[1440px] pb-[125px] pt-[210px] mx-auto flex flex-col justify-end items-center px-[20px] gap-[60px]">
          <h1 className="display2-bold text-white text-center">
            لبيب .. رحلة من الإلهام إلى الحياة
          </h1>
          <div className="flex items-center justify-center gap-[50px] flex-wrap ">
            {" "}
            <div className="text-white max-w-[522px] h4-medium text-center xl:text-start">
              مع كل تجربة، نزرع الإلهام في عقول الأطفال وقلوبهم، لتزهر طموحاتهم
              وتشكل ملامح المستقبل. ندمج قيم الماضي برؤية مبتكرة تبني جسورًا بين
              الأجيال، لتحوّل كل طفل إلى بطلٍ يكتب فصول النجاح والشغف.رحلتنا
              تترك أثرًا دائمًا، تُلهم الأطفال ليحلموا، يُبدعوا، ويصنعوا تغييرًا
              يترك بصمة في عالمهم.
            </div>
            <div className="max-w-[568px] w-full ">
              <img src="/hero-img.svg" alt="hero image" className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <About />
      {/* Partners */}
      <Partners />
      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
