import "./style.css";
const RoomCard = () => {
  let i = Math.floor(Math.random() * 10000) + 1;

  return (
    <a href="#" class="class-section-1">
      <article>
        <img
          src={`https://source.unsplash.com/random/400x250/?classroom&${i}`}
          alt="classroom-picture"
          className="image"
        />
        <div class="text-wrapper">
          <div class="head-wrapper">
            <h3>4-107</h3>
          </div>
          <div class="class-type">Лекц</div>
          <div class="class-info">
            <div class="seat-count">55</div>
            <div class="projector">
              <div class="projector proj-on"></div>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
    return (
        <article className="class-section-2">
            <img
                src="https://source.unsplash.com/random/400x250/?classroom,lesson&${i}"
                alt="classroom-picture"
                className="image"
            />
            <section className="details">
                <div className="heartdetailsgrid">
                    <div className="font">
                        <h3>1-407</h3>
                        <div className="class-type">Лекц</div>
                    </div>
                    {/* <img src={ heartGreyIcon } alt="like this class" className="heart-grey" /> */}
                </div>
                <ul>
                    <li>Мэдээлэл</li>
                    <li>
                        <p><span>сандал</span></p>
                    </li>
                    <li>
                        <p><span>Багтаамж</span></p>
                    </li>
                </ul>
            </section>

        </article>
    );
};

export default RoomCard;
// import heartGreyIcon from './styles/assets/Heart-grey.svg'; // Adjust the path as necessary

