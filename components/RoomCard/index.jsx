import React from 'react';
import "./style.css"
const RoomCard = () => {
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

