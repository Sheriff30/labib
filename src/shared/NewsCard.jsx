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
        className="w-full rounded-lg h-full object-cover"
      />
      <div className="flex flex-col gap-2">
        <p className="h4-bold xl:truncate max-w-[290px]">{title} </p>
        {variant === "detailed" && (
          <p className=" body-light text-primary-default">{description}</p>
        )}

        <p className="caption-light">{date}</p>
      </div>
    </div>
  );
}
