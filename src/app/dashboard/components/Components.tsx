'use client';
import Icon from '@/components/UI/Icon';
import { PAPERGRAY, PRIMARYDARK, SECONDARYDARK } from '@/constants/Colors';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const SideBar = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  padding: 40,
  width: 387,
  height: '100vh',
  backgroundColor: '#FCF6F1',
});

export const Title = styled(Typography)({
  fontWeight: 700,
  color: PRIMARYDARK,
  fontFamily: 'Roboto',
  fontSize: 40,
});

export const Subtitle = styled(Typography)({
  fontWeight: 500,
  color: SECONDARYDARK,
  fontFamily: 'Roboto',
  fontSize: 18,
  textAlign: 'center',
});

export const List = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: 318,
});

export const ListItem = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 15,
  alignItems: 'center',
  fontWeight: 600,
  fontSize: 16,
  paddingLeft: 12,
  paddinY: 12,
  height: 46,

  '&:hover': {
    cursor: 'pointer',
  },

  '&.active': {
    backgroundColor: '#0B161F',
    borderRadius: 12,
    color: '#FFFFFF',
  },
});

export const Select = styled.select({
  width: 318,
  padding: '8px 12px',
  borderRadius: 24,
  border: 'none',
  backgroundColor: '#FFFFFF',
  color: '#000000',
  fontSize: 18,
  fontWeight: 600,
  fontFamily: 'Roboto',
  cursor: 'pointer',
});

export const TextBox = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 130,
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  backgroundColor: '#FFFFFF',
  borderRadius: 24,
  padding: '8px',
  marginTop: 150,
});

//should have the user name, search icon and notification icon
export const Header = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 20,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 40px',
  backgroundColor: '#FCF6F1',
  height: 120,
  width: 'fit',
});

export const ProfilePic = styled.img({
  width: 56,
  height: 56,
  borderRadius: '100%',
});

//should have the date and the tasks to do in the day
export const TaskCard = styled.div({
  //configure which props to pass
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: '0 40px',
  marginTop: 50,
  backgroundColor: '#FFFFFF',
  borderRadius: 24,
  height: 500,
  width: 'fit',
});
