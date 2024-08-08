import React, { useEffect, useState, FC } from 'react';
import styled from '@emotion/styled';
import { Container, Item } from '../../layout/Container';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import { PAPERGRAY, PRIMARYCOLOR, PRIMARYDARK } from '@/constants/Colors';
import { PRINCIPALFONT } from '@/constants/Fonts';
export const Card = styled(Button)({
    display: "flex",
    padding: "14px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    height: 48,
    flex: " 1 0 0",
    borderRadius: 6,
    width: '100%',
    backgroundColor: 'white !important',
})
export const Loader = styled(CircularProgress)({
    fontSize: 5,
    color: PRIMARYCOLOR,

})
export const Text = styled(Typography)({
    fontFamily: PRINCIPALFONT,
    fontWeight: 700,
    fontSize: 14,
    color: PRIMARYDARK,
})
export const ContainerButton = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    textTransform: 'none',
    width: 165,
    justifyContent: 'space-between'
})