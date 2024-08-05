import ApiController from "@/ApiController/ApiController"
import { AppContext } from "@/context/AppContext"
import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useCallback, useContext, useEffect } from "react"
const Skip = () => {
    const route = useRouter()
    const { user, setUser } = useContext(AuthContext)
    const { setSnackbarOpen, setLoadingScreen } = useContext(AppContext)

    const functions = async () => {

        const data = {
            id: user._id,
            firstTime: false
        }
        const result = await ApiController.editUser(data)
        const { editedUser, message } = result.data
        if (editedUser) {
            route.push('/dashboard')
            setUser(editedUser)
        } else {
            setSnackbarOpen({ message, type: "error" })
        }

    }

    useEffect(() => { }, [
        functions()
    ])
    return <div />
}
export default Skip