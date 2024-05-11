import React from 'react';

const RequestedEventClass = () => {
    const schedule = [
        {
            date: '03/11',
            sessions: [
                { time: '16:00 - 16:25', session: 'Лекц', duration: '25 мин', status: true },
                { time: '16:00 - 16:25', session: 'Лекц', duration: '25 мин', status: true },
                { time: '16:00 - 16:25', session: 'Лекц', duration: '25 мин', status: false }
            ]
        },
        {
            date: '03/13',
            sessions: [
                { time: '16:00 - 16:25', session: 'Лекц', duration: '25 мин', status: true },
                { time: '16:00 - 16:25', session: 'Лекц', duration: '25 мин', status: true }
            ]
        },
        {
            date: '03/14',
            sessions: [
                { time: '16:00 - 16:25', session: 'Лекц', duration: '25 мин', status: false }
            ]
        },
        {
            date: '03/15',
            sessions: [
                { time: '16:00 - 16:25', session: 'Лекц', duration: '25 мин', status: true },
                { time: '16:00 - 16:25', session: 'Лекц', duration: '25 мин', status: true }
            ]
        }
    ];

    return (
        <div>
            <h1>Schedule</h1>
            <div>
                {schedule.map((day, index) => (
                    <div key={index}>
                        <h2>{day.date}</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>Time</th>
                                <th>Session</th>
                                <th>Duration</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {day.sessions.map((session, idx) => (
                                <tr key={idx}>
                                    <td>{session.time}</td>
                                    <td>{session.session}</td>
                                    <td>{session.duration}</td>
                                    <td>{session.status ? '✅' : '❌'}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RequestedEventClass;
