

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
            <a href="class.html" class="class-section-3">
              <RoomCard />
            </a>
            <a href="class.html" class="class-section-3">
              <RoomCard />
            </a>
            <a href="class.html" class="class-section-3">
              <RoomCard />
            </a>
            <a href="class.html" class="class-section-3">
              <RoomCard />
            </a>
            <a href="class.html" class="class-section-3">
              <RoomCard />
            </a>
            <a href="class.html" class="class-section-3">
              <RoomCard />
            </a>
          </section>
        </aside>
      </div>
    </main>
  );
}
