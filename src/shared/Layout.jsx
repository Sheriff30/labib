import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Register } from "./";

export default function Layout() {
  return (
    <>
      {/* Header */}
      <Header />
      <Outlet />
      {/* Footer */}
      <Register />
      <Footer />
    </>
  );
}
