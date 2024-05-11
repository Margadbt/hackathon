import React from 'react';
import "./style.css"
import "../../public/All.css"

const RoomCard = ({ data, index }) => {
    // Encode data for URL
    const encodedData = encodeURIComponent(JSON.stringify(data));

    // Construct the URL for the classroom image
    const imageUrl = `https://source.unsplash.com/random/400x250/?classroom,lesson&${index}`;

    // Static values
    const building = 'Building';
    const roomNo = 'Room Number';
    const type = 'Type';
    const capacity = 'Capacity';
    const projector = 'Projector';

    return (
        <a href={`class.html?id=${encodedData}`} className="class-section-1">
            <article className="class-section-1">
                <img
                    src={imageUrl}
                    alt="classroom picture"
                    className="image"
                />
                <div className="text-wrapper">
                    <div className="head-wrapper">
                        <h5>{`${building} - ${roomNo}`}</h5>
                        <img
                            src='{heartGreyIcon}'
                            alt="like this class"
                            className="heart-grey"
                        />
                    </div>
                    <div className="class-type">{type}</div>
                    <div className="class-info">
                        <div className="seat-count">{capacity}</div>
                        <div className="projector">
                            {projector === "Проектортой"
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
