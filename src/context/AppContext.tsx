'use client'

import { SnackbarInitial } from "@/types/App";
import React, { createContext, useState, useEffect } from "react";


type ContextData = {
    playAnimations: boolean,
    setPlayAnimations: React.Dispatch<React.SetStateAction<boolean>>,
    isSnackbarOpen: typeof SnackbarInitial,
    setSnackbarOpen: React.Dispatch<React.SetStateAction<typeof SnackbarInitial>>,

};
type ProviderProps = {
    children?: React.ReactNode;
    className?: string;
};

export const AppContext = createContext<ContextData>({

    playAnimations: false,
    setPlayAnimations: () => { },
    isSnackbarOpen: SnackbarInitial,
    setSnackbarOpen: () => { },

});

export const AppContextProvider: React.FC<ProviderProps> = ({ children }) => {


    const [playAnimations, setPlayAnimations] = useState(false)



    const [isSnackbarOpen, setSnackbarOpen] = useState({
        message: '',
        type: "error" as "error" | "warning" | "info" | "success"
    })





    return (
        <AppContext.Provider
            value={{
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
