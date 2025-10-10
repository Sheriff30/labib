import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Register } from "./";

export default function Layout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto_auto] h-screen ">
      {/* Header */}
      <Header />
      <Outlet />
      {/* Footer */}
      <Register />
      <Footer />
    </div>
  );
}
