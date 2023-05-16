import express, { Request, Response, Express } from "express";

require("dotenv").config();

const app: Express = express();

const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
    console.log("helloworld");
    res.status(200).json({
        status: "success",
        message: "Hello Typof",
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
