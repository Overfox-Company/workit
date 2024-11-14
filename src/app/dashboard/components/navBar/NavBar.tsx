import { NextPage } from 'next'
import bannerImg from '@/../public/assets/bannerImg.jpg';
import profileImg from '@/../public/assets/profileImg.png';
import projectImg from '@/../public/assets/projectImg.png';
import {
    AddButton,
    Header,
    ProjectsCards,
    TaskFilter,
    TasksCards,
    Text,
    Title,
    WorkSpaces,
} from '@/app/dashboard/components/Components';
import { Container, Item, Wrapper } from '@/components/layout/Container';
import Icon from '@/components/UI/Icon';
import { Box, Collapse, Switch } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import SideBarComponent from '../../components/SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from '../../data/data';
interface Props { variant: boolean; setVariant: Dispatch<SetStateAction<boolean>> }

const NavBar: NextPage<Props> = ({ variant, setVariant }) => {
    const { user } = useContext(AuthContext)

    return <Header style={{ backgroundColor: 'red', width: '100%' }} variant={variant}>
        <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            gap={4}
        >
            <button
                onClick={() => {
                    setVariant(!variant);
                }}
            >
                <Icon src='sidebarIcon' size={124} />
            </button>
            <Image src={profileImg} alt='profile pic' width={56} height={56} />
            <Title textAlign={'left'}>{user.name ? user.name.split(/\s+/)[0] : ""}</Title>
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={4}>
            <Icon src='whiteboardIcon' size={24} />
            <Icon src='calendarIcon' size={84} />
            <Icon src='notificationIcon' size={24} />
        </Box>
    </Header>


}

export default NavBar