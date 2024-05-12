import React from 'react';
import './style.css'
const RequestedEventClass = ({data}) => {


    return (
        <div>
                <div className="admin-container">
                    <p><b>{data.date}</b></p>
                    <div className="request-day">
                        <h2 ><b></b></h2>
                        <div className="request-item">
                            <div className="time-room">
                                <p>1-407 · Лекц</p>
                                <p>16:00</p>
                            </div>
                            <div className="status">
                                <p>{data.purpose}</p>
                                <p>25 хүн</p>
                            </div>
                            <div className="actions">
                                <button className="approve">✅️</button>
                                <button className="reject">❌</button>
                            </div>
                        </div>
                        {/* Repeat .request-item for more requests */}
                    </div>
                    {/* Repeat .request-day for more days */}
                </div>

        </div>
    );
};

export default RequestedEventClass;
