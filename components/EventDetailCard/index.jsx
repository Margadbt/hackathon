<<<<<<< HEAD
export default function Detail() {
=======
import "./style.css"
export default function EventDetailCard() {
>>>>>>> 6d5a4e1cf41bc484f00dc51ba9cf69a9acfd24ee
    return (
      <div className="main">
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