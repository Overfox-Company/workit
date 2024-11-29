import { FC } from "react"
export const AddIcon: FC<{ size: number, color: string }> = ({ size, color }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8V24M24 16H8" stroke={color} stroke-width="2" stroke-linecap="round" />
        </svg>

    )
}