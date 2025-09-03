import React from "react";

export default function NewsCard({
  variant = "detailed",
  title,
  description,
  date,
}) {
  return (
    <div
      className={`grid ${
        variant === "detailed" ? "md:grid-cols-[0.5fr_1fr]" : "grid-cols-1"
      } gap-5  h-full`}
    >
      <img
        src="/library.png"
        alt="library img"
        className={`w-full rounded-lg h-full object-cover ${
          variant === "articles" ? "max-h-[438px]" : ""
        }`}
      />
      <div className="flex flex-col gap-2">
        <p className="h4-bold line-clamp-1 max-w-[390px]">{title} </p>
        {variant === "detailed" && (
          <p className=" body-light text-primary-default line-clamp-2  xl:max-w-[274px] ">
            {description}
          </p>
        )}

        <p className="caption-light">{date}</p>
      </div>
    </div>
  );
}
