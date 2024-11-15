import { PRIMARYDARK } from '@/constants/Colors'
import { AuthContext } from '@/context/AuthContext'
import { Avatar } from '@mui/material'
import { NextPage } from 'next'
import Image from 'next/image'
import { useContext, useState } from 'react'

interface Props { }

const AvatarComponent: NextPage<Props> = ({ }) => {
    const [openProfileOption, setOpenProfileOptions] = useState(false)
    const { user } = useContext(AuthContext)
    return (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>

            <div style={{
                cursor: 'pointer',
                borderRadius: 200,
                backgroundColor: 'rgba(130,140,160,0.3)',
                padding: 4,
                gap: 4,
                display: 'flex',
                alignItems: 'center',
            }}>
                <div style={{ position: 'relative' }}>
                    <Avatar
                        src={user.avatar ? user.avatar : undefined}
                        alt='profile pic'
                        sx={{ width: 28, height: 28 }}
                    >{
                            user.avatar ? null : user.name?.split("")[0]}</Avatar>
                    <div style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                        height: 10,
                        width: 10,
                        borderRadius: 200,
                        padding: 1,
                        border: `solid 1px ${PRIMARYDARK}`,
                        backgroundColor: '#2FFF51'
                    }} />
                </div>

                <Image src={'/assets/arrowfilters.svg'} width={16} height={16} alt="" />
            </div>

        </div>
    )

}

export default AvatarComponent