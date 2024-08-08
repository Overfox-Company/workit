import mongoose from "mongoose";
import { Document, Schema, model, models } from 'mongoose';


const CompanySchema = new Schema({
    name: { type: String, required: true },
    bg: { type: String },
    bgColor: { type: String },
    bgId: { type: String },
    email: { type: String },
    avatar: { type: String, },
    avatarId: { type: String, },
    firstCompnayByOwner: { type: Boolean },
    date: { type: String },
    idOwner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    workers: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, {
    timestamps: true
});

export const Company = models.Company || model("Company", CompanySchema);