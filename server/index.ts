
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";

//   dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const events = [
    { name: "1 on 1 Tournament", date: "March 11, 2023", time: "1:00PM - 6:00PM", num_people: 12, location: "King's Court Etobicoke - 1589 The Queensway, Etobicoke, ON M8Z 1V1", link: "https://forms.gle/7pig9exCbKrYocgK6", description: ["1 on 1 ball tournament with a 5 on 5 run after.", "Round robin followed by BO3 single elimination."] },
];

app.get("/api/events", (req: Request, res: Response) => {
    res.json(events);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
