'use client'

import ApiController from "@/ApiController/ApiController";
import { useSession, signOut, signIn } from "next-auth/react";
import React, { createContext, useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { SessionData } from "@/types/User";
import { LoginGoogle } from "@/app/api/resources/controllers/User";

type ContextData = {
    user: any,
    setUser: React.Dispatch<React.SetStateAction<any>>,
};
type ProviderProps = {
    children?: React.ReactNode;
    className?: string;
};

export const AuthContext = createContext<ContextData>({
    user: {},
    setUser: () => { },
});

export const AuthContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const { setLoadingScreen } = useContext(AppContext)
    const { data: session, status } = useSession() as SessionData;
    const [user, setUser] = useState<any>({})
    const [first, setFirst] = useState(true)
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
        setLoadingScreen(false)
        localStorage.setItem('typeInit', 'login')
    }
    const LgoinUser = async () => {

        const getUser = await ApiController.Login({
            email: session.user?.email || "",
            type: localStorage.getItem('typeLogin') || "",
            googleId: session.user?.id,
            id: session?.user?._id
        })
        setLoadingScreen(false)
        console.log(getUser.data)
        if (getUser.data.status === 200) {
            setUser(getUser.data.user)
        } else {
            signOut()
            setSnackbarOpen({ message: getUser.data.message, type: "error" })
        }
    }
    const gS = async () => {
        const getserver = await ApiController.getServer()
        console.log(getserver)
    }
    useEffect(() => {
        const typeInit = localStorage.getItem('typeInit');
        console.log(session)
        if (session?.user && first) {
            if (typeInit === 'login') {
                LgoinUser();
            } else if (typeInit === 'register') {
                console.log("se ejecuta el registro")
                RegisterUser();
            }
            setFirst(false);
        } else {
            setLoadingScreen(false)
        }


    }, [session, status]);

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
