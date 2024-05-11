"use client";

import React, { useState } from "react";
import Link from "next/link";
import UserPopUp from "./UserPopUp";
import Image from "next/image";
import logo from "@/assets/Logo.svg";
import "@/styles/styles.css";
const Header = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <div className="main-header">
      <nav>
        <div className="wrapper-wrap">
          <Link href={"#"} className="header-logo">
            <Image src={logo} alt="classroom-picture" className="hero-image" />
          </Link>
          <div className="header-wrap">
            <Link href={""}>
              <div className="nav-item">Сул анги хайх</div>
            </Link>
            <Link href={""}>
              <div className="nav-item">Эвент</div>
            </Link>
          </div>
        </div>
        <button className="pop-up-btn" id="profile-btn" onClick={togglePopUp}>
          <i className="fa-regular fa-user"></i>
        </button>
        {isPopUpVisible && <UserPopUp />}
      </nav>
    </div>
  );
};

export default Header;
