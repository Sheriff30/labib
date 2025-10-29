import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Register } from "./";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      {/* Footer */}
      <Register />
      <Footer />
    </div>
  );
}
