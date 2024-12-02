import { CreateUser, GetUserByEmail } from "@/app/api/resources/controllers/User";
import { connectDB } from "@/app/api/resources/database/MongoConnect";
import { User } from "../resources/models/User";
import { Company } from "../resources/models/Companys";
import { Projects } from "../resources/models/Projects";


export async function POST(req: Request) {
    try {
        await connectDB()

        const {
            name,
            bg,
            avatar,
            id_company

        } = await req.json();
        const newProject = new Projects({
            name,
            bg,
            avatar,
            id_company
        })
        await newProject.save()
        const allProjects = await Projects.find({ id_company })
        return new Response(JSON.stringify({ message: 'Company created successfully', status: 200, projects: allProjects }))

    } catch (error) {
        return new Response(JSON.stringify({ message: 'error in signup route', error: error }))
    }
}