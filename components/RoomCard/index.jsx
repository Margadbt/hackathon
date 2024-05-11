import React from 'react';
import "./style.css";

const RoomCard = ({ room }) => {
  // Random image for the classroom
  let i = Math.floor(Math.random() * 10000) + 1;

  return (
      <a href="#" className="class-section-1">
        <article>
          <img
              src={`https://source.unsplash.com/random/400x250/?classroom&${i}`}
              alt="classroom-picture"
              className="image"
          />
          <div className="text-wrapper">
            <div className="head-wrapper">
              {/* Display classroom number dynamically */}
              <h3>{room.khicheeliin_bair} {room.uruunii_dugaar}</h3>
            </div>
            {/* Display class type (зориулалт) dynamically */}
            <div className="class-type">{room.uruunii_zoriulalt}</div>
            <div className="class-info">
              <div className="schedule_available">{room.khicheeliin_khuvaari_tavikh_bolomj}</div>
              <div className="seat-count">{room.suudlyn_too}</div>
              {/* Display seat count dynamically */}
              <div className="class_size">{room.talbain_khemjee}</div>
              <div className="projector">
                {/* Display projector availability dynamically */}
                <div className={`projector ${room.proyektortoi_esekh === "Проекторгүй" ? "proj-off" : "proj-on"}`}></div>
              </div>
            </div>
          </div>
        </article>
      </a>
  );
};

export default RoomCard;
