import classRoom from "@/assets/rooms.jpg";
import Image from 'next/image';
import "./style.css"; // Import CSS file
import Detail from '/components/EventDetailCard';

const EventDetailPage = () => {
  return (
    <div className='event-main'>
      <article className="class-section-2">
        <section className="details">
          <div className="heartdetailsgrid">
            <div className="font">
              <b><h2>Hackathon-Hackum </h2></b>
              <div className="class-type">
              </div>
            </div>
          </div>
          <div className="row">
              <Image src={classRoom} className="img" alt="Classroom" width={500} height={350} /> {/* Provide alt text and specify width and height */}
            <Detail className="details" />
          </div>
        </section>
      </article>
      <div className="desc">
       <i> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</i>
      </div>
    </div>
  );
};

export default EventDetailPage;
