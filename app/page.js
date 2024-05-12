"use client";
import "./app.style.css";
import "../styles/styles.css";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { fetching } from "./script/FreeAngi";
import RoomCardList from "../components/RoomCard/RoomCardList";

export default function Home() {

  useEffect(() => {
    async function getFreeRoom() {
      const rooms = await fetching();
    }

    getFreeRoom();
  }, []);

  return (
    <main>
      <div className="app-main-wrapper">
        <div className="left-side">
          <div className="main-content">
            {/* <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard> */}
            <RoomCardList></RoomCardList>
          </div>
        </div>
        <aside className="index-aside">
          <section>
            <h2>Яг одоо сул</h2>
            {/* <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard> */}
          </section>
        </aside>
      </div>
    </main>
  );
}
