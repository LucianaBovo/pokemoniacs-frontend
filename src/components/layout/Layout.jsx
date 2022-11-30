import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "./Layout.css";

const Layout = ({ children }) => {
  // const {isAuthenticated} = useAuth0();
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
