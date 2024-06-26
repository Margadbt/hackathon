"use client";
import React, { useEffect, useState } from "react";
import classRoom from "../../assets/eventpro.jpg";
import Image from "next/image";
import "./styles.css";
import classImage from "../../assets/rooms.jpg";
import Link from "next/link";

const EventCard = ({ data }) => {
  let i = Math.floor(Math.random() * 10000) + 1;
  return (
    <a href={`/event/${data.id}`} className="brab">
      <article className="event-section">
        <div className="img">
          <Image src={classRoom} alt="classroom-picture" className="image" />
        </div>
        <section className="event-details">
          <div className="heartdetailsgrid">
            <div className="event-font">
              <h3>{data.name}</h3>
              <div className="event-class-type">{data.organization} </div>
            </div>
          </div>
          <div className="event-para">
            <p>{data.location}</p>
            <p>{data.date}</p>
          </div>
        </section>
      </article>
    </a>
  );
};

export default EventCard;
