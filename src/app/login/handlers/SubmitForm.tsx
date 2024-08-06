import { loginUser } from "@/types/User";
import ApiController from "@/ApiController/ApiController";
import { SnackbarInitial } from "@/types/App";
import { signIn } from "next-auth/react";
export const HandleSubmitForm = async (
    values: loginUser,
    setSnackbarOpen: React.Dispatch<React.SetStateAction<typeof SnackbarInitial>>) => {
    const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
    });
    if (res?.error) {
        setSnackbarOpen({ message: res?.error, type: "error" })
        return false
    }
    localStorage.setItem('typeInit', 'login')
    localStorage.setItem('typeLogin', 'credentials')
    return true
}