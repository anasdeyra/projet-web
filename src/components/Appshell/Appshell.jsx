import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Appshell({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-16 my-16">{children}</main>
      <Footer />
    </>
  );
}
