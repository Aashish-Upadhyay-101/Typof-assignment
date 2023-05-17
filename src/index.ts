import express, { Request, Response, Express } from "express";

// dotenv configure
require("dotenv").config();

const app: Express = express();

const port = process.env.PORT || 8080;

// database setup

// multer configuration

app.post("/images", (req: Request, res: Response) => {});

app.get("/images", (req: Request, res: Response) => {});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
