import RoomCard from "@/components/ProfileRoomCard";
import RequestForm from "@/components/Request";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <RoomCard></RoomCard>
        <RequestForm></RequestForm>
      </div>
    </main>
  );
}
