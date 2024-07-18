export interface UserDocument extends Document {
    email: string;
    name: string;
}
export interface SessionData {
    data: {
        user?: {
            name?: string | null | undefined;
            email?: string | null | undefined;
            image?: string | null | undefined;
            _id?: string | null | undefined;
            id?: string | null | undefined; // Add the id property
        };
    };
    status: "loading" | "authenticated" | "unauthenticated";
}
export interface CreateUserType {
    email: string,
    password?: string,
    avatar?: string
    google?: string
    name: string
}
export interface loginUser {
    name?: string | undefined | null;
    email: string;
    password?: string;
    type?: string | undefined;
    googleId?: string | undefined | null;
    id?: string | undefined | null
}
export interface loginUserFormik {
    email: string;
    // userName:string
    password: string;
}
export interface registerUser {
    name: string;
    email: string;
    password: string;
    repeatPassword: string
}
