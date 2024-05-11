import Image from 'next/image';

import classImage from "./rooms.png";

const EventCard = () => {
  return (
    <div className='main'>
    <article className="class-section-2">
      <div className="img">
        <Image src={classImage} alt="classroom picture" width={300} height={200} />
      </div>
      <section className="details">
        <div className="heartdetailsgrid">
          <div className="font">
            <h3>Hackathon</h3>
            <div className="class-type">Hackum</div>
          </div>
        </div>
        <ul>
          <li>8-409</li>
          <li>
            <span>04.04 13:00</span>
          </li>
        </ul>
        
      </section>
    </article>
    </div>
  );
};

export default EventCard;
