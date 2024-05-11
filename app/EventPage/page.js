import EventCard from "@/components/EventCard";
import "./styles.css"

import ProfileRoomCard  from "@/components/ProfileRoomCard";
import RoomCard from "@/components/RoomCard";
// khangal preview
export default function EventPage(){
    return(
    <div className="Event-main">
   <div className="Event-cards">
<EventCard></EventCard>
<EventCard></EventCard>
<EventCard></EventCard>
<EventCard></EventCard>

</div>
<div className="Event-sidebar">
<aside class="index-aside">
    <section>
        <h2>Онцлох event</h2>
        <a href="class.html" className="class-section-9">
            <RoomCard/>

        </a>
        <a href="class.html" className="class-section-9">
            <RoomCard/>

        </a>
        <a href="class.html" className="class-section-9">
            <RoomCard/>

        </a>
        <a href="class.html" className="class-section-9">
            <RoomCard/>

        </a>
        <a href="class.html" className="class-section-9">
            <RoomCard/>

        </a>
        <a href="class.html" className="class-section-9">
            <RoomCard/>

        </a>
        {/*    <a href="class.html" class="class-section-3">*/}
        {/*    <RoomCard/>*/}
        {/*    </a>*/}
        {/*    <a href="class.html" class="class-section-3">*/}
        {/*    <RoomCard/>*/}
        {/*    </a>*/}
        {/*    <a href="class.html" class="class-section-3">*/}
        {/*    <RoomCard/>*/}

        {/*    </a>*/}
        {/*    <a href="class.html" class="class-section-3">*/}
        {/*<RoomCard/>*/}

        {/*    </a>*/}
        {/*    <a href="class.html" class="class-section-3">*/}
        {/*    <RoomCard/>*/}
        {/*    </a>*/}
    </section>
</aside>
</div>
    </div>


    )
}