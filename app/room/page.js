import RequestForm from "@/components/RequestForm";
import RoomDetailCard from "@/components/RoomDetailCard";
import "./style.css"

export default function Room() {
  return (
    <main>
        <div className="room-detail-head">
          <p>7-203</p>
          {/* image */}
        <RoomDetailCard />
        </div>
      <div className="request-room-section">
        <RequestForm />
      </div>
    </main>
  );
}
