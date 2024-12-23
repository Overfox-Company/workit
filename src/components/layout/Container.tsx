'use client'
import React, { FC } from 'react'
import { Box, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { ContainerProps, ItemProps } from '@/types/Layout';
import { BGSCREEN } from '@/constants/Colors';

const Section = styled.section({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    aligItems: 'center',
})
const StylePrincipalContainer = styled.main({
    display: 'grid',
    gridTemplateColumns: ' minmax(100%, 2fr)',
    maxWidth: 1440,
    width: '100%',
    margin: '0 auto',
    placeItems: " center;"

})
const StyleContentContainer = styled.div({
    display: 'grid',
    gridTemplateColumns: ' minmax(100%, 1fr)',
    width: '100%',
    padding: '0 5px',
    maxWidth: 1240,
})
const loginImage = {
    backgroundColor: BGSCREEN,
    backgroundImage: 'url("./assets/bg.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'contain'
}
export const PrincipalContainer: FC<ContainerProps> = ({ children, ...props }) => {
    return (
        <StylePrincipalContainer  {...props}>
            {children as any}
        </StylePrincipalContainer>
    )
}
export const ContentContainer: FC<ContainerProps> = ({ children, ...props }) => {
    return (
        <StyleContentContainer  {...props}>
            {children as any}
        </StyleContentContainer>
    )
}

export const Container: FC<ContainerProps> = ({ children, ...props }) => {

    return (<Grid container {...props}>
        {children}
    </Grid>)
}
export const Item: FC<ItemProps> = ({ children, ...props }) => {
    return (<Grid item {...props}>
        {children}
    </Grid>)
}
export const Wrapper: FC<ContainerProps> = ({ login, children, ...props }) => {
    return (<Section id="section" {...props} style={login ? loginImage : { backgroundColor: BGSCREEN }}>
        <PrincipalContainer>
            <ContentContainer>
                {children}
            </ContentContainer>
        </PrincipalContainer>
    </Section >)
}
export const Row: FC<ContainerProps> = ({ children, ...props }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }} {...props}>
            {children}
        </div>
    )
}
export const Column: FC<ContainerProps> = ({ children, ...props }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} {...props}>
            {children}
        </div>
    )
}
export const CardWhite = styled(Box)({
    borderRadius: 12,
    padding: '48px 30px',
    paddingTop: 36,
    display: 'flex',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center'
})