import { NextPage } from 'next'
import { List, ListItem, Select, SideBar, TextBox, Title } from '../Components'
import { Container, Item } from '@/components/layout/Container'
import Icon, { IconHome } from '@/components/UI/Icon'
import { Box, Switch } from '@mui/material';
import SecuenceFade from '@/components/animation/SecuenceFade';
import { useState } from 'react';

interface Props { }
const NavList = [
    'Dashboard',
    'Tareas',
    'Proyectos',
    'Equipo',
    'Finanzas',
    'Contactos',
    'Ajustes',
];

const selectedColor = '#FEEFE2'
const noSelectedColor = '#0B161F'
const SideBarComponent: NextPage<Props> = ({ }) => {
    const [selectedOption, setSelectedOption] = useState(0)
    return <SideBar>
        <Container justifyContent='space-between' style={{
            height: '100%',
        }}>
            <Item xs={12}>
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
                        xs={12}
                        sx={{

                            width: '100%',
                        }}
                    >
                        <List>
                            {NavList.map((item, index) => (
                                <SecuenceFade key={index} index={index} fromY={-60} duration={0.2}>
                                    <ListItem onClick={() => setSelectedOption(index)}
                                        style={{
                                            backgroundColor: index === selectedOption ? noSelectedColor : undefined,
                                            color: index === selectedOption ? 'white' : undefined
                                        }}>
                                        <IconHome color={index === selectedOption ? selectedColor : noSelectedColor} size={18} />
                                        {item}
                                    </ListItem>
                                </SecuenceFade>
                            ))}
                        </List>
                    </Item>
                </Container>
            </Item>


            <Item sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
            }} xs={12}>

                <ListItem style={{ width: '100%', backgroundColor: 'white' }}>
                    <Icon src='home' size={15} />
                    Dark Mode
                    <Switch />
                </ListItem>


            </Item>
        </Container>
    </SideBar>

}

export default SideBarComponent