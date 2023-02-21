import React, { useState, useEffect } from "react";
import "./events.scss";
import { Button, Card, Descriptions } from 'antd';

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
                        <Descriptions
                            title="Details"
                            bordered
                            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                        >
                            <Descriptions.Item label="Date">{event.date}</Descriptions.Item>
                            <Descriptions.Item label="Time">{event.time}</Descriptions.Item>
                            <Descriptions.Item label="Location">{event.location}</Descriptions.Item>
                            <Descriptions.Item label="Description">{event.description}</Descriptions.Item>
                        </Descriptions>
                    </Card>
                ))}
            </Card>
        </div>
    );
};

export default Events;
