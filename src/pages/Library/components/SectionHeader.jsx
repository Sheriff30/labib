import React from "react";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "@/lib/i18n";

export default function SectionHeader({ src, title, link }) {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={src} alt={title} />
        <div className="h3-bold">{title}</div>
      </div>
      <LocalizedLink to={link} className="text-red underline titles-medium">
        {t("المزيد")}{" "}
      </LocalizedLink>
    </div>
  );
}
