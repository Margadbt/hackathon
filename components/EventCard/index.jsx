"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "./styles.css";
import classImage from "@/assets/rooms.jpg";

const EventCard = ({data}) => {
  

  return (
    <article className="event-section">
      <div className="img">
        <Image src={data.image_url} alt="classroom picture" />
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
          {/* daskdjaslknd */}
        </div>
      </section>
    </article>
  );
};

export default EventCard;
