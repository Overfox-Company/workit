import { NextPage } from 'next'
import { Container, Item } from '../layout/Container'
import { IconButton, Typography } from '@mui/material'
import Icon from './Icon'
import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { PRIMARYDARK } from '@/constants/Colors'
interface Props { onClick: any, children: ReactNode }
const Title = styled(Typography)({
    textAlign: 'center',
    fontWeight: 700,
    color: PRIMARYDARK,
    fontSize: 24
})
const HeaderForms: NextPage<Props> = ({ onClick, children }) => {
    return <Container alignItems='center' style={{ marginBottom: 8 }}>
        <Item xs={2}>
            <IconButton onClick={onClick}>
                <Icon src="arrowLeft" size={28} />
            </IconButton>
        </Item>
        <Item xs={8}>
            <Title>
                {children}
            </Title>
        </Item>

    </Container>

}

export default HeaderForms