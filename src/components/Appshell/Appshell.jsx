import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Appshell({ children }) {
  return (
    <>
      <Navbar />
      <main id="main" className=" max-w-[1366px] mx-auto">{children}</main>
      <Footer />
    </>
  );
}
