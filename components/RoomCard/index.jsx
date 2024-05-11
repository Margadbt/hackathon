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
};

export default RoomCard;
// import heartGreyIcon from './styles/assets/Heart-grey.svg'; // Adjust the path as necessary
