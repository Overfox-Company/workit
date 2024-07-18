'use client'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { PAPERGRAY, PRIMARYDARK, SECONDARYDARK } from '@/constants/Colors'
import { PRINCIPALFONT } from '@/constants/Fonts'
export const Card = styled(Box)({
    borderRadius: 8,
    padding: '48px 36px',
    //  border: `solid 1px ${PAPERGRAY}`,
    backgroundColor: 'white'
})

export const Title = styled(Typography)({
    fontWeight: 700,
    color: PRIMARYDARK,
    fontFamily: PRINCIPALFONT,
    fontSize: 32,
    textAlign: 'center'
})
export const Subtitle = styled(Typography)({
    fontWeight: 500,
    color: SECONDARYDARK,
    fontFamily: PRINCIPALFONT,
    fontSize: 10,
    textAlign: 'center'
})
export const Divider = styled.div({
    backgroundColor: SECONDARYDARK,
    width: '100%',
    height: 1
})

