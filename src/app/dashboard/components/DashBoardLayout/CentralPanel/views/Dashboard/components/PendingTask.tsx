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
import { Box, Button, Collapse, Switch } from '@mui/material';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import SideBarComponent from '../../../../SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from '../../../../../../data/data';
import FadeIn from '@/components/animation/FadeIn';
import RecentProjects from '../components/RecentProjects';
interface Props { }
const TopMenu = [
    { label: "Todal", id: 0 },
    { label: "Recientes", id: 1 },
    { label: "Por vencer", id: 2 },
    { label: "sin empezar", id: 3 }
]

const PendingTask: NextPage<Props> = ({ }) => {
    const [TaskInfo, setTaskInfo] = useState(InitialTemplateTask);
    const [filterSelected, setFilterSelected] = useState(0)
    return <Container>
        <Item xs={9}>
            <Text
                color='#0B1839'
                sx={{ fontSize: { md: 24, xl: 28 }, marginY: 3 }}
            >
                Tareas
            </Text>
            <TaskFilter>
                {TopMenu.map((menu, index) => (
                    <Button
                        onClick={() => setFilterSelected(index)}
                        variant='contained'
                        style={{
                            textTransform: 'none',
                            boxShadow: "0 0 0 0 transparent",
                            borderRadius: '100px',
                            backgroundColor: filterSelected === index ? '#5CCF6F' : 'transparent',
                        }}>
                        <Text
                            color={filterSelected === index ? '#FFFFFF' : "#647184"}
                            size={14}
                        >
                            {menu.label}
                        </Text>
                    </Button>
                ))
                }
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
}

export default PendingTask