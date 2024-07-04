import { ReactNode } from "react";

type InputPropsBase = {
    icon?: boolean;
    name?: string;
    label?: string;
    error?: string | any;
    touched?: boolean | any;
    placeholder?: string;
    type?: string;
    as?: string;
    rows?: number;
    cols?: number;
    children?: React.ReactNode;
};

type InputPropsWithIcon = InputPropsBase & {
    iconName: string;
    iconSize: number;
};

type InputPropsWithoutIcon = InputPropsBase & {
    iconName?: never;
    iconSize?: never;
};

export type InputProps = InputPropsWithIcon | InputPropsWithoutIcon;
export interface ButtonType {
    loading?: boolean;
    children: ReactNode;
    style?: any
    onClick?: any
    type?: 'submit'
    sx?: any
    disabled?: boolean
    component?: string
}
export const SnackbarInitial = {
    message: '',
    type: "error" as "error" | "warning" | "info" | "success"
}