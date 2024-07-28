import { Company } from "../models/Companys"

export const GetAllCompanysByOwner = async (idUser: string) => {

    const companys = await Company.find({ idOwner: idUser })

    return companys
}