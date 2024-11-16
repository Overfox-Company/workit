import { GRAYINPUT, PAPERGRAY, PRIMARYCOLOR, PRIMARYDARK } from "@/constants/Colors";
import { FC } from "react";

export const CheckIcon: FC<{ size: number }> = ({ size }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke={PRIMARYCOLOR} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
export const NoCheckIcon: FC<{ size: number }> = ({ size }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" stroke={PRIMARYDARK} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
};

