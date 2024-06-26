"use client";
import EventCard from "../../components/EventCard";
import "./styles.css";
import EventForm from "../../components/EventForm";
import ProfileRoomCard from "../../components/ProfileRoomCard";
import RoomCard from "../../components/RoomCard";
import { useEffect, useState } from "react";
import EventSpecialCard from "../../components/EventSpecialCard";
import Link from "next/link";

export default function EventPage() {
  const [allEventData, setAllEventData] = useState([]);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/event/get");
        const jsonData = await response.json();
        console.log(jsonData);
        setAllEventData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="Event-main">
      <div className="Event-cards">
        {allEventData?.map((item) => (
          <EventCard data={item} />
        ))}
      </div>
      <div className="Event-sidebar">
        <Link href="/oyuna">
          {" "}
          <button className="order-btn">Event Зохиох уу?</button>
        </Link>
        <aside className="index-aside">
          <section>
            <h2>Онцлох event</h2>
            {allEventData
              ?.filter((item) => item.date)
              .map((item) => (
                <EventSpecialCard data={item} />
              ))}
          </section>
        </aside>
      </div>
    </div>
  );
}
