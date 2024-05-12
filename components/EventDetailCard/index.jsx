import "./style.css";
export default function EventDetailCard({data}) {
    return (
      <div className="main">
        <p>Дэлгэрэнгүй</p>
        <div >
            <p>Хаана:</p>
           <p className="when">{data.location}</p>
        </div>
        <div>
            <p>Хэзээ:</p>
            <p className="where">{data.date}</p>
        </div>
        <b><p>Бүртгүүлэх</p></b>
        <div>
            <button className="submit-button">Оролцох</button>
        </div>
      </div>
    );
}