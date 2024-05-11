import RoomCard from "@/components/ProfileRoomCard";
import RequestForm from "@/components/Request";
import LoginForm from "./login/page";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <RoomCard></RoomCard>
        <LoginForm></LoginForm>
        <RequestForm></RequestForm>
      </div>
    </main>
  );
}
