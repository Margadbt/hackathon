import RequestForm from "@/components/RequestForm";
import RoomDetailCard from "@/components/RoomDetailCard";

export default function Room() {
  return (
    <main>
      <div>
        <p>7-203</p>
        {/* image */}
      </div>
      <RoomDetailCard />
      <div className="request-room-section">
        <RequestForm />
      </div>
    </main>
  );
}
