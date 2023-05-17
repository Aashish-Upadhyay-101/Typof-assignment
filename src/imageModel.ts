import mongoose from "mongoose";

interface IImage {
    name: string;
    url: string;
}

const imageSchema = new mongoose.Schema<IImage>({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
});

const Image = mongoose.model<IImage>("Image", imageSchema);
