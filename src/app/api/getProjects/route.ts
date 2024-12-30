import { CreateUser, GetUserByEmail, LoginCredentials, LoginGoogle, UpdateGoogleId } from "@/app/api/resources/controllers/User";
import { GetAllCompanysByOwner } from "../resources/controllers/Company";
import { connectDB } from "../resources/database/MongoConnect";
import { Projects } from "../resources/models/Projects";


export async function POST(req: Request) {
    try {
        await connectDB()
        const { id } = await req.json();
        console.log(id)
        const allProjects = await Projects.find({ id_company: id }).sort({ createdAt: -1 });
        return new Response(JSON.stringify({ message: 'Get projects', projects: allProjects, status: 200 }))

    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: 'error en la api', error: error }))
    }
}