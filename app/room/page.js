"use client"

import RequestForm from "@/components/RequestForm";
import RoomDetailCard from "@/components/RoomDetailCard";
import "./style.css";
import Calendar from "react-calendar";
import Image from "next/image";
import rooms from "../../assets/rooms.jpg";
import RoomCard from "@/components/RoomCard";
import AvailableTimeSection from "@/components/AvailableTimeSection";
import { useState } from "react";

export default function Room() {
  const [fixedDate, setFixedDate] = useState(new Date());

  function handleDateChange(date) {
    setFixedDate(date);
    console.log(date);
  }
  return (
    <main>
      <div className="room-detail-head-container">
        <div className="room-detail-head-image">
          <p>7-203</p>
          <Image className="room-image" src={rooms} />
        </div>
        <RoomDetailCard />
      </div>
      <div className="request-room-section">
        <Calendar onChange={handleDateChange} value={fixedDate} />
        <AvailableTimeSection />
        <RequestForm />
      </div>
    </main>
  );
}
