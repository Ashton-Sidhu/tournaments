import React, { useState, useEffect } from "react";
import "./events.scss";

interface Event {
    id: string;
    name: string;
    date: string;
    location: string;
}

const EventsHome: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, []);

    const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).slice(0, 3);

    return (
        <div className="events-home">
            <h1>Upcoming Events</h1>
            <div className="events-list">
                {upcomingEvents.map((event) => (
                    <div key={event.id} className="event-card">
                        <h2>{event.name}</h2>
                        <p className="event-date">{event.date}</p>
                        <p className="event-location">{event.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsHome;
