import React from "react";

export default function Home() {
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
            {navItems.map((link) => {
              return (
                <li key={link.href} className="cursor-pointer hidden lg:block">
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
      <div className="bg-[#F06827] relative">
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
        <div className="h-[750px] max-w-[1440px] mx-auto"></div>
      </div>
    </>
  );
}
