import React from "react";
import "react-calendar/dist/Calendar.css";

import "./style.css";
export default function RoomDetailCard() {
  return (
    <div className="room-detail-card-container">
      <div className="room-detail-card">
        <div className="feauture right-line feature-info">Лекц</div>
        <div className="feauture right-line">
          Суудлын тоо
          <span className="feature-info">55</span>
        </div>
        <div className="feauture">Проектор</div>
      </div>
    </div>
  );
}
