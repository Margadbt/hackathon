import RoomCard from "@/components/ProfileRoomCard";

import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <RoomCard></RoomCard>
      </div>
    </main>
  );
}
