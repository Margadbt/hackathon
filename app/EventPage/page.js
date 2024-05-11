import EventCard from "@/components/EventCard";
import "./styles.css"

import ProfileRoomCard  from "@/components/ProfileRoomCard";
// khangal preview
export default function EventPage(){
    return(
    <div className="Event-main">
        <div className="Event-cards">
<EventCard></EventCard>
<EventCard></EventCard>
<EventCard></EventCard>
<EventCard></EventCard>
<EventCard></EventCard>
<EventCard></EventCard>
<EventCard></EventCard>
<EventCard></EventCard>
<EventCard></EventCard>
</div>
<div className="Event-sidebar">
<aside class="index-aside">
        <section>
          <h2>Онцлох ангиуд</h2>
          <a href="class.html" class="class-section-3">
            <ProfileRoomCard></ProfileRoomCard>
          </a>
          <a href="class.html" class="class-section-3">
          <ProfileRoomCard></ProfileRoomCard>
          </a>
          <a href="class.html" class="class-section-3">
          <ProfileRoomCard></ProfileRoomCard>
          </a>
          <a href="class.html" class="class-section-3">
          <ProfileRoomCard></ProfileRoomCard>
          </a>
          <a href="class.html" class="class-section-3">
          <ProfileRoomCard></ProfileRoomCard>
          </a>
          <a href="class.html" class="class-section-3">
          <ProfileRoomCard></ProfileRoomCard>
          </a>
        </section>
      </aside>
</div>
    </div>


    )
}