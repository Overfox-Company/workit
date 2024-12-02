import mongoose from "mongoose";
import { Document, Schema, model, models } from 'mongoose';


const ProjectsSchema = new Schema({
    name: { type: String, required: true },
    bg: { type: String },
    bgColor: { type: String },
    bgId: { type: String },
    avatar: { type: String, },
    avatarId: { type: String, },
    id_company: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, {
    timestamps: true
});

export const Projects = models.Projects || model("Projects", ProjectsSchema);