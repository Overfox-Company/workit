'use client';
import {
  Divider,
  List,
  ListItem,
  Select,
  SiderBar,
  Subtitle,
  Title,
} from '@/app/dashboard/components/Components';
import { Container, Item, Wrapper } from '@/components/layout/Container';
// import the home icon
import Icon from '@/components/UI/Icon';

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
      <SiderBar>
        <Container gap={10}>
          <Item xs={12}>
            <Title textAlign={'left'}>Workit</Title>
          </Item>
          <Item xs={12}>
            <Container>
              <Select>
                <option value='all'>Intelligent AI</option>
                <option value='active'>Proyectos activos</option>
                <option value='completed'>Proyectos completados</option>
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
        </Container>
      </SiderBar>
    </div>
  );
};

export default Dashboard;
