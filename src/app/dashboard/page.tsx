'use client';
import {
  Header,
  List,
  ListItem,
  Select,
  SideBar,
  TaskCard,
  TextBox,
  Title,
} from '@/app/dashboard/components/Components';
import { Container, Item, Wrapper } from '@/components/layout/Container';
import Icon from '@/components/UI/Icon';
import { Box, Switch } from '@mui/material';
//Import images from the assets folder

const Dashboard = () => {
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

  const TaskInfo = [
    {
      //should be the date of the task
      date: new Date('2022-01-01'),
      tasks: [
        {
          description: 'Crear un diseño de interfaz de usuario',
          status: 'Pendiente',
        },
        {
          description: 'Crear un diseño de interfaz de usuario',
          status: 'Pendiente',
        },
      ],
    },
    {
      date: new Date('2022-01-02'),
      tasks: [
        {
          description: 'Crear un diseño de interfaz de usuario',
          status: 'Pendiente',
        },
        {
          description: 'Crear un diseño de interfaz de usuario',
          status: 'Pendiente',
        },
      ],
    },
    {
      date: new Date('2022-01-03'),
      tasks: [
        {
          description: 'Crear un diseño de interfaz de usuario',
          status: 'Pendiente',
        },
        {
          description: 'Crear un diseño de interfaz de usuario',
          status: 'Pendiente',
        },
      ],
    },
  ];

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
    <div>
      <Container gap={0}>
        <Item xs={3}>
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

              <Item>
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
              <Item>
                <TextBox>
                  <Box display={'flex'} flexDirection={'row'} gap={1}>
                    <Icon src='home' size={15} />
                    Dark Mode
                  </Box>
                  <Switch />
                </TextBox>
              </Item>
            </Container>
          </SideBar>
        </Item>

        <Item xs={9}>
          <Header>
            <Container>
              <Box display={'flex'} justifyContent={'space-between'} gap={55}>
                <Box display={'flex'} flexDirection={'row'} gap={4}>
                  <Icon src='profileImg' size={56} />
                  <Title textAlign={'left'}>Hola, {UserName}</Title>
                </Box>
                <Box display={'flex'} flexDirection={'row'} gap={4}>
                  <Icon src='search' size={56} />
                  <Icon src='notification' size={56} />
                </Box>
              </Box>
            </Container>
          </Header>
        </Item>

        {/* <Item>
          {TaskInfo.map((task, index) => (
            <TaskCard key={index}>
              <h1>{task.date.getDate()}</h1>
              <h2>{task.date.toLocaleString('default', { month: 'long' })}</h2>
              {task.tasks.map((task, index) => (
                <div key={index}>
                  <h3>{task.description}</h3>
                  <p>{task.status}</p>
                </div>
              ))}
            </TaskCard>
          ))}
        </Item> */}
      </Container>
    </div>
  );
};

export default Dashboard;
