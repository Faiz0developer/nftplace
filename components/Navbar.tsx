"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImSun } from "react-icons/im";
import { MdClose } from "react-icons/md";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand__container">
        <div className="brand">
          <Image src={logo} alt="logo" />
        </div>
        <div className="toggle__container">
          <div className="toggle"></div>
          <div className="model"></div>
        </div>
      </div>
      <div className="link__container">
        <ul className="links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Launch</a>
          </li>
          <li>
            <a href="#" className="sign__up">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
