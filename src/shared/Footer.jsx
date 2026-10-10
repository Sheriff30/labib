import React from "react";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();
  const socialMedia = [
    {
      icon: "/tiktok.svg",
      link: "https://www.tiktok.com/@mylabeeb?_t=ZS-8ypOJ56Kq1c&_r=1",
    },
    {
      icon: "/snapchat.svg",
      link: "https://www.snapchat.com/mylabeeb",
    },
    {
      icon: "/youtube.svg",
      link: "https://www.youtube.com/@mylabeeb",
    },
    {
      icon: "/linkedin.svg",
      link: "https://www.linkedin.com/company/mylabeeb/",
    },
    {
      icon: "/instagram.svg",
      link: "https://www.instagram.com/mylabeeb?igsh=MXV5ZWRtcjZncjV2bg%3D%3D&utm_source=qr",
    },
    {
      icon: "/twitter.svg",
      link: "https://x.com/mylabeeb?s=21",
    },
    {
      icon: "/whatsapp.svg",
      link: "https://wa.me/966556838484",
    },
  ];

  const footerNav = [
    {
      label: t("الرئيسية"),
      link: "/",
    },
    {
      label: t("حكاية لبيب"),
      link: "/about",
    },
    {
      label: t("الخدمات"),
      link: "/fields",
    },
    {
      label: t("مساحة الإلهام"),
      link: "/inspiration",
    },
    {
      label: t("مكتبة لبيب"),
      link: "/library",
    },
    {
      label: t("اتصل بنا"),
      link: "/#contact",
    },
    {
      label: t("الشروط والأحكام"),
      link: "/terms",
    },
    {
      label: t("الرحلات المدرسية"),
      link: "/inspiration",
    },
    {
      label: t(" المعارض المدرسية"),
      link: "/inspiration",
    },
    {
      label: t(" الانشطة المدرسية"),
      link: "/inspiration",
    },
    {
      label: t("معسكرات صيفية"),
      link: "/inspiration",
    },
    {
      label: t("منتجات مرحلة الطفولة"),
      link: "/inspiration",
    },
  ];

  return (
    <footer className=" bg-[url('/footer.png')] bg-cover bg-center  ">
      <div className="pt-[56px] pb-[32px] px-[20px] border-b border-[#154665]">
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
                <LocalizedLink
                  to={i.link}
                  key={i.label}
                  className="caption-medium text-white"
                >
                  {i.label}
                </LocalizedLink>
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

              <a dir="ltr" href="tel:+966556838899">
                +966556838899
              </a>
              <span className="mx-2">|</span>
              <a dir="ltr" href="tel:+966556838484">
                +966556838484
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-[32px] flex-col lg:flex-row items-center">
            <div className="text-center lg:text-start">
              <div className="title-bold text-white">
                {t("تبي تحول فكرتك لمشروع مميز يخاطب الأطفال؟")}
              </div>
              <div className="caption-medium text-[#a5a7a8]">
                {t(
                  "كن جزءًا من رحلة الإلهام والتغيير، وقدم طلبك اليوم لنصمم معًا تجربة تعليمية فريدة تترك أثرًا يدوم."
                )}
              </div>
            </div>
            <LocalizedLink
              to="/"
              className="bg-[#DDE3E8] cursor-pointer py-[10.5px] px-[16px] flex items-center gap-[8px] w-fit rounded-[16px] cta-large text-[#0F1113] "
            >
              <div>{t("قدم طلبك")}</div>
              <img src="/arrow-black.svg" alt="arrow" />
            </LocalizedLink>{" "}
          </div>
        </div>
      </div>
      <div className="py-[24px] px-[20px] caption-medium text-white text-center">
        {t("جميع الحقوق محفوظة © 2025 لبيب")}
      </div>
    </footer>
  );
}
