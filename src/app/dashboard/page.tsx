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
import { Box, Switch } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import SideBarComponent from './components/SideBar/SideBar';

const Dashboard = () => {
  const [TaskInfo, setTaskInfo] = useState([
    {
      date: 'June 15',
      color: '#C7EBB3',
      tasks: [
        {
          description: 'Lorem Ipsum Dolor',
          status: true,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: false,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: true,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: false,
        },
      ],
    },
    {
      date: 'June 16',
      color: '#FFDEC6',
      tasks: [
        {
          description: 'Lorem Ipsum Dolor',
          status: false,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: true,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: true,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: false,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: false,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: true,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: true,
        },
        {
          description: 'Lorem Ipsum Dolor',
          status: false,
        },
      ],
    },
  ]);

  const UserName = 'Joel Zambrado';

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
        display: 'Grid',
        gridTemplateColumns: '0.7fr 3.3fr',
        backgroundColor: '#FCFCFC',
      }}
    >
      <SideBarComponent />
      <Box>
        <Header>
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            gap={4}
          >
            <Image src={profileImg} alt='profile pic' width={56} height={56} />
            <Title textAlign={'left'}>Hola, {UserName}</Title>
          </Box>
          <Box display={'flex'} flexDirection={'row'} gap={4}>
            <Icon src='search' size={36} />
            <Icon src='notification' size={36} />
          </Box>
        </Header>

        <WorkSpaces
          sx={{
            padding: { md: 2, xl: 4 },
          }}
        >
          <Container>
            <Item xs={1.5}>
              <Text
                sx={{ fontSize: { md: 24, xl: 28 }, marginY: 2 }}
                color='#0B1839'
              >
                Proyectos
              </Text>
            </Item>
            <Item xs={10.5} sx={{ cursor: 'pointer', display: 'flex' }}>
              <Icon src='AddIcon' size={32} />
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
      </Box>
    </Box>
  );
};

export default Dashboard;
