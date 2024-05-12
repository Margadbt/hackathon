"use client"
import React, { useState } from 'react';
import './style.css'
const RequestedEventClass = ({data}) => {
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const [status, setStatus] = useState(data.status);

    function approve(){
        const datareq = {
            id: data.id,
            status: "approved"
          };
          
          fetch('/api/room/request/approve', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datareq)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            setStatus("approved");
            return response.text();
          })
          .then(text => {
            console.log('Response:', text);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }

    function declined(){
        const datareq = {
            id: data.id,
            status: "declined"
          };
          
          fetch('/api/room/request/approve', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datareq)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            setStatus("declined");
            return response.text();
          })
          .then(text => {
            console.log('Response:', text);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }
    console.log("Rendering with status:", status);

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
