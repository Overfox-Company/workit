import { CreateUser, GetUserByEmail, LoginCredentials, LoginGoogle, UpdateGoogleId } from "@/app/api/resources/controllers/User";
import { GetAllCompanysByOwner } from "../resources/controllers/Company";


export async function POST(req: Request) {
    try {
        const { email, password, googleId, type, id } = await req.json();
        let userFound;
        if (type === 'google') {
            userFound = await LoginGoogle({ email: email, googleId: googleId });
        }
        if (type === "credentials") {

            userFound = await LoginCredentials({ email, id })
        }
        if (userFound?._id) {
            const allCompanys = await GetAllCompanysByOwner(userFound._id)
            return new Response(JSON.stringify({ message: 'User found', status: 200, user: userFound, companys: allCompanys }))
        } else if (userFound === 'update') {
            const resultUser = await UpdateGoogleId({ email, googleId })
            return new Response(JSON.stringify({ message: 'User found', status: 200, user: resultUser }))
        } else {
            return new Response(JSON.stringify({ message: 'User not found', status: 404 }))
        }
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: 'error en la api', error: error }))
    }
}