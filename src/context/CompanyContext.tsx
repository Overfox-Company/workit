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
    companySelected: CompanyType | null
    setCompanySelected: Dispatch<SetStateAction<CompanyType | null>>;
    getCompanies: () => void,
    projects: any[] | string
};
type ProviderProps = {
    children?: React.ReactNode;
    className?: string;
};

export const CompanyContext = createContext<ContextData>({
    companyList: [],
    setCompanyList: () => { },
    companySelected: null,
    setCompanySelected: () => { },
    getCompanies: () => { },
    projects: []
});

export const CompanyContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [companyList, setCompanyList] = useState<CompanyType[]>([])
    const [companySelected, setCompanySelected] = useState<CompanyType | null>(null)
    const { user } = useContext(AuthContext)
    const [projects, setProjects] = useState<any[] | string>([])
    const getCompanies = async () => {
        try {
            // Solicitar datos de las empresas
            const { data: { companys } } = await ApiController.getCompanys({ id_user: user._id });

            if (companys?.length > 0) {
                setCompanyList(companys);

                // Obtener el ID almacenado en localStorage
                const idStorage = localStorage.getItem("idCompanySelected");

                // Encontrar la empresa seleccionada o usar la primera como predeterminada
                const selectedCompany = companys.find((comp: CompanyType) => comp._id === idStorage) || companys[0];

                // Si el ID almacenado no es válido, eliminarlo del localStorage
                if (idStorage && selectedCompany._id !== idStorage) {
                    localStorage.removeItem("idCompanySelected");
                }

                setCompanySelected(selectedCompany);
            }
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    };
    const getProjects = async () => {
        if (companySelected?._id) {
            const resultProjects = await ApiController.getProjects(companySelected._id)
            console.log(resultProjects)
            const { projects } = resultProjects.data
            setProjects(projects.length > 0 ? projects : "No tienes ningun proyecto aun")
        }
    }
    useEffect(() => {
        if (companySelected?._id) {

            getProjects()
        }
    }, [companySelected])
    useEffect(() => {
        if (user._id) {
            getCompanies()
        }

    }, [user])
    return (
        <CompanyContext.Provider
            value={{
                getCompanies,
                companyList,
                setCompanyList,
                companySelected,
                setCompanySelected,
                projects
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};
