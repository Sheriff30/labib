import React from "react";
import { Link } from "react-router-dom";

const arabicMonths = {
  0: "يناير",
  1: "فبراير",
  2: "مارس",
  3: "أبريل",
  4: "مايو",
  5: "يونيو",
  6: "يوليو",
  7: "أغسطس",
  8: "سبتمبر",
  9: "أكتوبر",
  10: "نوفمبر",
  11: "ديسمبر",
};

// Function to format date to Arabic
const formatDateToArabic = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = arabicMonths[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export default function NewsCard({
  variant = "detailed",
  title,
  description,
  date,
  src,
  className,
  type,
  link = "/",
}) {
  const formattedDate = date ? formatDateToArabic(date) : "";

  return (
    <Link
      to={link}
      className={`grid ${
        variant === "detailed" ? "md:grid-cols-[0.5fr_1fr]" : "!flex flex-col  "
      } gap-5  h-full`}
    >
      <img
        src={src}
        alt="library img"
        className={`w-full rounded-lg h-full object-cover ${
          variant === "articles" ? "max-h-[438px]" : ""
        } ${className}`}
      />
      <div className="flex flex-col gap-2">
        {type === "article" ? (
          <p className="caption-light">{formattedDate}</p>
        ) : (
          <p className=" text-[22px] bold  max-w-[390px]">{title} </p>
        )}
        {variant === "detailed" && (
          <p
            className=" body-light text-primary-default line-clamp-2  xl:max-w-[285px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {type === "article" ? (
          <p className="h4-bold line-clamp-1 max-w-[390px]">{title} </p>
        ) : (
          <p className="caption-light">{formattedDate}</p>
        )}{" "}
      </div>
    </Link>
  );
}
