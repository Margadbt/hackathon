import React from 'react';
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
