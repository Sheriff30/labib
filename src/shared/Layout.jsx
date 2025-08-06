import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      {/* Header */}
      <Header />
      {!isHome && <Breadcrumbs />}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
}
