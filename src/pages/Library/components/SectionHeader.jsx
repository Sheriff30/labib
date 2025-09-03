import React from "react";

export default function SectionHeader({ src, title, link }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={src} alt={title} />
        <div className="h3-bold">{title}</div>
      </div>
      <a href={link} className="text-red underline titles-medium">
        المزيد{" "}
      </a>
    </div>
  );
}
