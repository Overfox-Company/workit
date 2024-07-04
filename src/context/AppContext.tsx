'use client'

import { SnackbarInitial } from "@/types/App";
import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    Dispatch,
    ReactNode,
    SetStateAction
} from "react";
import { AuthContext } from "./AuthContext";


type ContextData = {
    playAnimations: boolean,
    setPlayAnimations: Dispatch<SetStateAction<boolean>>,
    isSnackbarOpen: typeof SnackbarInitial,
    setSnackbarOpen: Dispatch<SetStateAction<typeof SnackbarInitial>>,
    loadingScreen: boolean,
    setLoadingScreen: Dispatch<SetStateAction<boolean>>
};
type ProviderProps = {
    children?: ReactNode;
    className?: string;
};

export const AppContext = createContext<ContextData>({
    playAnimations: false,
    setPlayAnimations: () => { },
    isSnackbarOpen: SnackbarInitial,
    setSnackbarOpen: () => { },
    loadingScreen: true,
    setLoadingScreen: () => { }
});

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {

    const [loadingScreen, setLoadingScreen] = useState(true)
    const [playAnimations, setPlayAnimations] = useState(false)
    const [isSnackbarOpen, setSnackbarOpen] = useState({
        message: '',
        type: "error" as "error" | "warning" | "info" | "success"
    })

    return (
        <AppContext.Provider
            value={{
                loadingScreen,
                setLoadingScreen,
                isSnackbarOpen,
                setSnackbarOpen,
                playAnimations,
                setPlayAnimations,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
