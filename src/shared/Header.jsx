import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo, Menu } from "@/shared";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If already on home page, just scroll to contact
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home with hash
      navigate("/#contact");
    }
  };

  const handleNavContactClick = (e) => {
    e.preventDefault();
    console.log("Nav contact clicked");
    handleContactClick(e);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#contact") {
      // Add a delay to ensure the page is fully rendered
      const scrollToContact = () => {
        const contactElement = document.getElementById("contact");
        if (contactElement) {
          // Scroll to the element with some offset to ensure it's visible
          const elementPosition = contactElement.offsetTop;
          const offsetPosition = elementPosition - 100; // 100px offset from top

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        } else {
          // If element not found, retry after a short delay
          setTimeout(scrollToContact, 100);
        }
      };

      // Wait for the page to be fully loaded
      setTimeout(scrollToContact, 500);
    }
  }, [location]);

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
      href: "/about",
    },
    {
      label: "مجالاتنا",
      href: "/fields",
    },
    {
      label: "مبادراتنا",
      href: "/inspiration",
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

  const menuNavItems = [
    {
      label: "الرئيسية",
      href: "/",
    },
    {
      label: "حكاية لبيب",
      href: "/about",
    },
    {
      label: "مساحة الإلهام",
      href: "/inspiration",
    },
    {
      label: "مكتبة لبيب",
      href: "/library",
    },
    {
      label: "الخدمات",
      href: "/fields",
    },
    {
      label: "الشروط والأحكام",
      href: "/terms",
    },
    {
      label: "اتصل بنا",
      href: "/#contact",
    },
  ];

  let style = "";

  if (
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/library"
  ) {
    style = isScrolled
      ? "bg-white/70 backdrop-blur-lg fixed top-0 left-0 right-0 z-30 shadow-md"
      : "text-white fixed top-0 left-0 right-0 z-30";
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
        <header className="max-w-[1232px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-[83px]">
            <Link to="/">
              <Logo className="w-[70px] h-[50px] lg:w-[103px] lg:h-[64px]" />
            </Link>

            <a
              href="/#contact"
              onClick={handleContactClick}
              className="cta-large bg-black text-white py-1 px-[46px] rounded-[16px] outline-none border-none hidden lg:block"
            >
              سجّل اهتمامك{" "}
            </a>
          </div>
          <ul className="flex gap-[40px] items-center">
            {navItems.map((link, index) => {
              return (
                <li key={index} className="cursor-pointer hidden lg:block">
                  <a
                    href={link.href}
                    onClick={
                      link.label === "اتصل بنا"
                        ? handleNavContactClick
                        : undefined
                    }
                    className="body-medium"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}

            <li className="cursor-pointer" onClick={handleMenuOpen}>
              <Menu className="w-[20px] h-[20px] lg:w-[35px] lg:h-[33px]" />
            </li>
          </ul>
        </header>
      </div>

      {/* Menu list */}
      <div
        className={`bg-[#00000080]  ease-in-out fixed top-0 left-0 z-50 h-[100dvh] w-[100dvw] flex justify-end transition-opacity duration-300 ${
          isMenuOpened
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={menuRef}
          className={`max-w-[300px] lg:max-w-[400px] bg-white w-full h-full py-[30px] lg:py-[64px] px-[20px] lg:px-[48px] flex flex-col gap-[48px] transform transition-transform duration-300 ease-in-out ${
            isMenuOpened ? "translate-x-0" : "-translate-x-full"
          }`}
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

          <a
            href="/#contact"
            onClick={handleContactClick}
            className="cta-large bg-black text-white text-center py-1 px-[46px] rounded-[16px] outline-none border-none block lg:hidden"
          >
            سجّل اهتمامك{" "}
          </a>
        </div>
      </div>
    </>
  );
}
