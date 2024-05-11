import Image from 'next/image';
import "./styles.css"
import classImage from "@/assets/rooms.jpg";

const EventCard = () => {
  return (
    <article className="event-section">
      <div className="img">
        <Image src={classImage} alt="classroom picture" />
      </div>
      <section className="event-details">
        <div className="heartdetailsgrid">
          <div className="event-font">
            <h3>Event Name</h3>
            <div className="event-class-type">event </div>
            <div className="event-class-type">Description </div>
          </div>
        </div>
        <div className="event-para">
          <p>8-409</p>
          <p>04.03 13:00</p>
          {/* daskdjaslknd */}
        </div>
      </section>
    </article>
  );
};

export default EventCard;
