import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField } from '@mui/material';
import { NextPage } from 'next';

interface Props {}
export const InputsLine: NextPage<Props> = ({}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        marginTop: 2,
      }}
    >
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
          width: '397px',
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
      <ButtonBlue
        style={{ width: '140px' }}
        onClick={() => console.log('click')}
      >
        Invitar
      </ButtonBlue>
      <ButtonBlueOutlined style={{ width: '133px' }}>
        Subir CSV
      </ButtonBlueOutlined>
    </Box>
  );
};
