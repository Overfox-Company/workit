import { CreateUser, GetUserByEmail } from "@/app/api/resources/controllers/User";
import { connectDB } from "@/app/api/resources/database/MongoConnect";
import { deleteFileFromCloudinary, uploadFileToCloudinary } from "../resources/functions/Cloudinary";
import { Company } from "../resources/models/Companys";
import { EditCompany } from "@/types/Company";
import { User } from "../resources/models/User";


export async function POST(req: Request) {
    try {
        await connectDB()
        const formData = await req.formData();

        const formDataObject: any = Object.fromEntries(formData.entries());
        const json: EditCompany = formDataObject;
        const { id_company, bg, avatar, email, bgColor, id_user } = json
        if (!id_company) {
            return new Response(JSON.stringify({ message: "Not find id", status: 400 }))
        }
        console.log(json)

        const companyToEdit = await Company.findById(id_company)
        if (bgColor) {
            if (companyToEdit.bgId) {
                await deleteFileFromCloudinary(companyToEdit.bgId)
            }
            companyToEdit.bgColor = bgColor
            companyToEdit.bg = ''
            companyToEdit.bgId = ''
        }
        if (bg) {
            if (companyToEdit.bgId) {
                await deleteFileFromCloudinary(companyToEdit.bgId)
            }
            const bgResult: any = await uploadFileToCloudinary(bg, companyToEdit._id)
            companyToEdit.bgId = bgResult.public_id
            companyToEdit.bg = bgResult.url
        }
        if (avatar) {
            if (companyToEdit.avatarId) {
                await deleteFileFromCloudinary(companyToEdit.avatarId)
            }
            const avatarResult: any = await uploadFileToCloudinary(avatar, companyToEdit._id)
            companyToEdit.avatarId = avatarResult.public_id
            companyToEdit.avatar = avatarResult.url
        }
        if (email) {
            companyToEdit.email = email
        }

        await companyToEdit.save()
        if (id_user) {
            const ownerUser = await User.findById(id_user)
            ownerUser.firstTime = false
            await ownerUser.save()
        }

        return new Response(JSON.stringify({ message: "companyUpdate", company: companyToEdit, status: 200 }))

    } catch (error) {
        return new Response(JSON.stringify({ message: 'error in signup route', error: error }))
    }
}