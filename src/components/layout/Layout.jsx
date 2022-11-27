import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"; 

import "./Layout.css";

const Layout = ({ children }) => {
  const {isAuthenticated} = useAuth0();
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
