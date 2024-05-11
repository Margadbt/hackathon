import React from 'react';
<<<<<<< HEAD
// import classImage from './src/assets/class.jpg';
// import heartGreyIcon from './src/assets/Heart-grey.svg';
// import './src/styles/RoomCartComponent.css';
// import cancelIcon from './src/assets/cancal.png';
import "./style.css"

const ProfileRoomCard = () => {
    return (
        <article className="class-section-2">
            <div className="img">
                {/* <img src='{classImage}' alt="classroom picture" className="image" /> */}
            </div>
            <section className="details">
                <div className="heartdetailsgrid">
                    <div className="font">
                        <h3>1-407</h3>
                        <div className="class-type">Лекц</div>
                    </div>
                    {/* <img src={ heartGreyIcon } alt="like this class" className="heart-grey" /> */}
                </div>
                <ul>
                    <li>03.05-Мя</li>
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
=======
// import heartGreyIcon from './styles/assets/Heart-grey.svg'; // Adjust the path as necessary

const RoomCard = ({ data, index }) => {
    // Encode data for URL
    const encodedData = encodeURIComponent(JSON.stringify(data));

    // Construct the URL for the classroom image
    const imageUrl = `https://source.unsplash.com/random/400x250/?classroom,lesson&${index}`;

    return (
        <a href={`class.html?id=${encodedData}`} className="class-section-1">
            <article>
                <img
                    src={imageUrl}
                    alt="classroom picture"
                    className="image"
                />
                <div className="text-wrapper">
                    <div className="head-wrapper">
                        <h3>{'${data.building} - ${data.roomNo}'}</h3>
                        <img
                            src='{heartGreyIcon}'
                            alt="like this class"
                            className="heart-grey"
                        />
                    </div>
                    <div className="class-type">{"data.type"}</div>
                    <div className="class-info">
                        <div className="seat-count">{"data.capacity"}</div>
                        <div className="projector">
                            {"data.projector" === "Проектортой"
                                ? <div className="projector proj-on"></div>
                                : <div className="projector proj-off"></div>
                            }
                        </div>
                    </div>
                </div>
            </article>
        </a>
    );
};

export default RoomCard;
>>>>>>> origin/main
