import ApiController from "@/ApiController/ApiController"
import { CompanyType } from "@/types/Company"
import { userType } from "@/types/User"
import { Dispatch, SetStateAction } from "react"

export const onDropImageBg = async (
    File: File,
    setLoadBg: Dispatch<SetStateAction<boolean>>,
    setOpacityBg: Dispatch<SetStateAction<number>>,
    company: CompanyType,
    setNewProject: Dispatch<SetStateAction<any>>,
    user: userType
) => {
    setLoadBg(true)
    setTimeout(() => {
        setOpacityBg(1)
    }, 10)
    const form: any = new FormData()
    form.append("file", File)
    form.append("id_company", company._id)
    form.append("id_user", user._id)

    const result = await ApiController.uploadFiles(form)
    console.log(result)
    const { url, asset_id } = result.data.file
    setNewProject((prev: any) => ({ ...prev, bg: url, bgId: asset_id }))
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
    setNewProject: Dispatch<SetStateAction<any>>,
    user: userType
) => {
    setLoadAvatar(true)
    setTimeout(() => {
        setOpacityAvatar(1)
    }, 10)
    const form: any = new FormData()
    form.append("file", File)
    form.append("id_company", company._id)
    form.append("id_user", user._id)

    const result = await ApiController.uploadFiles(form)
    console.log(result)
    const { url, asset_id } = result.data.file
    setNewProject((prev: any) => ({ ...prev, avatar: url, avatarId: asset_id }))
    setTimeout(() => {
        setOpacityAvatar(0)
    }, 1000)
    setTimeout(() => {
        setLoadAvatar(false)
    }, 1300)

}
export const onChangeColor = async (color: string) => {

    /*  setLoadBg(true)
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
  
      }, 1300)*/
}
export const onSendEmail = async (email: string) => {
    /* const formData: any = new FormData()
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
     }*/
}