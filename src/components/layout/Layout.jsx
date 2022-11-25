import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
