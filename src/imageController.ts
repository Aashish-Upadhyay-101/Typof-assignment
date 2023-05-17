import { Request, Response } from "express";
import { Image } from "./imageModel";

export const imageUploadController = async (req: Request, res: Response) => {
    try {
        if (req.file) {
            const newImage = await Image.create({
                name: req.file.originalname,
                url: `http://localhost:${process.env.PORT}/${req.file.filename}`,
            });
            res.status(201).json({
                status: "success",
                message: "file uploaded successfully!",
                image: newImage,
            });
        } else {
            res.status(400).json({
                status: "failed",
                message: "file upload failed! Please upload a valid image.",
            });
        }
    } catch (err) {
        console.log(err);
    }
};

export const imageRetrieveController = async (req: Request, res: Response) => {
    try {
        const images = await Image.find();
        res.status(200).json({
            status: "success",
            images,
        });
    } catch (err) {
        console.log(err);
    }
};
