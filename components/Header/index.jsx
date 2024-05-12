"use client";

import React, { useState } from "react";
import Link from "next/link";
import UserPopUp from "./UserPopUp";
import Image from "next/image"; // Remove curly braces
import logo from "../../assets/Logo.svg";
import "../../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
            <Image src={logo} alt="classroom-picture" className="hero-image" />
          </Link>
          <div className="header-wrap">
            <Link href={"/"}>
              <a className="nav-item">Сул анги хайх</a>{" "}
              {/* Wrap with anchor tag */}
            </Link>
            <Link href={"/event"} className="nav-item">
              Эвент
            </Link>
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
