import "./style.css";
export default function EventDetailCard() {
    return (
      <div className="main">
        <p>Дэлгэрэнгүй</p>
        <p></p>
        <div className="studentNumber">
           
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