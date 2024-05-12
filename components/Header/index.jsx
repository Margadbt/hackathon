"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import login from "@/assets/login-icon.png";
import React, { useState } from "react";
import Link from "next/link";
import UserPopUp from "./UserPopUp";
import { Image } from "next/image";
import logo from "@/assets/Logo.svg";
import "@/styles/styles.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <div className="main-header">
      <nav>
        <div className="wrapper-wrap">
          <a href={"/"} className="header-logo">
            <Image src={logo} alt="classroom-picture" className="hero-image" />
          </a>
          <div className="header-wrap">
            <a href={"/"}>
              <div className="nav-item">Сул анги хайх</div>
            </a>
            <a href={"/event"}>
              <div className="nav-item">Эвент</div>
            </a>
          </div>
        </div>
        <button className="pop-up-btn" id="profile-btn" onClick={togglePopUp}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        {isPopUpVisible && <UserPopUp />}
      </nav>
    </div>
  );
};

export default Header;
