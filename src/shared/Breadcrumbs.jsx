import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({
  link1,
  title1,
  link2,
  title2,
  className,
}) {
  return (
    <div
      className={`flex items-center gap-1 text-orange flex-wrap ${className}`}
    >
      <Link to="/" className="body-light">
        لبيب
      </Link>
      {title1 && <div> &gt;</div>}
      {title1 && <Link to={link1}>{title1}</Link>}
      {title2 && <div> &gt;</div>}
      {title2 && <Link to={link2}>{title2}</Link>}
    </div>
  );
}
