"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import UserPopUp from './UserPopUp';
import "./style.css";

const Index = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <div className="main-header">
      <img
        src="#"
        alt="classroom-picture"
        className="hero-image"
      />
      <nav>
        <Link href={""} className="header-logo">
          <img className="logo" src="#" />
        </Link>
        <Link href={""} className="header-logo">
         <div>Home</div>
        </Link>
         <Link href={""} className="header-logo">
          <div>Event</div>
        </Link>
        <button className="pop-up-btn" id="profile-btn" onClick={togglePopUp}>
          <i className="fa-regular fa-user"></i>
        </button>
        {isPopUpVisible && <UserPopUp className="pop-up" id="user-popup" />}
      </nav>
    </div>
  );
};

export default Index;
