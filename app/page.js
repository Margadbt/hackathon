import RoomCard from "@/components/RoomCard";

export default function Home() {
  return (
    <main>
      <div class="main-wrapper">
        <div class="left-side">
          <div class="filter-bar"></div>
          <div class="class-wrapper">
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
            <h2>Онцлох ангиуд</h2>
            <RoomCard />

            <RoomCard />

            <RoomCard />

            <RoomCard />

            <RoomCard />

            <RoomCard />
          </section>
        </aside>
      </div>
    </main>
  );
}
