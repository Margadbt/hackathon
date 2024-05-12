"use client"
import React, { useState } from 'react';
import './style.css'
const RequestedEventClass = ({data}) => {


    return (
        <div>
                <div className={`admin-container`}>
                    <p><b>{data.date}</b></p>
                    <div className={`request-day ${data.status == "approved" ? "approved" : data.status == "declined" ? "declined" : ""} `}>
                        <h2 ><b></b></h2>
                        <div className={`request-item `}>
                            <div className="time-room">
                                <p>{data.room} · Лекц</p>
                                <p>16:00</p>
                            </div>
                            <div className="status">
                                <p>{data.purpose}</p>
                                <p>{data.people_count}-хүн</p>
                                
                            </div>
                            <div className="status">
                                <p>{data.phone_num_one}</p>
                                
                            </div>
                            <button className='more-btn' onClick={togglePopUp}>...</button>
                            
                            <div className="actions">
                                <button className="approve" onClick={approve}>✅️</button>
                                <button className="reject" onClick={declined}>❌</button>
                            </div>
                        </div>
                       
                        {/* Repeat .request-item for more requests */}
                    </div>
                    {isPopUpVisible && (<div className="popup-status">
                                <p>{data.description}</p>
                                <p>{data.phone_num_two}</p>
                               
                            </div>)}
                    {/* Repeat .request-day for more days */}
                </div>

        </div>
    );
};

export default RequestedEventClass;
