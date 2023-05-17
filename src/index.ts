import express, { Express } from "express";
import multer from "multer";
import { imageRetrieveController, imageUploadController } from "./imageController";

// dotenv configure
require("dotenv").config();

const app: Express = express();

const port = process.env.PORT || 8080;

// database setup

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
