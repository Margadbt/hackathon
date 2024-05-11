import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function RoomDetailCard() {
  return (
      <div>
        <div>
          <div>Лекц</div>
          <div>
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
