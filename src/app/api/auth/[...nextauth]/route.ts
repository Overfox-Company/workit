import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectDB } from '@/backend/database/MongoConnect';
import { User } from "@/backend/models/User";
import bcrypt from "bcryptjs";
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                await connectDB();
                const userFound = await User.findOne({
                    email: credentials.email,
                }).select("+password");

                if (!userFound) throw new Error("Invalid email");

                const passwordMatch = await bcrypt.compare(
                    credentials!.password,
                    userFound.password
                );
                if (userFound.googleId && !passwordMatch) {
                    throw new Error("There is already an account with this email address associated with google");
                }
                if (!passwordMatch) throw new Error("Invalid password");

                console.log(userFound);

                return userFound;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET_ID as string
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
        })],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as any;
            return session;
        },
    },
})
export { handler as GET, handler as POST }