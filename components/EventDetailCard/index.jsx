import "./style.css";
export default function EventDetailCard() {
    return (
      <div className="main">
        <p>Дэлгэрэнгүй</p>
        <div className="studentNumber">
            <p>Оюутны тоо:</p>
            <p className="num">20</p>
        </div>
        <div >
            <p>Хаана:</p>
           <p className="when">МУИС 8-р байр 409 тоот</p>
        </div>
        <div>
            <p>Хэзээ:</p>
            <p className="where">2024.05.30</p>
        </div>
        <b><p>Бүртгүүлэх</p></b>
        <div>
            <button className="submit-button">Оролцох</button>
        </div>
      </div>
    );
}