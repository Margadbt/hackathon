import RoomCard from "@/components/RoomCard";
import ProfileRoomCard from "@/components/ProfileRoomCard";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <RoomCard></RoomCard>
        <RoomCard></RoomCard>
        <RoomCard></RoomCard>
        <RoomCard></RoomCard>
        <ProfileRoomCard></ProfileRoomCard>
        <ProfileRoomCard></ProfileRoomCard>
        <ProfileRoomCard></ProfileRoomCard>
        <ProfileRoomCard></ProfileRoomCard>
        <ProfileRoomCard></ProfileRoomCard>
      </div>
    </main>
  );
}
