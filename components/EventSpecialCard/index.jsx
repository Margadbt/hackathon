import React from 'react';
import "./style.css";

const EventSpecialCard = ({data}) => {
  // Random image for the classroom
  let i = Math.floor(Math.random() * 10000) + 1;

  return (
      <div className="class-section-1">
        <article>
          <img
              src={`https://source.unsplash.com/random/400x250/?classroom&${i}`}
              alt="classroom-picture"
              className="image"
          />
          <div className="text-wrapper">
            <div className="head-wrapper">
              <h3>{data.name}</h3>
            </div>
            {/* Display class type (зориулалт) dynamically */}
            <div className="class-type">{data.organization}</div>
            <div className="class-info">
              <div className="seat-count">{data.location}</div>
                <div className="class_size">{data.date}</div>
              <div className="projector">
              </div>
            </div>
          </div>
        </article>
      </div>
  );
};

export default EventSpecialCard;
