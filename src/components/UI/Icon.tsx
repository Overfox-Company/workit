import { icons } from '@/constants/Icons'
import { NextPage } from 'next'
import Image from 'next/image'

interface Props {
    src: string,
    size: number,
    selected?: boolean
}

export const Icon: NextPage<Props> = ({ src, size, selected }) => {
    return <Image alt={src} src={icons[src]} width={size} style={{ fill: "red" }} height={size} className='icons' />
}
export const IconHome: NextPage<{
    color: string,
    size: number
}> = ({ color, size }) => {
    return <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3327 15.5835V10.4979C18.3327 10.0081 18.3323 9.76302 18.2727 9.5351C18.2199 9.33312 18.1333 9.14198 18.016 8.96925C17.8837 8.77435 17.6998 8.61272 17.3312 8.29017L12.9312 4.44017C12.2468 3.84133 11.9046 3.54206 11.5194 3.42817C11.1801 3.32782 10.8184 3.32782 10.4791 3.42817C10.0942 3.54197 9.75254 3.84096 9.06918 4.4389L4.66772 8.29017C4.2991 8.61272 4.11522 8.77435 3.98291 8.96925C3.86566 9.14198 3.77835 9.33312 3.72557 9.5351C3.66602 9.76303 3.66602 10.0081 3.66602 10.4979V15.5835C3.66602 16.4377 3.66602 16.8647 3.80557 17.2016C3.99164 17.6508 4.34831 18.0081 4.79753 18.1942C5.13444 18.3338 5.56155 18.3338 6.41578 18.3338C7.27001 18.3338 7.69759 18.3338 8.0345 18.1942C8.48372 18.0081 8.84029 17.6509 9.02637 17.2017C9.16592 16.8647 9.16602 16.4376 9.16602 15.5834V14.6667C9.16602 13.6542 9.98683 12.8334 10.9993 12.8334C12.0119 12.8334 12.8327 13.6542 12.8327 14.6667V15.5834C12.8327 16.4376 12.8327 16.8647 12.9722 17.2017C13.1583 17.6509 13.515 18.0081 13.9642 18.1942C14.3011 18.3338 14.7282 18.3338 15.5824 18.3338C16.4367 18.3338 16.8643 18.3338 17.2012 18.1942C17.6504 18.0081 18.007 17.6508 18.193 17.2016C18.3326 16.8647 18.3327 16.4377 18.3327 15.5835Z" fill={color} />
    </svg>

}
export default Icon