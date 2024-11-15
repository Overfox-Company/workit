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
import { Avatar, Box, Collapse, IconButton, Switch } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import SideBarComponent from '../SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from '../../../data/data';
import OptionsToNavBar from '../components/OptionsToNavBar';
import AvatarComponent from '../components/AvatarComponent';
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
            <IconButton

                onClick={() => {
                    setVariant(!variant);
                }}
            >
                <Icon src='menu' size={24} />
            </IconButton>
            <img src="/assets/default/Workit-l.svg" alt="MUI logo" />
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={1}>
            <OptionsToNavBar />
            <AvatarComponent />
        </Box>
    </Header>


}

export default NavBar