import ApiController from "@/ApiController/ApiController";
import { SnackbarInitial } from "@/types/App";
import { loginUser, registerUser } from "@/types/User";
import { signIn } from "next-auth/react";

export const HandleSubmitForm = async (
    values: registerUser,
    setloading: React.Dispatch<React.SetStateAction<boolean>>,
    setSnackbarOpen: React.Dispatch<React.SetStateAction<typeof SnackbarInitial>>
) => {

    const result = await ApiController.registerUserForm(values)
    console.log("resultado de login")
    console.log(result)

    if (result.data.status === 401) {
        setSnackbarOpen({ message: result.data.message, type: 'error' })
    } else {
        localStorage.setItem('typeInit', 'login')
        localStorage.setItem('typeLogin', 'credentials')
        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });
        setSnackbarOpen({ message: result.data.message, type: 'success' })
        console.log(res)
    }
}