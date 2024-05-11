import Image from "next/image";
import "@/app/profile/style.css";
import ProfileRoomCard from "@/components/ProfileRoomCard";

export default function Home() {
  return (
    <main class="body">
      <div class="profile-wrapper">
        <div class="left-side">
          <p>User0021</p>
        </div>
        <div class="right-side">
          <section class="verified">
            <h2>Баталгаажсан :</h2>
            <div class="card-wrapper">
              <ProfileRoomCard></ProfileRoomCard>
              <ProfileRoomCard></ProfileRoomCard>
              <ProfileRoomCard></ProfileRoomCard>
            </div>
          </section>
          <section class="waiting">
            <h2>Хүлээгдэж буй :</h2>
            <div class="card-wrapper">
              <ProfileRoomCard></ProfileRoomCard>
              <ProfileRoomCard></ProfileRoomCard>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
