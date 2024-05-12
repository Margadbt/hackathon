"use client";

import React, { useState } from "react";
import Link from "next/link";
import UserPopUp from "./UserPopUp";
import Image from "next/image"; // Remove curly braces
import logo from "../../assets/Logo.svg";
import "../../styles/styles.css";

const Header = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <div className="main-header">
      <nav>
        <div className="wrapper-wrap">
          <Link href={"/"}>
            {" "}
            {/* Add href attribute */}
            <a className="header-logo">
              {" "}
              {/* Wrap with anchor tag */}
              <Image
                src={logo}
                alt="classroom-picture"
                className="hero-image"
              />
            </a>
          </Link>
          <div className="header-wrap">
            <Link href={"/"}>
              <a className="nav-item">Сул анги хайх</a>{" "}
              {/* Wrap with anchor tag */}
            </Link>
            <Link href={"/event"}>
              <a className="nav-item">Эвент</a> {/* Wrap with anchor tag */}
            </Link>
          </div>
        </div>
        <button
          className="pop-up-btn"
          id="profile-btn"
          onClick={togglePopUp}
        ></button>
        {isPopUpVisible && <UserPopUp />}
      </nav>
    </div>
  );
};

export default Header;
