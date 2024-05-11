import styles from "./page.module.css";
import RoomCard from "@/components/ProfileRoomCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <RoomCard></RoomCard>
      </div>
    </main>
  );
}
