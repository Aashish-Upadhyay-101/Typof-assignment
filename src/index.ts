import express, { Express, Request, Response } from "express";
import path from "path";
import multer from "multer";
import { imageRetrieveController, imageUploadController } from "./imageController";

// dotenv configure
require("dotenv").config();

const app: Express = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static("uploads"));

// database setup
const DB = process.env.DATABASE?.replace("<password>", process.env.PASSWORD!);

// multer setup
const storageEngine = multer.diskStorage({
    destination: "./uploads",
    filename: (_, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({
    storage: storageEngine,
});

app.post("/images", upload.single("image"), imageUploadController);

app.get("/images", imageRetrieveController);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
