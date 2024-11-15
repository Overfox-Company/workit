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
import { useContext, useEffect, useState } from 'react';
import SideBarComponent from './components/DashBoardLayout/SideBar/SideBar';
import { AuthContext } from '@/context/AuthContext';
import { InitialTemplateTask } from './data/data';
import NavBar from './components/DashBoardLayout/navBar/NavBar';
import CentralPanel from './components/DashBoardLayout/CentralPanel/CentralPanel';
import DashboardLayout from './components/DashBoardLayout/DashboardLayout';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        position: "relative",
        width: '100vw',
        backgroundColor: '#FCFCFC',
      }}
    >
      {/*
        <SideBarComponent variant={collapsed} setVariant={setCollapsed} />
        
      <DashboardLayout />
        */}
      <NavBar variant={collapsed} setVariant={setCollapsed} />
      <div style={{

        marginTop: "64px",
        display: 'flex',
        flexDirection: 'column',
        width: "100%",

        position: 'relative',



      }}>


        <div style={{ display: 'flex', width: "100%", }}>
          <SideBarComponent variant={collapsed} setVariant={setCollapsed} />
          <div style={{
            height: 'calc(100vh - 64px)',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <CentralPanel />
          </div>
        </div>

      </div>

    </Box>
  );
};

export default Dashboard;
