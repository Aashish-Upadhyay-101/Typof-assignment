import { Request, Response } from "express";

export const imageUploadController = async (req: Request, res: Response) => {
    if (req.file) {
        res.json({
            status: "success",
            message: "file uploaded successfully!",
        });
    } else {
        res.status(400).json({
            status: "failed",
            message: "file upload failed! Please upload a valid image.",
        });
    }
};

export const imageRetrieveController = async (req: Request, res: Response) => {};
