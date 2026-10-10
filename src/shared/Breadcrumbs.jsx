import React from "react";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "@/lib/i18n";

export default function Breadcrumbs({
  link1,
  title1,
  link2,
  title2,
  className,
}) {
  const { t } = useTranslation();
  return (
    <div
      className={`flex items-center gap-1 text-orange flex-wrap ${className}`}
    >
      <LocalizedLink to="/" className="body-light">
        {t("لبيب")}
      </LocalizedLink>
      {title1 && <div> &gt;</div>}
      {title1 && <LocalizedLink to={link1}>{title1}</LocalizedLink>}
      {title2 && <div> &gt;</div>}
      {title2 && <LocalizedLink to={link2}>{title2}</LocalizedLink>}
    </div>
  );
}
