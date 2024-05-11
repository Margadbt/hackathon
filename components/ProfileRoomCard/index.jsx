import React from 'react';
import "./style.css"
import "../../public/All.css"
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
// import heartGreyIcon from './styles/assets/Heart-grey.svg'; // Adjust the path as necessary

