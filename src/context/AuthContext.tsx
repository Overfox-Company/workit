'use client'

import ApiController from "@/ApiController/ApiController";
import { useSession, signOut, signIn } from "next-auth/react";
import React, { createContext, useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { InitialUSer, SessionData, userType } from "@/types/User";
import { LoginGoogle } from "@/app/api/resources/controllers/User";
import { useRouter } from "next/navigation";
type ContextData = {
    user: userType,
    setUser: React.Dispatch<React.SetStateAction<userType>>,
};
type ProviderProps = {
    children?: React.ReactNode;
    className?: string;
};

export const AuthContext = createContext<ContextData>({
    user: InitialUSer,
    setUser: () => { },
});

export const AuthContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const { setSession } = useContext(AppContext)
    const { data: session, status } = useSession() as SessionData;
    const [user, setUser] = useState<userType>(InitialUSer)
    const [first, setFirst] = useState(true)
    const [loadSession, setLoadSession] = useState(false)
    const { setSnackbarOpen } = useContext(AppContext)
    const RegisterUser = async () => {

        const data = {
            google: session?.user?.id ?? '',
            email: session?.user?.email ?? '',
            avatar: session?.user?.image ?? '',
            name: session?.user?.name ?? ''
        }
        const resultUser = await ApiController.registerUserForm(data)

        if (resultUser.data.status === 200) {
            setUser(resultUser.data.user)
        } else if (resultUser.data.status === 203) {
            LgoinUser()
        }
        else if (resultUser.data.status === 401) {
            setSnackbarOpen({ message: resultUser.data.message, type: "error" })
        }
        setLoadSession(true)
        localStorage.setItem('typeInit', 'login')
    }
    const LgoinUser = async () => {

        const getUser = await ApiController.Login({
            name: session.user?.name,
            email: session.user?.email || "",
            type: localStorage.getItem('typeLogin') || "",
            googleId: session.user?.id,
            id: session?.user?._id
        })

        if (getUser.data.status === 200) {
            setUser(getUser.data.user)
        } else {
            signOut()
            setSnackbarOpen({ message: getUser.data.message, type: "error" })
        }
        setLoadSession(true)
    }

    useEffect(() => {
        const typeInit = localStorage.getItem('typeInit');
        if (session?.user && first) {
            if (typeInit === 'login') {
                LgoinUser();
            } else if (typeInit === 'register') {
                console.log("se ejecuta el registro")
                RegisterUser();
            }
            setFirst(false);
        }


    }, [session, status]);
    const router = useRouter()

    useEffect(() => {

        if (user._id && user.firstTime) {
            router.replace('/firstTime')
            setSession(true)
        } else {
            setSession(true)
        }
    }, [user])
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
