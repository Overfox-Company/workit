import { Container, Item } from '@/components/layout/Container';
import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField } from '@mui/material';
import { NextPage } from 'next';

interface Props { }
export const InputsLine: NextPage<Props> = ({ }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 3,
        marginTop: 2,
      }}
    >
      <Container alignItems='center' columnSpacing={2}>
        <Item xs={9} sx={{ display: 'flex', gap: 3 }}>
          <TextField
            hiddenLabel
            id='outlined-size-small'
            size='small'
            placeholder='Buscar por nombre o correo'
            sx={{
              width: '265px',
              '& .MuiInputBase-root': {
                height: 48,
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            hiddenLabel
            id='outlined-size-small'
            size='small'
            placeholder='Invitar por email'
            sx={{
              width: '100%',
              '& .MuiInputBase-root': {
                height: 48,
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Item>
        <Item xs={3}>
          <Box sx={{ gap: 2, display: "flex", justifyContent: 'flex-end' }}>
            <ButtonBlue

              onClick={() => console.log('click')}
            >
              Invitar
            </ButtonBlue>
            <ButtonBlueOutlined >
              Subir CSV
            </ButtonBlueOutlined>
          </Box>

        </Item>
      </Container>


    </Box>
  );
};
