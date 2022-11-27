import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        {isAuthenticated ? <Outlet /> : <h1>Please login</h1>}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
