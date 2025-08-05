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
      <div className="py-[48px]">
        <header className="max-w-[1440px] mx-auto flex justify-between items-center">
          <img src="/logo.svg" alt="logo" className="w-[103px] h-[64px]" />

          <ul className="flex gap-[40px] items-center">
            {navItems.map((link) => {
              return (
                <li key={link.href} className="cursor-pointer">
                  <a href={link.href} className="body-medium">
                    {link.label}
                  </a>
                </li>
              );
            })}

            <li className="cursor-pointer">EN</li>
            <li className="cursor-pointer">
              <img src="/menu.svg" alt="menu" className="w-[35px] h-[33px]" />
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}
