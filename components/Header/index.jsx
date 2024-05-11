"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import UserPopUp from './UserPopUp';
import Image from 'next/image';
// import logo from "@/assets/Logo.svg"
import "@/styles/styles.css"
const Header = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <div className="main-header">
     
      <nav>
        <Link href={""} className="header-logo">
      {/*  <Image*/}
      {/*  src='{logo}'*/}
      {/*  alt="classroom-picture"*/}
      {/*  className="hero-image"*/}
      {/*/>*/}
        </Link>
        <Link href={""} >
         <div class="nav-item">Сул анги хайх</div>
        </Link>
         <Link href={""} >
          <div class="nav-item">Эвент</div>
        </Link>
        <button className="pop-up-btn" id="profile-btn" onClick={togglePopUp}>
          <i className="fa-regular fa-user"></i>
        </button>
        {isPopUpVisible && <UserPopUp className="pop-up" id="user-popup" />}
      </nav>
    </div>
  );
};

export default Header;
