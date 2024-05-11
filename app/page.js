import "@/app/app.style.css";
import RoomCard from "@/components/RoomCard";
import "@/styles/index.css";
import RoomCardList from "@/components/RoomCard/RoomCardList";

export default function Home() {
  return (
    <main>
      <div class="app-main-wrapper">
        <div class="left-side">
          <div class="filter-bar"></div>
          <div class="main-content">

          </div>
        </div>
        <aside class="index-aside">
          <section>
            <h2>Яг одоо сул</h2>
              <RoomCardList></RoomCardList>
          </section>
        </aside>
      </div>
    </main>
  );
}