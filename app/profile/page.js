import Image from "next/image";
import "../../app/profile/style.css";
import ProfileRoomCard from "../../components/ProfileRoomCard";
import ProfileSvg from "../../assets/Profile.svg";
import HorizontalLine from "../../assets/Horizontal-line.svg";
import VerticalLine from "../../assets/Vertical-line.svg";

export default function Home() {
  return (
    <main class="body">
      <div class="profile-wrapper">
        <div class="left-side">
          <div class="profile-back">
            <Image src={ProfileSvg} alt="line" class="profile-icon" />
          </div>
          <p class="user-name">User0021</p>
          <Image src={HorizontalLine} alt="line" class="hor-line"></Image>
          <button class="logout">Гарах</button>
        </div>
        <Image src={VerticalLine} alt="line" class="ver-line"></Image>
        <div class="right-side">
          <section class="verified">
            <h2>Баталгаажсан :</h2>
            <div class="card-wrapper">
              <ProfileRoomCard></ProfileRoomCard>
              <ProfileRoomCard></ProfileRoomCard>
              <ProfileRoomCard></ProfileRoomCard>
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
              <ProfileRoomCard></ProfileRoomCard>
              <ProfileRoomCard></ProfileRoomCard>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
