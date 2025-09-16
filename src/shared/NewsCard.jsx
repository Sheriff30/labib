import React from "react";

export default function NewsCard({
  variant = "detailed",
  title,
  description,
  date,
  src,
  className,
  type,
}) {
  return (
    <div
      className={`grid ${
        variant === "detailed" ? "md:grid-cols-[0.5fr_1fr]" : "grid-cols-1"
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
          <p className="caption-light">{date}</p>
        ) : (
          <p className=" text-[22px] bold  max-w-[390px]">{title} </p>
        )}
        {variant === "detailed" && (
          <p className=" body-light text-primary-default line-clamp-2  xl:max-w-[285px] ">
            {description}
          </p>
        )}
        {type === "article" ? (
          <p className="h4-bold line-clamp-1 max-w-[390px]">{title} </p>
        ) : (
          <p className="caption-light">{date}</p>
        )}{" "}
      </div>
    </div>
  );
}
