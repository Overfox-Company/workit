'use client'

import ApiController from "@/ApiController/ApiController";
import { useSession, signOut, signIn } from "next-auth/react";
import React, { createContext, useState, useEffect, useContext, Dispatch, SetStateAction } from "react";
import { AppContext } from "./AppContext";
import { InitialUSer, SessionData, userType } from "@/types/User";
import { LoginGoogle } from "@/app/api/resources/controllers/User";
import { useRouter } from "next/navigation";
import { CompanyType } from "@/types/Company";
type ContextData = {
    companyList: CompanyType[] | [],
    setCompanyList: Dispatch<SetStateAction<CompanyType[] | []>>
};
type ProviderProps = {
    children?: React.ReactNode;
    className?: string;
};

export const CompanyContext = createContext<ContextData>({
    companyList: [],
    setCompanyList: () => { }
});

export const CompanyContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [companyList, setCompanyList] = useState<CompanyType[]>([])

    return (
        <CompanyContext.Provider
            value={{
                companyList,
                setCompanyList
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};
