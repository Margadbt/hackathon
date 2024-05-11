import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

import classImage from "./rooms.png";

const EventCard = () => {
  return (
    <article className="class-section-2">
      <div className="img">
        <Image src={classImage} alt="classroom picture" width={300} height={200} />
      </div>
      <section className="details">
        <div className="heartdetailsgrid">
          <div className="font">
            <h3>Hackathon</h3>
            <div className="class-type">Hackum</div>
          </div>
        </div>
        <ul>
          <li>8-409</li>
          <li>
            <span>04.04 13:00</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default EventCard;
