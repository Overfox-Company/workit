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
import { Avatar, Box, Collapse, Switch } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import SideBarComponent from '../../components/SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from '../../data/data';
interface Props { variant: boolean; setVariant: Dispatch<SetStateAction<boolean>> }

const NavBar: NextPage<Props> = ({ variant, setVariant }) => {
    const { user } = useContext(AuthContext)

    return <Header style={{

    }} variant={variant}>
        <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={"flex-start"}
            gap={1}

        >
            <button
                onClick={() => {
                    setVariant(!variant);
                }}
            >
                <Icon src='sidebarIcon' size={24} />
            </button>
            <Avatar
                src={user.avatar ? user.avatar : undefined}
                alt='profile pic'
                sx={{ width: 32, height: 32 }}
            >{
                    user.avatar ? null : user.name?.split("")[0]}</Avatar>
            <Title textAlign={'left'}>{user.name ? user.name.split(/\s+/)[0] : ""}</Title>
        </Box>

    </Header>


}

export default NavBar