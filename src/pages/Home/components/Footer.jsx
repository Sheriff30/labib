import React from "react";

export default function Footer() {
  const socialMedia = [
    {
      icon: "/whatsapp.svg",
      link: "https://wa.me/966555555555",
    },
    {
      icon: "/twitter.svg",
      link: "https://x.com/labeeb",
    },
    {
      icon: "/instagram.svg",
      link: "https://www.instagram.com/labeeb",
    },
    {
      icon: "/linkedin.svg",
      link: "https://www.linkedin.com/company/labeeb",
    },
    {
      icon: "/youtube.svg",
      link: "https://www.youtube.com/labeeb",
    },
    {
      icon: "/snapchat.svg",
      link: "https://www.snapchat.com/labeeb",
    },
    {
      icon: "/tiktok.svg",
      link: "https://www.tiktok.com/labeeb",
    },
  ];

  const footerNav = [
    {
      label: "الرئيسية",
      link: "/",
    },
    {
      label: "حكاية لبيب",
      link: "/",
    },
    {
      label: "الخدمات",
      link: "/",
    },
    {
      label: "مساحة الإلهام",
      link: "/",
    },
    {
      label: "مكتبة لبيب",
      link: "/",
    },
    {
      label: "اتصل بنا",
      link: "/",
    },
    {
      label: "الشروط والأحكام",
      link: "/",
    },
    {
      label: "الرحلات المدرسية",
      link: "/",
    },
    {
      label: " المعارض المدرسية",
      link: "/",
    },
    {
      label: " الانشطة المدرسية",
      link: "/",
    },
    {
      label: "معسكرات صيفية",
      link: "/",
    },
    {
      label: "منتجات مرحلة الطفولة",
      link: "/",
    },
  ];

  return (
    <footer className=" bg-[url('/footer.png')] bg-cover bg-center  px-[20px]">
      <div className="pt-[56px] pb-[32px]">
        <div className="max-w-[1000px] mx-auto grid gap-[24px]">
          <div className="flex gap-[12px] justify-center">
            {socialMedia.map((i) => {
              return (
                <a
                  href={i.link}
                  key={i.icon}
                  className="w-[32px] h-[32px] bg-[#C9D1D7] rounded-[8px] flex items-center justify-center"
                >
                  <img src={i.icon} alt={i.icon} />
                </a>
              );
            })}
          </div>
          <div className="flex gap-[16px] max-w-[650px] text-center w-full mx-auto justify-center flex-wrap">
            {footerNav.map((i) => {
              return (
                <a
                  href={i.link}
                  key={i.label}
                  className="caption-medium text-white"
                >
                  {i.label}
                </a>
              );
            })}
          </div>
          <div className="flex justify-center gap-[20px] lg:gap-[40px] flex-wrap">
            <div className="caption-medium-english text-white flex items-center gap-[6.5px]">
              <img src="/mail.svg" alt="mail" />
              <a href="mailto:Be@Labeb.sa">Be@Labeb.sa</a>
            </div>
            <div className="caption-medium-english text-white flex items-center gap-[6.5px]">
              <img src="/phone.svg" alt="phone" />
              <a href="tel:+966550000000">+966550000000</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
