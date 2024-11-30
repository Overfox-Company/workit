import { CreateUser, GetUserByEmail } from "@/app/api/resources/controllers/User";
import { connectDB } from "@/app/api/resources/database/MongoConnect";
import { deleteFileFromCloudinary, uploadFileToCloudinary } from "../resources/functions/Cloudinary";
import { Company } from "../resources/models/Companys";
import { AddFile, EditCompany } from "@/types/Company";
import { User } from "../resources/models/User";
import { File } from "../resources/models/Files";


export async function POST(req: Request) {
    try {
        await connectDB()
        const formData = await req.formData();

        const formDataObject: any = Object.fromEntries(formData.entries());
        const json: AddFile = formDataObject;
        const { id_company, file, id_user } = json
        if (!id_company || !id_user || !file) {
            return new Response(JSON.stringify({ message: "You need all camps", status: 400 }))
        }
        const verifyCompany = await Company.findById(id_company)
        const verifyUser = await User.findById(id_user)
        if (!verifyCompany || !verifyUser) {
            return new Response(JSON.stringify({ message: "ids not valid", status: 400 }))
        }
        const fileResult: any = await uploadFileToCloudinary(file, id_company)
        const newFile = new File({
            id_company: verifyCompany._id,
            id_user: verifyUser._id,
            public_id: fileResult.public_id,
            url: fileResult.url
        });

        await newFile.save()


        return new Response(JSON.stringify({ message: "File uploaded", file: newFile, status: 200 }))

    } catch (error) {
        return new Response(JSON.stringify({ message: 'error in signup route', error: error }))
    }
}