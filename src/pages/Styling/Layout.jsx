import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="content-container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
