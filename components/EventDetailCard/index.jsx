import "./style.css";
export default function EventDetailCard({ data }) {
  return (
    <div className="main">
      <p className="descp">Дэлгэрэнгүй</p>
      <p className="desc">{data.description}</p>
      <div>
        <p>Хаана:</p>
        <p className="when">{data.location}</p>
      </div>
      <div>
        <p>Хэзээ:</p>
        <p className="where">{data.date}</p>
      </div>
      <b></b>
      <div>
        <button className="submit-button"> Бүртгүүлэх</button>
      </div>
    </div>
  );
}
