import RoomCard from "@/components/ProfileRoomCard";

import styles from "./page.module.css";
import EventCard from "@/components/EventCard";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <RoomCard></RoomCard>
        <EventCard></EventCard>
      </div>
    </main>
  );
}
