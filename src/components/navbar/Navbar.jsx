import React from "react";
import logo from '../../assets/react.svg'
import './navbar.css'
export default function Navbar() {
  return <header>
    <nav className="p-2 flex justify-between  bg-black text-white h-14 items-center ">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="links flex items-center mr-3">
        <ul className="navlinks flex gap-5 align-middle ">
          <li className="navlink">HOME</li>
          <li className="navlink">HOME</li>
          <li className="navlink">HOME</li>
          <li className="navlink">HOME</li>
          <li className="navlink">HOME</li>
        </ul>
      </div>
    </nav>
  </header>;
}
