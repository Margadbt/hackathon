// pages/admin.js
'use client'
import { useState } from 'react';
import RequestedEventClass from "@/components/RequestedEventClass";

export default function Admin() {

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <RequestedEventClass></RequestedEventClass>
        </div>
    );
}
