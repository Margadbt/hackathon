import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import "./style.css"
export default function RoomDetailCard() {
  return (
      <div className="room-detail-card-container">
        <div className="room-detail-card">
          <div style={{borderRight: "2px solid rgb(0, 0, 0, 0.1)"}}>Лекц</div>
          <div style={{borderRight: "2px solid rgb(0, 0, 0, 0.1)"}}>
            <p>Суудлын тоо</p>55
          </div>
          <div>
            <p>Проектор</p>Icon
          </div>
            <Calendar></Calendar>
        </div>
      </div>
  );
}
