import "./style.css";
export default function Detail() {
    return (
        <div className="main">
            <b><p>Дэлгэрэнгүй:</p></b>
            <div >
                <p>Оюутны тоо:</p>
                <b><p className="studentNumber">20</p></b>
            </div>
            <div >
                <p>Хаана:</p>
                <b><p className="when">МУИС</p></b>
            </div>
            <div >
                <p>Хэзээ:</p>
                <b><p className="where">МУИС</p></b>
            </div>
            <b><p className="burt">Бүртгүүлэх</p></b>
            <div>
                <button className="submit-button"><b>Оролцох</b></button>
            </div>
        </div>
    );
}