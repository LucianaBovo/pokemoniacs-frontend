import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
