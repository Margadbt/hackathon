"use client";

import { useEffect } from "react";
import { fetching } from "./script/FreeAngi";

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
