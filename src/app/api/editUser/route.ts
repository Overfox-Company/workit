import { CreateUser, GetUserByEmail } from "@/app/api/resources/controllers/User";
import { connectDB } from "@/app/api/resources/database/MongoConnect";
import { User } from "../resources/models/User";


export async function POST(req: Request) {
    try {
        await connectDB()

        const { email, password, avatar, google, name, id } = await req.json();
        if (!id) {
            return new Response(JSON.stringify({ message: 'error not id', }))

        }
        const userToEdit = await User.findById(id)
        if (!userToEdit) {
            return new Response(JSON.stringify({ message: 'user dont exist', }))

        }
        if (email) {
            userToEdit.email = email
        }
        userToEdit.firstTime = false

        await userToEdit.save()
        return new Response(JSON.stringify({ message: 'user updated', editedUser: userToEdit }))
    } catch (error) {
        return new Response(JSON.stringify({ message: 'error in signup route', error: error }))
    }
}