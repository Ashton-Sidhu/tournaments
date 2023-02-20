import React, { useState, useEffect } from "react";
import "./events.scss";
import { Button, Card, Row, Col } from 'antd';

interface Event {
    id: string;
    name: string;
    date: string;
    location: string;
    description: string;
    time: string;
    link: string;
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
            <Card title="Upcoming Events">
                {upcomingEvents.map(event => (
                    <Card type="inner" title={event.name} className="event-card" bordered={false} extra={<Button type="primary" href={event.link}>Register</Button>} >
                        <p>{event.date}</p>
                    </Card>
                ))}
            </Card>
            {selectedEvent && (
                <div className="event-details-modal">
                    <div className="event-details">
                        <h1>{selectedEvent.name}</h1>
                        <div className="event-date">Date: {selectedEvent.date}</div>
                        <div className="event-time">Time: {selectedEvent.time}</div>
                        <div className="event-location">Location: {selectedEvent.location}</div>
                        <div className="event-description">Description: {selectedEvent.description}</div>
                        <Button type="primary">Register</Button>
                        <Button onClick={() => setSelectedEvent(null)}>Close</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Events;
