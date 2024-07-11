'use client';
import { PAPERGRAY, PRIMARYDARK, SECONDARYDARK } from '@/constants/Colors';
import { TypographyProps } from '@/types/Layout';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React, { FC } from 'react';

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
  fontSize: 32,
  textAlign: 'center',
});

export const Text: FC<TypographyProps> = ({
  children,
  sx,
  size,
  fontWeight,
  color,
}) => {
  return (
    <Typography
      sx={{ sx }}
      fontSize={size}
      fontWeight={fontWeight ? fontWeight : 600}
      fontFamily={'Roboto'}
      // choose the color of the text from the imported ones
      color={color}
    >
      {children}
    </Typography>
  );
};
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
});

//should have the user name, search icon and notification icon
export const Header = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#FCF6F1',
  height: 120,
  width: '100%',
  paddingRight: 40,
});

export const ProfilePic = styled.img({
  width: 'auto',
  height: 'auto',
  borderRadius: '100%',
});

export const WorkSpaces = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '40px',
  backgroundColor: '#FEF0E4',
  borderRadius: 24,
  width: 'fit',
  height: '84%',
  maxHeight: 912,
  maxWidth: 'fit',
});

export const AddButton = styled.button({
  display: 'flex',
  flexDirection: 'row',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 16px',
  color: '#0B161F',
  borderRadius: 12,
  border: '1.5px solid #0B161F',
  cursor: 'pointer',
  fontSize: 18,
  fontWeight: 500,
  fontFamily: 'Roboto',
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
