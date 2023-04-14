import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Appshell({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-16 my-16">{children}</main>
      <Footer />
    </>
  );
}
