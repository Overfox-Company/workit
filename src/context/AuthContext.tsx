'use client'

import ApiController from "@/ApiController/ApiController";
import { useSession, signOut, signIn } from "next-auth/react";
import React, { createContext, useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { InitialUSer, SessionData, userType } from "@/types/User";
import { LoginGoogle } from "@/app/api/resources/controllers/User";
import { useRouter } from "next/navigation";
import { CompanyContext } from "./CompanyContext";
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
    const { setCompanyList } = useContext(CompanyContext)
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
        console.log(resultUser)

        if (resultUser.data.status === 200) {

            setUser(resultUser.data.user)
        } else if (resultUser.data.status === 203) {
            LoginUser()
        }
        else if (resultUser.data.status === 401) {
            setSnackbarOpen({ message: resultUser.data.message, type: "error" })
        }
        setLoadSession(true)
        localStorage.setItem('typeInit', 'login')
    }
    const LoginUser = async () => {

        const dataToLogin = {

            name: session.user?.name,
            email: session.user?.email || "",
            type: localStorage.getItem('typeLogin') || "",
            googleId: session.user?.id,
            id: session?.user?._id || session?.user?.id

        }
        console.log(dataToLogin)
        const getUser = await ApiController.Login(dataToLogin)
        console.log(getUser.data)
        if (getUser.data.status === 200) {
            setUser(getUser.data.user)

            if (getUser.data.companys) {
                setCompanyList(getUser.data.companys)

            }
        } else {
            signOut()
            setSnackbarOpen({ message: getUser.data.message, type: "error" })
        }
        setLoadSession(true)
    }

    useEffect(() => {
        const typeInit = localStorage.getItem('typeInit');
        // console.log(session)
        if (session?.user && first) {
            if (typeInit === 'login') {
                LoginUser();
            } else if (typeInit === 'register') {
                RegisterUser();
            }
            setFirst(false);
        }


    }, [session, status]);
    const router = useRouter()

    useEffect(() => {

        if (user._id) {
            const a = user.firstTime ? '/firstTime' : '/dashboard'
            router.replace(a)
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
