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
        <Link href={"/login"} className="button">Нэвтрэх</Link>
      </li>
      <li>
        <Link href={"/profile"}  className="reserved-menu menu"><span>Захиалсан ангиуд</span></Link>
      </li>
      <li>
        <Link href={"/login"}  className="contact-menu menu"><span>Холбогдох</span></Link>
      </li>
    </ul>
    </div>
  );
}

export default UserPopUp;
