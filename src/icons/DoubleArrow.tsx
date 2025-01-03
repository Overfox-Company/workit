import { NextPage } from 'next'
import { FC } from 'react'



const DoubleArrow: FC<{ size: number }> = ({ size }) => {
    return (<svg width={size} height={size} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.8337 20.0003L16.5003 25.3337L11.167 20.0003M11.167 12.0003L16.5003 6.66699L21.8337 12.0003" stroke="#647184" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    )
}
export default DoubleArrow