import ApiController from "@/ApiController/ApiController"
import { userType } from "@/types/User"
import { Dispatch, SetStateAction } from "react"

export const AddCountry = async (value: string, id: string, setUser: Dispatch<SetStateAction<userType>>) => {
    const dataSend = {
        _id: id,
        country: value

    }
    const result = await ApiController.updateUser(dataSend)
    const { status, data } = result
    console.log(result)
    if (status === 200) {
        setUser(data.user)
        return true
    } else {
        return false
    }

}