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
import SideBarComponent from '../SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from '../../../data/data';
interface Props { }

const CentralPanel: NextPage<Props> = ({ }) => {
    const [TaskInfo, setTaskInfo] = useState(InitialTemplateTask);
    return <WorkSpaces>
        <Container>
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
        <Container>
            <Item xs={9}>
                <Text
                    color='#0B1839'
                    sx={{ fontSize: { md: 24, xl: 28 }, marginY: 3 }}
                >
                    Tareas
                </Text>
                <TaskFilter>
                    <Text
                        color='#FFFFFF'
                        size={14}
                        sx={{
                            backgroundColor: '#5CCF6F',
                            padding: '8px 16px',
                            borderRadius: '100px',
                        }}
                    >
                        Todas
                        {/* TaskInfo total number */} ({TaskInfo.length})
                    </Text>
                    <Text
                        color='#647184'
                        size={14}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            padding: '8px 16px',
                            borderRadius: '8px',
                        }}
                    >
                        Recientes
                    </Text>
                    <Text
                        color='#647184'
                        size={14}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            padding: '8px 16px',
                            borderRadius: '8px',
                        }}
                    >
                        Por Vencer
                    </Text>
                    <Text
                        color='#647184'
                        size={14}
                        sx={{
                            backgroundColor: '#FFFFFF',
                            padding: '8px 16px',
                            borderRadius: '8px',
                        }}
                    >
                        Sin Iniciar
                    </Text>
                </TaskFilter>
            </Item>
            <Item sx={{ marginTop: 1 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: { md: 1, xl: 3 },
                    }}
                >
                    {TaskInfo.length > 0
                        ? TaskInfo.map((task, index) => (
                            <TasksCards
                                setTaskInfo={setTaskInfo}
                                key={index}
                                date={task.date}
                                taskInfo={TaskInfo}
                                tasks={task.tasks}
                                cardStatus={
                                    task.tasks
                                        .filter((task) => task.status)
                                        .length.toString() +
                                    '/' +
                                    task.tasks.length.toString()
                                }
                                colors={task.color}
                                projectImg={projectImg}
                            />
                        ))
                        : null}
                </Box>
            </Item>
        </Container>
    </WorkSpaces>
}

export default CentralPanel