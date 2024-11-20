import { NextPage } from 'next'
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
import bannerImg from '@/../public/assets/bannerImg.jpg';
import profileImg from '@/../public/assets/profileImg.png';
import projectImg from '@/../public/assets/projectImg.png';
import { Container, Item, Wrapper } from '@/components/layout/Container';
import Icon from '@/components/UI/Icon';
import { Box, Collapse, Switch } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import SideBarComponent from '../../../../SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from '../../../../../../data/data';
import FadeIn from '@/components/animation/FadeIn';
interface Props { }

const RecentProjects: NextPage<Props> = ({ }) => {
    return <Container>
        <Item xs={12}>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <Text
                    sx={{ fontSize: { md: 24, xl: 28 }, marginY: 2 }}
                    color='#0B1839'
                >
                    Proyectos
                </Text>
                <Icon src='AddIcon' size={32} />
            </div>

        </Item>


        <Item sx={{ marginTop: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                <ProjectsCards
                    bannerImg={bannerImg}
                    membersImg={[
                        '/assets/profileImg.png',
                        '/assets/profileImg.png',
                        '/assets/profileImg.png',
                        '/assets/profileImg.png',
                    ]}
                    projectName='OverFox'
                    projectDescription='Breve descripción'
                    projectImg={projectImg}
                />{' '}
                <ProjectsCards
                    bannerImg={bannerImg}
                    membersImg={[
                        '/assets/profileImg.png',
                        '/assets/profileImg.png',
                        '/assets/profileImg.png',
                        '/assets/profileImg.png',
                        '/assets/profileImg.png',
                    ]}
                    projectName='OverFox'
                    projectDescription='Breve descripción'
                    projectImg={projectImg}
                />
            </Box>
        </Item>
    </Container>
}

export default RecentProjects