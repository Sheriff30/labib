import React from "react";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "@/shared";
export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F06827] pt-[90px] lg:pt-[150px] relative">
      <div className="display2-bold text-white text-center pb-6">
        {t("نـبــــنــــــي الاحــــــــــلام")} <br />
        {t("ونصنع المستقبل")}
      </div>
      <img src="/home-hero.jpeg" className=" h-auto w-full " alt="hero image" />
    </div>
  );
}
