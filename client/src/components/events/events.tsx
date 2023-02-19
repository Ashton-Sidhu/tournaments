import React, { useState, useEffect } from "react";
import "./events.scss";

interface Event {
    id: string;
    name: string;
    date: string;
    location: string;
    description: string;
    time: string;
}

const Events: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        fetch("/api/events")
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, []);

    const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());

    return (
        <div className="events">
            <h1>Upcoming Events</h1>
            <div className="events-list">
                {upcomingEvents.map(event => (
                    <div key={event.id} className="event-card" onClick={() => setSelectedEvent(event)}>
                        <h2>{event.name}</h2>
                        <div className="event-date">{event.date}</div>
                    </div>
                ))}
            </div>
            {selectedEvent && (
                <div className="event-details-modal">
                    <div className="event-details">
                        <h1>{selectedEvent.name}</h1>
                        <div className="event-date">Date: {selectedEvent.date}</div>
                        <div className="event-time">Time: {selectedEvent.time}</div>
                        <div className="event-location">Location: {selectedEvent.location}</div>
                        <div className="event-description">Description: {selectedEvent.description}</div>
                        <button className="register-button">Register</button>
                        <button onClick={() => setSelectedEvent(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
