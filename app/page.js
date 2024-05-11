"use client"
import "@/app/app.style.css";
import RoomCard from "@/components/RoomCard";
import "@/styles/index.css";
import RoomCardList from "@/components/RoomCard/RoomCardList";
import "@/app/app.style.css";
import SearchBar from "@/components/SearchBar";


export default function Home() {

  return (
    <main>
      <div className="app-main-wrapper">
        <div className="left-side">
          <SearchBar classNameName="app-search-bar"></SearchBar>
          <div className="main-content">
            <RoomCardList></RoomCardList>

          </div>
        </div>
        <aside className="index-aside">
          <section>
            <h2>Яг одоо сул</h2>
            <RoomCardList></RoomCardList>

          </section>
        </aside>
      </div>
    </main>
  );
}
