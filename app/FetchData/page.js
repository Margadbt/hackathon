'use client'
import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, get, query, limitToFirst } from "firebase/database";
import RoomCard from '../../components/RoomCard'; // Ensure this path is correct

function FetchData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const dbRef = ref(database);
        // Assuming you are querying a list of rooms
        const limitedQuery = query(dbRef, limitToFirst(100)); // Adjust based on your data structure
        get(limitedQuery).then((snapshot) => {
            if (snapshot.exists()) {
                setData(Object.values(snapshot.val())); // Convert object to array if necessary
            } else {
                console.log('No data available');
                setData([]);
            }
        }).catch((error) => {
            console.error("Failed to retrieve data: ", error);
            setError(error);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {data.map((room, index) => (
                <RoomCard key={index} room={room} />
            ))}
        </div>
    );
}

export default FetchData;
