import React from 'react';
import "./style.css";

const RoomCard = ({ room }) => {
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
              {/* Display classroom number dynamically */}
              <h3><strong>{room.khicheeliin_bair} {room.uruunii_dugaar}</strong></h3>
            </div>
            {/* Display class type (зориулалт) dynamically */}
            <div className="class-type">{room.uruunii_zoriulalt}</div>
            <div className="class-info">
              <div className="seat-count">{room.suudlyn_too}</div>
              {/* Display seat count dynamically */}
              <div className="projector">
                {/* Display projector availability dynamically */}
                <div className={`projector ${room.proyektortoi_esekh === "Проекторгүй" ? "proj-off" : "proj-on"}`}></div>
              </div>
            </div>
          </div>
        </article>
      </div>
  );
};

export default RoomCard;
