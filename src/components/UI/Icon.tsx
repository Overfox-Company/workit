import { icons } from '@/constants/Icons'
import { NextPage } from 'next'
import Image from 'next/image'

interface Props {
    src: string,
    size: number
}

const Icon: NextPage<Props> = ({ src, size }) => {
    return <Image alt={src} src={icons[src]} width={size} height={size} />
}

export default Icon