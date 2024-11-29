import { NextPage } from 'next'
import {
    AddButton,
    Header,
    ProjectsCards,
    ProjectsCardsSkeleton,
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
import { Box, Collapse, IconButton, Switch } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import SideBarComponent from '../../../../SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from '../../../../../../data/data';
import FadeIn from '@/components/animation/FadeIn';
import { ProjectsCard } from '@/types/Layout';
import SecuenceFade from '@/components/animation/SecuenceFade';
import { AddIcon } from '@/icons/AddIcon';
import { PRIMARYDARK } from '@/constants/Colors';
interface Props { }
const templateData = [
    {
        bannerImg: bannerImg,
        membersImg:
            [
                '/assets/profileImg.png',
                '/assets/profileImg.png',
                '/assets/profileImg.png',
                '/assets/profileImg.png',
            ],
        projectName: 'OverFox',

        projectDescription: 'Breve descripción',
        projectImg: projectImg
    },
    {
        bannerImg,
        membersImg:
            [
                '/assets/profileImg.png',
                '/assets/profileImg.png',
                '/assets/profileImg.png',
                '/assets/profileImg.png',
            ],
        projectName: 'OverFox',

        projectDescription: 'Breve descripción',
        projectImg: projectImg
    },
    {
        bannerImg,
        membersImg:
            [
                '/assets/profileImg.png',
                '/assets/profileImg.png',
                '/assets/profileImg.png',
                '/assets/profileImg.png',
            ],
        projectName: 'OverFox',

        projectDescription: 'Breve descripción',
        projectImg: projectImg
    },
    {
        bannerImg,
        membersImg:
            [
                '/assets/profileImg.png',
                '/assets/profileImg.png',
                '/assets/profileImg.png',
                '/assets/profileImg.png',
            ],
        projectName: 'OverFox',

        projectDescription: 'Breve descripción',
        projectImg: projectImg
    },
]
const RecentProjects: NextPage<Props> = ({ }) => {
    const [data, setData] = useState<ProjectsCard[]>([])

    useEffect(() => {
        setTimeout(() => {
            setData(templateData as ProjectsCard[])
        }, 4000)
    }, [])
    return <Container>
        <Item xs={12}>
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                <Text
                    sx={{ fontSize: { md: 24, xl: 28 }, marginY: 2 }}
                    color='#0B1839'
                >
                    Proyectos recientes
                </Text>
                <IconButton>
                    <AddIcon size={24} color={PRIMARYDARK} />
                </IconButton>

            </div>
        </Item>
        <Item sx={{ marginTop: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
                {data.length > 0 ? data.map((Item, index) => (
                    <FadeIn key={index} >
                        <ProjectsCards key={index}
                            data={Item}
                        />
                    </FadeIn>

                )) : null}
                {data.length === 0 ? [0, 1, 2, 3].map((Item, index) => (

                    <SecuenceFade index={Item} key={Item}>
                        <ProjectsCardsSkeleton />
                    </SecuenceFade>


                )) : null}

            </Box>
        </Item>
    </Container>
}

export default RecentProjects