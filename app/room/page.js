'use client'
import React, { useState } from 'react';
import RequestForm from "@/components/RequestForm";
import RoomDetailCard from "@/components/RoomDetailCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Room() {
    const [fixedDate, setFixedDate] = useState(new Date());

    function handleDateChange(date) {
        setFixedDate(date);
        console.log(date)
    }

    return (
        <main>
            <div className="{roomDetailHead}">
                <p>7-203</p>
                <RoomDetailCard />
            </div>
            <div className="{styles.requestRoomSection}">
                <Calendar
                    onChange={handleDateChange}
                    value={fixedDate}
                />
                <RequestForm />
            </div>
        </main>
    );
}
