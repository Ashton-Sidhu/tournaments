import React, { useState, useEffect } from "react";
import "./events.scss";
import { Button, Card, Descriptions } from 'antd';

interface Event {
    name: string;
    date: string;
    location: string;
    description: Array<string>;
    time: string;
    link: string;
    num_people: number;
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
                    <Card type="inner" title={event.name} className="event-card" bordered={false} extra={<Button type="primary" onClick={() => window.open(event.link, "_blank")}>Register</Button>} >
                        <Descriptions
                            title="Details"
                            bordered
                            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                        >
                            <Descriptions.Item label="Date">{event.date}</Descriptions.Item>
                            <Descriptions.Item label="Time">{event.time}</Descriptions.Item>
                            <Descriptions.Item label="Max Number of People">{event.num_people}</Descriptions.Item>
                            <Descriptions.Item label="Location">{event.location}</Descriptions.Item>
                            <Descriptions.Item label="Description" style={{ whiteSpace: 'break-spaces' }}>
                                {event.description.map(item => (item + "\n"))}
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                ))}
            </Card>
        </div>
    );
};

export default Events;
