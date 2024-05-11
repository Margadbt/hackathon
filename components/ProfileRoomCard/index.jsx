import "./style.css";

const ProfileRoomCard = () => {
    return (
        <article className="class-section-2">
            <img
                src="https://source.unsplash.com/random/400x250/?classroom,lesson&${i}"
                alt="classroom-picture"
                class="image"
              />
            <section className="details">
                
                    <div className="font">
                        <h3>1-407</h3>
                        <div className="class-type">Лекц</div>
                    </div>
                <ul>
                    <li class="class-day">03.05-Мя</li>
                    <li>
                        <button><span>16:00</span></button>
                    </li>
                    <li>
                        <button><span>16:00</span></button>
                    </li>
                </ul>
            </section>
            <div className="cancel">
                <button>
                    {/* <img src={cancelIcon} alt="cancel" /> */}
                </button>
            </div>
        </article>
    );
};

export default ProfileRoomCard;
// import heartGreyIcon from './styles/assets/Heart-grey.svg'; // Adjust the path as necessary

