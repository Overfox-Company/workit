import { CreateUser, GetUserByEmail } from "@/backend/controllers/User";
import { connectDB } from "@/backend/database/MongoConnect";


export async function POST(req: Request) {
    try {
        await connectDB()
        //   const { body } = await req.json();
        const { email, password, avatar, google } = await req.json();
        const userFound = await GetUserByEmail(email);
        if (userFound._id) {
            return new Response(JSON.stringify({ message: 'Ya existe un usuario con este correo', status: 401 }))
        }
        const userCreated = await CreateUser({ email, avatar, password, google })
        if (userCreated._id) {
            return new Response(JSON.stringify({ message: 'El usuario se ha creado exitosamente', status: 200, user: userCreated }))
        } else {
            return new Response(JSON.stringify({ message: userCreated, status: 409 }))
        }
    } catch (error) {
        return new Response(JSON.stringify({ message: 'error en la api', error: error }))
    }
}