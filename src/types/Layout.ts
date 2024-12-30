import { GridDirection } from "@mui/material";
import React, {
    type CSSProperties,
    type MouseEventHandler,
    type ReactNode,
} from "react";



export interface ContainerProps {

    login?: boolean,
    direction?: GridDirection | undefined;
    children: ReactNode;
    justifyContent?: string;
    style?: any;
    columnSpacing?: number;
    alignItems?: string;
    rowSpacing?: number | {
        xs?: number;
        md?: number;
        lg?: number;
        xl?: number;
        sm?: number;
    };
    sx?: any;
    gap?: number | {
        xs?: number;
        md?: number;
        lg?: number;
        xl?: number;
        sm?: number;
    }
}
export interface ItemProps {
    onClick?: any;
    style?: any,
    children: ReactNode;
    xs?: number;
    md?: number;
    sx?: any;
    lg?: number;
    xl?: number;
    sm?: number;
}
export interface TypographyProps {
    children: ReactNode;
    sx?: any;
    style?: any;
    size?: number;
    color?: string;
    fontWeight?: number;
}
export interface TasksCard {
    date: string;
    cardStatus: string;
    colors: string;
    taskInfo: any[]
    tasks: {
        type: "correct" | "warn" | "error";
        label: string;
        description: string;
        status: boolean;
    }[];
    setTaskInfo?: any;
    id: number

    projectImg: string;
}
export interface ProjectsCard {

    bannerImg: any;
    membersImg: Array<string>;
    projectName: string;
    projectDescription: string;
    projectImg: any;

}

export interface TeamFilterTypes {
    topMenu: Array<{
        label: string;
        id: number;
    }>;
    filterSelected: any;
    setFilterSelected: any; 
}
