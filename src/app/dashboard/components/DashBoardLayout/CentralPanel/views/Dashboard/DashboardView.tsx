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
import SideBarComponent from '../../../SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from '../../../../../data/data';
import FadeIn from '@/components/animation/FadeIn';
import RecentProjects from './components/RecentProjects';
import PendingTask from './components/PendingTask';
interface Props { }

const DashboardView: NextPage<Props> = ({ }) => {
    const [TaskInfo, setTaskInfo] = useState(InitialTemplateTask);
    return <WorkSpaces>
        <FadeIn>
            <RecentProjects />
            <PendingTask />
        </FadeIn>

    </WorkSpaces>
}

export default DashboardView