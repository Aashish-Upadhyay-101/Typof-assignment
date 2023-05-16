import express, { Request, Response, Express } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    console.log("helloworld");
    res.status(200).json({
        status: "success",
        message: "Hello Typof",
    })
})

app.listen(8080, () => {
    console.log(`Server running on http://localhost:8080`);
})