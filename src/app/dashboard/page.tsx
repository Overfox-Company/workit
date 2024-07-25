'use client';
import bannerImg from '@/../public/assets/bannerImg.jpg';
import profileImg from '@/../public/assets/profileImg.png';
import projectImg from '@/../public/assets/projectImg.png';
import {
  AddButton,
  Header,
  List,
  ListItem,
  ProjectsCards,
  Select,
  SideBar,
  TasksCards,
  Text,
  TextBox,
  Title,
  WorkSpaces,
} from '@/app/dashboard/components/Components';
import { Container, Item, Wrapper } from '@/components/layout/Container';
import Icon from '@/components/UI/Icon';
import { Box, Switch } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const Dashboard = () => {
  const [TaskInfo, setTaskInfo] = useState([
    {
      date: 'June 15',
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
      ],
    },
  ]);
  const NavList = [
    'Dashboard',
    'Tareas',
    'Proyectos',
    'Equipo',
    'Finanzas',
    'Contactos',
    'Ajustes',
  ];

  const UserName = 'Pepito Perez';

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

  // const HandleCardStatus = (index: number, task: Array<any>) => {
  //   try {
  //     // change the status of the task
  //     const newTask = [...TaskInfo];
  //     newTask[index].tasks = task;
  //     setTaskInfo(newTask);
  //   } catch (error) {
  //     console.log('Error', error);
  //   }
  // };

  return (
    <Box
      sx={{
        display: 'Grid',
        gridTemplateColumns: '0.7fr 3.3fr',
        backgroundColor: '#FCF6F1',
      }}
    >
      <SideBar>
        <Container gap={{ xs: 1, lg: 3, xl: 5 }}>
          <Item xs={12}>
            <Title textAlign={'left'}>Workit</Title>
          </Item>
          <Item xs={12}>
            <Container>
              <Select>
                <option>Intelligent AI</option>
                <option>Proyectos activos</option>
                <option>Proyectos completados</option>
              </Select>
            </Container>
          </Item>

          <Item
            sx={{
              height: '60%',
            }}
          >
            <List>
              {NavList.map((item, index) => (
                //handle with a class if active or not
                <ListItem key={index} onClick={handleActive}>
                  <Icon src='home' size={15} />
                  {item}
                </ListItem>
              ))}
            </List>
          </Item>
          <Item sx={{ marginTop: 10 }}>
            <TextBox>
              <Box display={'flex'} flexDirection={'row'} gap={1} width={116}>
                <Icon src='home' size={15} />
                Dark Mode
              </Box>
              <Switch />
            </TextBox>
          </Item>
        </Container>
      </SideBar>
      <Box>
        <Header>
          <Box display={'flex'} flexDirection={'row'} gap={4}>
            <Image src={profileImg} alt='profile pic' width={56} height={56} />
            <Title textAlign={'left'}>Hola, {UserName}</Title>
          </Box>
          <Box display={'flex'} flexDirection={'row'} gap={4}>
            <Icon src='search' size={56} />
            <Icon src='notification' size={56} />
          </Box>
        </Header>

        <WorkSpaces>
          <Container>
            <Item xs={9}>
              <Text size={32}>Tareas</Text>
            </Item>
            <Item xs={3}>
              <AddButton>
                Agregar
                <Icon src='AddIcon' size={32} />
              </AddButton>
            </Item>

            <Item sx={{ marginTop: 2 }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
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
                        color='#C7EBB3'
                      />
                    ))
                  : null}
              </Box>
            </Item>
          </Container>

          <Container>
            <Item xs={9}>
              <Text size={32}>Proyectos</Text>
            </Item>
            <Item xs={3}>
              <AddButton>
                Agregar
                <Icon src='AddIcon' size={32} />
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
