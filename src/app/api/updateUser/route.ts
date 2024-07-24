import { CreateUser, GetUserByEmail } from "@/app/api/resources/controllers/User";
import { connectDB } from "@/app/api/resources/database/MongoConnect";
import { User } from "../resources/models/User";


export async function POST(req: Request) {
    try {
        await connectDB()
        //   const { body } = await req.json();
        const {
            _id,
            email,
            avatar,
            name,
            country
        } = await req.json();
        if (!_id) {
            return new Response(JSON.stringify({ message: 'Not id founded', status: 400, }))
        }
        const userFound = await User.findById(_id)
        if (userFound._id) {
            if (email) {
                userFound.email = email
            }
            if (avatar) {
                userFound.avatar = avatar
            }
            if (country) {
                userFound.survey.country = country
            }
            if (name) {
                userFound.name = name
            }
            await userFound.save()
            return new Response(JSON.stringify({ message: 'User created successfully', status: 200, user: userFound }))
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: 'error in signup route', error: error }))
    }
}