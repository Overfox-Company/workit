import { CreateUser, GetUserByEmail, LoginCredentials, LoginGoogle, UpdateGoogleId } from "@/app/api/resources/controllers/User";


export async function GET(req: Request) {
    try {
        return new Response(JSON.stringify({ message: 'Api funcionando', }))
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: 'error en la api', error: error }))
    }
}