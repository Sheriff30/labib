import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const location = useLocation();
  let style = "";

  if (location.pathname === "/") {
    style = isScrolled
      ? "bg-white/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md"
      : "bg-white fixed top-0 left-0 right-0 z-50";
  }

  const paddingClass = isScrolled ? "py-[20px]" : "py-[20px] lg:py-[48px]";

  return (
    <div
      className={`${paddingClass} px-[20px] transition-all duration-300 ease-in-out ${style}`}
    >
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
  );
}
