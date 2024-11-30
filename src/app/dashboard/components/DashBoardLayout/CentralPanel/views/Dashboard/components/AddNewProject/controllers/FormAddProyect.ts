import ApiController from "@/ApiController/ApiController"
import { CompanyType } from "@/types/Company"
import { Dispatch, SetStateAction } from "react"

export const onDropImageBg = async (File: File,
    setLoadBg: Dispatch<SetStateAction<boolean>>,
    setOpacityBg: Dispatch<SetStateAction<number>>,
    company: CompanyType,
    setNewCompany: Dispatch<SetStateAction<CompanyType>>
) => {
    setLoadBg(true)
    setTimeout(() => {
        setOpacityBg(1)
    }, 10)
    const form: any = new FormData()
    form.append("bg", File)
    console.log(company)
    if (company._id) {
        form.append("id_company", company._id)
    }


    const res = await ApiController.editCompany(form)
    console.log(res)
    const { company: companyServer } = res.data
    if (companyServer) {
        setNewCompany(companyServer)

    }
    setTimeout(() => {
        setOpacityBg(0)
    }, 1000)
    setTimeout(() => {
        setLoadBg(false)
    }, 1300)

}
export const onDropImageAvatar = async (
    File: File,
    setLoadAvatar: Dispatch<SetStateAction<boolean>>,
    setOpacityAvatar: Dispatch<SetStateAction<number>>,
    company: CompanyType,
) => {
    setLoadAvatar(true)
    setTimeout(() => {
        setOpacityAvatar(1)
    }, 10)
    const form: any = new FormData()
    form.append("avatar", File)
    if (company._id) {
        form.append("id_company", company._id)
    }
    const res = await ApiController.editCompany(form)

    //falta añadir parte de este codigo
    setTimeout(() => {
        setOpacityAvatar(0)
    }, 1000)
    setTimeout(() => {
        setLoadAvatar(false)
    }, 1300)

}
export const onChangeColor = async (color: string) => {

    setLoadBg(true)
    setTimeout(() => {
        setOpacityBg(1)
    }, 10)
    const formData: any = new FormData()
    if (newCompany._id) {
        formData.append("id_company", newCompany._id)
    }
    formData.append("bgColor", color)
    const res = await ApiController.editCompany(formData)
    console.log(res)
    const { company } = res.data
    if (company) {
        setNewCompany(company)

    }
    setColor(color)
    setTimeout(() => {
        setOpacityBg(0)
    }, 1000)
    setTimeout(() => {
        setLoadBg(false)

    }, 1300)
}
export const onSendEmail = async (email: string) => {
    const formData: any = new FormData()
    if (newCompany._id) {
        formData.append("id_company", newCompany._id)
    }
    formData.append("id_user", user._id)
    formData.append("email", email)
    const result = await ApiController.editCompany(formData)
    const { company, message } = result.data
    if (company) {
        setNewCompany(company)
        route.push('/dashboard')
    } else {
        setSnackbarOpen({ message, type: "error" })
    }
}