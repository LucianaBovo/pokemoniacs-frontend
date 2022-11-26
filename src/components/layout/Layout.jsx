import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="main-container">
        {children}
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
