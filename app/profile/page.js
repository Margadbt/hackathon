import Image from "next/image";
import styles from "./page.module.css";
import ProfileRoomCard from "@/components/ProfileRoomCard";

export default function Home() {
  return (
    <main class="body">
      <div class="profile-wrapper">
        <div></div>
        <div>
          <section class="verified">
            <div class="card-wrapper">
              <ProfileRoomCard></ProfileRoomCard>
              <ProfileRoomCard></ProfileRoomCard>
              <ProfileRoomCard></ProfileRoomCard>
            </div>
          </section>
          <section class="waiting">
            <div class="card-wrapper">
              <ProfileRoomCard></ProfileRoomCard>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
