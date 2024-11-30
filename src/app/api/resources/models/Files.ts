import mongoose from "mongoose";
import { Document, Schema, model, models } from 'mongoose';


const FileSchema = new Schema({
    id_company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    id_user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    url: { type: String, required: true },
    public_id: { type: String, required: true },
}, {
    timestamps: true
});

export const File = models.File || model("File", FileSchema);