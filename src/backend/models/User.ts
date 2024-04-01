import { UserDocument } from '@/types/User';
import { Document, Schema, model, models } from 'mongoose';

const UserSchema = new Schema({

    user: { type: String },
    survey: {
        typeUser: {
            type: String,
            require: true
        },
        country: {
            type: String,
            require: true
        },
    },
    initSurveyComplete: { type: Boolean },
    email: { type: String },
    name: { type: String },
    password: { type: String },
    lastName: { type: String },
    phone: { type: String },
    avatar: { type: String },
    country: { type: String },
    id: { type: String },
    BackgroundImage: { type: String },
    client: { type: Boolean },
    companyOwner: [{ type: Schema.Types.ObjectId, ref: "Company" }],
    company: [{ type: Schema.Types.ObjectId, ref: "Company" }],
    Subscription: {
        type: Object,
        properties: {
            name: { type: String },
            dateStart: { type: String },
            dateEnd: { type: String },
        },
    },
    googleId: { type: String },
    income: { type: Number },
    joinDate: { type: Date },
    verified: { type: Boolean },
    methodRegister: { type: String },
    firstTime: { type: Boolean },
    customerCompanies: [{ type: Schema.Types.ObjectId, ref: "Company" }]
});

export const User = models.User || model<UserDocument>("User", UserSchema);
