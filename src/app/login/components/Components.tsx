'use client'
import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import { PAPERGRAY, PRIMARYDARK, SECONDARYDARK } from '@/constants/Colors'
import { PRINCIPALFONT } from '@/constants/Fonts'
export const Card = styled(Box)({
    borderRadius: 8,
    padding: '48px 36px',
    //  border: `solid 1px ${PAPERGRAY}`

})

export const Title = styled(Typography)({
    fontWeight: 700,
    color: PRIMARYDARK,
    fontFamily: PRINCIPALFONT,
    fontSize: 32,
})
export const Subtitle = styled(Typography)({
    fontWeight: 500,
    color: PRIMARYDARK,
    fontFamily: PRINCIPALFONT,
    fontSize: 18,
})
export const Divider = styled.div({
    backgroundColor: SECONDARYDARK,
    width: '100%',
    height: 1
})

export const WhiteButton = styled(Button)({
    width: '100%',
    height: 48,
    fontFamily: PRINCIPALFONT,
    fontWeight: 700,
    fontSize: 14,
    color: PRIMARYDARK,
    textTransform: 'none',
    backgroundColor: 'white !important',       // Color de fondo del botón                // Color del texto del botón
    '&:hover': {                    // Estilos para el estado hover del botón
        backgroundColor: 'lightgray', // Color de fondo cuando el botón está en hover
    },
});
