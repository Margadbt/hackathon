'use client'
import "./style.css"
import React, { useEffect, useState } from 'react';
import RoomCard from '../../components/RoomCard'; // Ensure this path is correct

function FetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('https://sisi.num.edu.mn/digital_num/api/package/uruunii-medeelel');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                setData(json); // Make sure to adjust this according to the structure of your API response
            } catch (error) {
                console.error("Failed to fetch data: ", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Render loading state
    if (loading) return <div>Loading...</div>;
    // Render error state
    if (error) return <div>Error: {error.message}</div>;

    // Render list of rooms using RoomCard components
    return (
        <div className="RoomCard-container">
            {data.slice(0, 20).map((room, index) => (
                room.khicheeliin_bair.length >= 19 ? (
                    <RoomCard key={index} room={{...room, khicheeliin_bair: room.khicheeliin_bair.slice(-8)}} />
                ) : null
            ))}
        </div>
    );

}

export default FetchData;
