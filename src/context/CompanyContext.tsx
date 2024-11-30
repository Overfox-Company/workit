'use client'

import ApiController from "@/ApiController/ApiController";
import { useSession, signOut, signIn } from "next-auth/react";
import React, { createContext, useState, useEffect, useContext, Dispatch, SetStateAction } from "react";
import { AppContext } from "./AppContext";
import { InitialUSer, SessionData, userType } from "@/types/User";
import { LoginGoogle } from "@/app/api/resources/controllers/User";
import { useRouter } from "next/navigation";
import { CompanyType } from "@/types/Company";
import { AuthContext } from "./AuthContext";
type ContextData = {
    companyList: CompanyType[] | [],
    setCompanyList: Dispatch<SetStateAction<CompanyType[] | []>>;
    companySelected: CompanyType | {}
};
type ProviderProps = {
    children?: React.ReactNode;
    className?: string;
};

export const CompanyContext = createContext<ContextData>({
    companyList: [],
    setCompanyList: () => { },
    companySelected: {}
});

export const CompanyContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [companyList, setCompanyList] = useState<CompanyType[]>([])
    const [companySelected, setCompanySelected] = useState<CompanyType | {}>({})
    const { user } = useContext(AuthContext)
    const getComanys = async () => {
        const resultCompanys = await ApiController.getCompanys({ id_user: user._id })

        const { companys } = resultCompanys.data
        if (companys) {
            console.log(companys)
            setCompanyList(companys)
            setCompanySelected(companys[0])
        }
    }
    useEffect(() => {
        if (user._id) {
            getComanys()
        }

    }, [user])
    return (
        <CompanyContext.Provider
            value={{
                companyList,
                setCompanyList,
                companySelected
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};
