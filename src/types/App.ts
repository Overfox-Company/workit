import { ReactNode } from "react";

export type InputProps = {
    icon?: boolean | undefined;
    name?: string | undefined;
    label?: string | undefined;
    error?: string | undefined | any;
    touched?: boolean | undefined | any;
    placeholder?: string | undefined;
    type?: string | undefined;
    as?: string | undefined;
    rows?: number | undefined;
    cols?: number | undefined;
    children?: React.ReactNode;
};
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