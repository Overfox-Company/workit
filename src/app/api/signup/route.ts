import { CreateUser, GetUserByEmail } from "@/app/api/resources/controllers/User";
import { connectDB } from "@/app/api/resources/database/MongoConnect";


export async function POST(req: Request) {
    try {
        await connectDB()
        //   const { body } = await req.json();
        const { email, password, avatar, google, name } = await req.json();
        const userFound = await GetUserByEmail(email);
        if (userFound._id && userFound.googleId) {
            return new Response(JSON.stringify({ message: 'There is already an account with this email address associated with google', status: 203 }))
        }
        if (userFound._id) {
            return new Response(JSON.stringify({ message: 'There is already an account with this email', status: 203 }))
        }
        const userCreated = await CreateUser({ email, avatar, password, google, name })
        if (userCreated._id) {
            return new Response(JSON.stringify({ message: 'User created successfully', status: 200, user: userCreated }))
        } else {
            return new Response(JSON.stringify({ message: userCreated, status: 409 }))
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: 'error in signup route', error: error }))
    }
}