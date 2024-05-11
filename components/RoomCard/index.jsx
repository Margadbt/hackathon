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
              <h3>{room.Хичээлийн_байр} {room.Өрөөний_дугаар}</h3>
            </div>
            {/* Display class type (зориулалт) dynamically */}
            <div className="class-type">{room.Өрөөний_зориулалт}</div>
            <div className="class-info">
              <div className="schedule_available">{room.Хичээлийн_хуваарь_тавих_боломж}</div>
              <div className="seat-count">{room.Суудлын_тоо}</div>
              {/* Display seat count dynamically */}
              <div className="class_size">{room.Талбайн_хэмжээ}</div>
              <div className="projector">
                {/* Display projector availability dynamically */}
                <div className={`projector ${room.Проектортой_эсэх === "Проекторгүй" ? "proj-off" : "proj-on"}`}></div>
              </div>
            </div>
          </div>
        </article>
      </a>
  );
};

export default RoomCard;
