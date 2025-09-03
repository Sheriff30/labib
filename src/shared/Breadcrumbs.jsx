// Breadcrumbs.js
import { useLocation, Link } from "react-router-dom";
import routes from "../routes";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnameParts = location.pathname.split("/").filter(Boolean);

  let breadcrumbs = [];
  let currentPath = "";

  // Always start with the homepage
  breadcrumbs.push(
    <Link key="home" to="/" className="text-[#F06827] body-light">
      لبيب
    </Link>
  );

  pathnameParts.forEach((part, index) => {
    currentPath += `/${part}`;
    const route = routes.find((r) => r.path === currentPath);

    if (route) {
      breadcrumbs.push(
        <span key={`sep-${index}`} className="text-[#F06827] body-medium">
          &nbsp;&gt;&nbsp;
        </span>,
        <Link key={route.path} to={route.path} className="text-[#F06827] ">
          {route.name}
        </Link>
      );
    }
  });

  return (
    <div className="px-[20px] pt-[12px] pb-[40px]">
      <div className="flex items-center  max-w-[1232px] mx-auto">
        {breadcrumbs}
      </div>
    </div>
  );
}
