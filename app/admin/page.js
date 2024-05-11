// pages/admin.js
'use client'
import { useState } from 'react';
import RequestedEventClass from "@/components/RequestedEventClass";
import './style.css'
export default function Admin() {

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div class="dashboard-container">
            <RequestedEventClass></RequestedEventClass>
            <RequestedEventClass></RequestedEventClass>
            <RequestedEventClass></RequestedEventClass>
            <RequestedEventClass></RequestedEventClass>
            <RequestedEventClass></RequestedEventClass>
            </div>

        </div>
    );
}
