
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";

//   dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const events = [
    { id: 1, name: "Event 1", date: "01/01/2024", location: "New York" },
    { id: 2, name: "Event 2", date: "02/01/2024", location: "Los Angeles" },
    { id: 3, name: "Event 3", date: "03/01/2024", location: "Chicago" }
];

app.get("/api/events", (req: Request, res: Response) => {
    res.json(events);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
