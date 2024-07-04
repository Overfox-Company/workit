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

export const Divider = styled.div({
  backgroundColor: SECONDARYDARK,
  width: '100%',
  height: 1,
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

export const DarkModeSwitch = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});
