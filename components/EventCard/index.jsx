import Image from 'next/image';
import "./styles.css"
import classImage from "@/assets/rooms.jpg";
import "./style.css";

const EventCard = () => {
  return (
    <article className="class-section-2">
      <div className="img">
        <Image src={classImage} alt="classroom picture" />
      </div>
      <section className="details">
        <div className="heartdetailsgrid">
          <div className="font">
            <h3>Event Name</h3>
            <div className="class-type">event </div>
          </div>
        </div>
        <div className="para">
          <p>8-409</p>
          <p>04.03 13:00</p>
          {/* daskdjaslknd */}
        </div>
      </section>
    </article>
  );
};

export default EventCard;
