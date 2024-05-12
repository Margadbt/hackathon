
"use client";
import RequestedEventClass from "@/components/RequestedEventClass";
import './style.css';
import {useEffect, useState} from "react";

export default function Admin() {
    const [data,setData] = useState([]);
    useEffect(() => {
        async function getData(data) {
            try {
                const response = await fetch("/api/room/request/get")
                const result = await response.json();
                setData((result));
                console.log(result);
            } catch (error) {
                console.error('Failed to post request:', error);
                throw error;
            }
        }
        getData()

    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div className="dashboard-container">
                {data.map(item =>
                <RequestedEventClass data={item} />
                )}
            </div>
        </div>
    );
}
