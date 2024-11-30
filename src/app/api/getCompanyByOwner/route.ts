import { CreateUser, GetUserByEmail, LoginCredentials, LoginGoogle, UpdateGoogleId } from "@/app/api/resources/controllers/User";
import { connectDB } from "../resources/database/MongoConnect";
import { Company } from "../resources/models/Companys";


export async function POST(req: Request) {
    try {
        await connectDB()
        const { id_user } = await req.json();
        if (!id_user) {
            return new Response(JSON.stringify({ message: 'error not id', }))

        }
        const Allcompanys = await Company.find({ idOwner: id_user })
        return new Response(JSON.stringify({ message: 'findCompanys', companys: Allcompanys }))
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: 'error en la api', error: error }))
    }
}