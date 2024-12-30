import {
  TaskFilter,
  Text,
  WorkSpaces,
} from '@/app/dashboard/components/Components';
import FadeIn from '@/components/animation/FadeIn';
import { Box, Button, Collapse, Switch } from '@mui/material';
import { NextPage } from 'next';
import { useState } from 'react';
import { InputsLine } from './components/InputsLine';
interface Props {}
const TopMenu = [
  { label: 'Miembros', id: 0 },
  { label: 'Equipos', id: 1 },
];

const TeamsView: NextPage<Props> = ({}) => {
  const [filterSelected, setFilterSelected] = useState(0);
  return (
    <WorkSpaces>
      <FadeIn>
        <Text sx={{ fontSize: { md: 24, xl: 28 } }} color='#0B1839'>
          Gestion de equipos
        </Text>
        <TaskFilter>
          {TopMenu.map((menu, index) => (
            <Button
              key={menu.label}
              onClick={() => setFilterSelected(index)}
              variant='contained'
              style={{
                textTransform: 'none',
                boxShadow: '0 0 0 0 transparent',
                borderRadius: '100px',
                backgroundColor:
                  filterSelected === index ? '#5CCF6F' : 'transparent',
              }}
            >
              <Text
                color={filterSelected === index ? '#FFFFFF' : '#647184'}
                size={14}
              >
                {menu.label}
              </Text>
            </Button>
          ))}
        </TaskFilter>
        <InputsLine />
        <Text
          sx={{ fontSize: { md: 24, xl: 28 }, marginTop: '36px' }}
          color='#0B1839'
        >
          {/* si miembros esta seleccionado que cambie el texto, y si equipos lo esta que cambie */}
          {filterSelected === 0 ? 'Lista de Miembros' : 'Lista de Equipos'}
        </Text>
      </FadeIn>
    </WorkSpaces>
  );
};

export default TeamsView;
