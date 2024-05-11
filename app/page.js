import "@/app/app.style.css";
import RoomCard from "@/components/RoomCard";
import "@/styles/index.css";

export default function Home() {
  return (
    <main>
      <div class="app-main-wrapper">
        <div class="left-side">
          <div class="filter-bar"></div>
          <div class="main-content">
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
          </div>
        </div>
        <aside class="index-aside">
          <section>
            <h2>Яг одоо сул</h2>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
            <RoomCard></RoomCard>
          </section>
        </aside>
      </div>
    </main>
  );
}