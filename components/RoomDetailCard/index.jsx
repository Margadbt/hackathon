import "./style.css"
export default function RoomDetailCard() {
  return (
    <div className="room-detail-card-container">
      <div className="room-detail-card">
        <div style={{borderRight: "2px solid rgb(0, 0, 0, 0.1)"}}>Лекц</div>
        <div style={{borderRight: "2px solid rgb(0, 0, 0, 0.1)"}}>
          <p>Суудлын тоо</p>55
        </div>
        <div>
          <p>Проектор</p>Icon
        </div>
      </div>
    </div>
  );
}
