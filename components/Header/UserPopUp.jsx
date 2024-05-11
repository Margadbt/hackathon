"use client"
import React from 'react';
import Link from 'next/link';
// import "@/styles/styles.css"
import "./style.css"

const UserPopUp = () => {
  return (
    <div className="pop-up" id="user-popup" >
    <ul>
      <li>
        <a href="user.html" className="button">Нэвтрэх</a>
      </li>
      <li>
        <a href="user.html" className="reserved-menu menu"><span>Захиалсан ангиуд</span></a>
      </li>
      <li>
        <a href="user.html" className="liked-menu menu"><span>Дуртай ангиуд</span></a>
      </li>
      <li>
        <a href="contact.html" className="contact-menu menu"><span>Холбогдох</span></a>
      </li>
    </ul>
    </div>
  );
}

export default UserPopUp;
