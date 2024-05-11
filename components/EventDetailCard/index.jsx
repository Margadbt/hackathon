import "./style.css"
export default function Detail() {
    return (
      <div className="event-detail-card">
        <p>Дэлгэрэнгүй</p>
        <div className="studentNumber">
            <p>Оюутны тоо:</p>
            <p className="num">20</p>
        </div>
        <div className="where">
            <p>Хаана:</p>
            <p className="num">20</p>
        </div>
        <div>
            <p>Оюутны тоо:</p>
            <p>20</p>
        </div>
        <p>Бүртгүүлэх</p>
        <div>
            <button className="submit-button">Оролцох</button>
        </div>
      </div>
    );
}