import React from 'react'

const EventCard = () => {
  return (
    <article className="class-section-2">
            <div className="img">
                {/* <img src='{classImage}' alt="classroom picture" className="image" /> */}
            </div>
            <section className="details">
                <div className="heartdetailsgrid">
                    <div className="font">
                        <h3>Hackathon</h3>
                        <div className="class-type">Hackum</div>
                    </div>
                    {/* <img src={ heartGreyIcon } alt="like this class" className="heart-grey" /> */}
                </div>
                <ul>
                    <li>8-409</li>
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
  )
}

export default EventCard