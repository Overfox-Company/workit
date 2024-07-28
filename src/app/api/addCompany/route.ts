import { CreateUser, GetUserByEmail } from "@/app/api/resources/controllers/User";
import { connectDB } from "@/app/api/resources/database/MongoConnect";
import { User } from "../resources/models/User";
import { Company } from "../resources/models/Companys";


export async function POST(req: Request) {
    try {
        await connectDB()

        const {
            id: userID,
            email,
            avatar,
            nameCompany,
            bg,
        } = await req.json();
        if (!userID) {
            return new Response(JSON.stringify({ message: 'Not id', status: 400, }))
        }
        if (!nameCompany) {
            return new Response(JSON.stringify({ message: 'Not name', status: 400, }))
        }
        const newCompany = new Company({
            email,
            avatar,
            name: nameCompany,
            bg,
            firstCompnayByOwner: true,
            idOwner: userID
        })
        await newCompany.save()

        return new Response(JSON.stringify({ message: 'Company created successfully', status: 200, company: newCompany }))

    } catch (error) {
        return new Response(JSON.stringify({ message: 'error in signup route', error: error }))
    }
}