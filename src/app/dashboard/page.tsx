'use client';
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
import { useContext, useState } from 'react';
import SideBarComponent from './components/SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from './data/data';
import NavBar from './components/navBar/NavBar';
import CentralPanel from './components/CentralPanel/CentralPanel';

const Dashboard = () => {
  const { user } = useContext(AuthContext)
  const [collapsed, setCollapsed] = useState<boolean>(false);


  const UserName = user.name ? user.name.split(/\s+/)[0] : "";

  //handle if active or not for list items
  const handleActive = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // on click change the active class
    const target = event.target as HTMLDivElement;
    target.classList.toggle('active');

    // remove the active class from the siblings
    const siblings = target.parentElement?.children;
    for (let i = 0; i < siblings!.length; i++) {
      if (siblings![i] !== target) {
        siblings![i].classList.remove('active');
      }
    }

    //change the icon color if active
    const icon = target.querySelector('img');
    if (target.classList.contains('active')) {
      icon!.style.filter = 'invert(100%)';
    } else {
      icon!.style.filter =
        'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';
    }

    //remove the active class from the siblings icons
    for (let i = 0; i < siblings!.length; i++) {
      const siblingIcon = siblings![i].querySelector('img');
      if (siblings![i] !== target) {
        siblingIcon!.style.filter =
          'invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)';
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',

        backgroundColor: '#FCFCFC',
      }}
    >
      <SideBarComponent variant={collapsed} />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', overflow: 'auto' }}>
        <NavBar variant={collapsed} setVariant={setCollapsed} />
        <CentralPanel />
      </div>

    </Box>
  );
};

export default Dashboard;
