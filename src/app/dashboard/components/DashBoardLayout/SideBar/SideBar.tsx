import SecuenceFade from '@/components/animation/SecuenceFade';
import { Container, Item } from '@/components/layout/Container';
import Icon, { IconHome } from '@/components/UI/Icon';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { NextPage } from 'next';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  List,
  ListItem,
  Select,
  SideBar,
  Text,
  TextBox,
  Title,
} from '../../Components';
import { IOSSwitch } from '../../IOSSSwitch';
import Image from 'next/image';
import { PRIMARYCOLOR } from '@/constants/Colors';
import { iconsSideBar } from '@/icons/SideMenuIcons';

interface Props {
  variant: boolean;
  setVariant: Dispatch<SetStateAction<boolean>>
}

const NavList = [
  'Dashboard',
  'Proyectos',
  'Equipo',
  'Finanzas',
  'Contactos',
  'Configuracion',
];

const selectedColor = '#5CCF6F';
const noSelectedColor = '#0B1839';
//make the component receive a boolean from page, and change the width of the sidebar
// const SideBarComponent: NextPage<Props> = ({}) => {
const SideBarComponent: NextPage<Props> = ({ variant, setVariant }) => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <SideBar variant={variant}
      initial="initial"
      animate="animate">
      <Container
        justifyContent='space-between'
        style={{
          height: '100%',
        }}
      >
        <Item xs={12}>
          <Container gap={{ xs: 1, lg: 3, xl: 5 }}>

            {  /* <Item xs={12}>
              <Container>
                <Select>
                  <option> Intelligent AI</option>
                  <option>Proyectos activos</option>
                  <option>Proyectos completados</option>
                </Select>
              </Container>
            </Item>*/}

            <Item
              xs={12}
              sx={{
                width: '100%',
              }}
            >
              <List>
                {NavList.map((item, index) => {
                  const IconComponent = iconsSideBar[item];
                  return (
                    <SecuenceFade
                      key={index}
                      index={index}
                      fromY={-60}
                      duration={0.2}
                    >
                      <ListItem
                        onClick={() => setSelectedOption(index)}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          padding: " 0",
                          borderRadius: 0,

                        }}
                      >
                        <div style={{
                          display: 'flex',
                          transition: 'all 0.1s ease-in-out',
                          borderRight: `solid 2px ${index === selectedOption ? PRIMARYCOLOR : "transparent"}`,
                          color: index === selectedOption ? '#5CCF6F' : '#0B1839',
                          width: "100%",
                          gap: 8
                        }}>
                          {IconComponent ? (
                            <div>
                              <IconComponent

                                size={24}
                                selected={index === selectedOption}
                              />
                            </div>

                          ) : (
                            <span>Ícono no disponible</span>
                          )}
                          {/* <IconHome
                        color={
                          index === selectedOption
                            ? selectedColor
                            : noSelectedColor
                        }
                        size={18}
                      /> */}
                          <p style={{
                            transition: "all 0.1s ease-in-out",
                            opacity: variant ? 1 : 0
                          }}>
                            {item}
                          </p>
                        </div>

                      </ListItem>
                    </SecuenceFade>
                  )
                })}
              </List>
            </Item>
          </Container>
        </Item>

        <Item
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
          xs={12}
        >
          <ListItem style={{ width: '100%', backgroundColor: 'white', padding: 0 }}>
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label={variant ? 'Dark Mode' : ""}
            />
          </ListItem>
        </Item>
      </Container>
    </SideBar>
  );
};

export default SideBarComponent;
