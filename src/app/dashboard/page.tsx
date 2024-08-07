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


  const UserName = 'Pepito Perez';

  return (
    <Box
      sx={{
        display: 'Grid',
        gridTemplateColumns: '0.7fr 3.3fr',
        backgroundColor: '#FCF6F1',
      }}
    >
      <SideBarComponent />
      <Box>
        <Header>
          <Box display={'flex'} alignItems={"center"} flexDirection={'row'} gap={4}>
            <Box sx={{ width: { md: 36, xl: 48 }, height: { md: 36, xl: 48 }, position: 'relative' }}>
              <Image src={profileImg} fill objectFit='contain' alt='profile pic' />
            </Box>

            <Title sx={{ fontSize: { md: 24, xl: 36 } }} textAlign={'left'}>Hola, {UserName}</Title>
          </Box>
          <Box display={'flex'} flexDirection={'row'} gap={4}>
            <Icon src='search' size={36} />
            <Icon src='notification' size={36} />
          </Box>
        </Header>

        <WorkSpaces sx={{
          padding: { md: 2, xl: 4 }
        }}>
          <Container>
            <Item xs={9}>
              <Text sx={{ fontSize: { md: 24, xl: 28 } }} >Tareas</Text>
              <TaskFilter>
                <Text
                  size={14}
                  sx={{
                    backgroundColor: '#C7EBB3',
                    padding: '8px 16px',
                    borderRadius: '8px',
                  }}
                >
                  Todas
                  {/* TaskInfo total number */} ({TaskInfo.length})
                </Text>
                <Text
                  size={14}
                  sx={{
                    backgroundColor: '#FFE8D5',
                    padding: '8px 16px',
                    borderRadius: '8px',
                  }}
                >
                  Recientes
                </Text>
                <Text
                  size={14}
                  sx={{
                    backgroundColor: '#FFE8D5',
                    padding: '8px 16px',
                    borderRadius: '8px',
                  }}
                >
                  Completadas
                </Text>
                <Text
                  size={14}
                  sx={{
                    backgroundColor: '#FFE8D5',
                    padding: '8px 16px',
                    borderRadius: '8px',
                  }}
                >
                  Sin Iniciar
                </Text>
              </TaskFilter>
            </Item>
            <Item xs={3}>
              <AddButton>
                Agregar
                <Icon src='AddIcon' size={24} />
              </AddButton>
            </Item>

            <Item sx={{ marginTop: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: { md: 1, xl: 3 } }}>
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

          <Container>
            <Item xs={9}>
              <Text sx={{ fontSize: { md: 24, xl: 28 } }} >Proyectos</Text>
            </Item>
            <Item xs={3}>
              <AddButton>
                Agregar
                <Icon src='AddIcon' size={24} />
              </AddButton>
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
        </WorkSpaces>
      </Box>
    </Box>
  );
};

export default Dashboard;
