"use client";
import EventCard from "@/components/EventCard";
import "./styles.css";

import ProfileRoomCard from "@/components/ProfileRoomCard";
import RoomCard from "@/components/RoomCard";
import RoomCardList from "@/components/RoomCard/RoomCardList";
// khangal preview
export default function EventPage() {
  const [allEventData, setAllEventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/event/get");
        const jsonData = await response.json();
        console.log(jsonData);
        setAllEventData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
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
        <RoomCardList></RoomCardList>
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
  );
}
