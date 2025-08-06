import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpened &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpened(false);
      }
    };

    if (isMenuOpened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpened]);

  function handleMenuOpen() {
    setIsMenuOpened((menu) => !menu);
  }

  const navItems = [
    {
      label: "حكاية لبيب",
      href: "/",
    },
    {
      label: "مجالاتنا",
      href: "/",
    },
    {
      label: "مبادراتنا",
      href: "/",
    },
    {
      label: "مكتبة لبيب",
      href: "/",
    },
    {
      label: "الشروط والأحكام",
      href: "/terms",
    },
  ];

  const menuNavItems = [
    {
      label: "الرئيسية",
      href: "/",
    },
    {
      label: "حكاية لبيب",
      href: "/",
    },
    {
      label: "مساحة الإلهام",
      href: "/",
    },
    {
      label: "مكتبة لبيب",
      href: "/",
    },
    {
      label: "الخدمات",
      href: "/",
    },
    {
      label: "الشروط والأحكام",
      href: "/",
    },
    {
      label: "اتصل بنا",
      href: "/",
    },
  ];

  const location = useLocation();
  let style = "";

  if (location.pathname === "/") {
    style = isScrolled
      ? "bg-white/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-30 shadow-md"
      : "bg-white fixed top-0 left-0 right-0 z-30";
  } else {
    style = isScrolled
      ? "bg-white/70 backdrop-blur-lg sticky top-0 left-0 right-0 z-30 shadow-md"
      : "bg-white sticky top-0 left-0 right-0 z-30";
  }

  const paddingClass = isScrolled ? "py-[20px]" : "py-[20px] lg:py-[48px]";

  return (
    <>
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
            <li className="cursor-pointer" onClick={handleMenuOpen}>
              <img
                src="/menu.svg"
                alt="menu"
                className="w-[20px] h-[20px] lg:w-[35px] lg:h-[33px]"
              />
            </li>
          </ul>
        </header>
      </div>

      {/* Menu list */}
      {isMenuOpened && (
        <div className="bg-[#00000080] fixed top-0 left-0 z-50 h-[100dvh] w-[100dvw] flex justify-end">
          <div
            ref={menuRef}
            className="max-w-[300px] lg:max-w-[400px] bg-white w-full h-full py-[30px] lg:py-[64px] px-[20px] lg:px-[48px] flex flex-col gap-[48px]"
          >
            <div className="flex justify-between gap-1 items-center">
              <div className="h2-light">القائمة</div>
              <img
                src="/close.svg"
                alt="close button"
                onClick={handleMenuOpen}
                className="cursor-pointer"
              />
            </div>

            <ul className="flex flex-col gap-[16px]">
              {menuNavItems.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.href} className="h3-medium">
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
