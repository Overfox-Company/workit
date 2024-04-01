'use client'
import React, { useEffect, useState, FC } from 'react';
import styled from '@emotion/styled';
import { Container, Item } from '../layout/Container';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import { PAPERGRAY, PRIMARYCOLOR, PRIMARYDARK } from '@/constants/Colors';
const Card = styled(Button)({
    display: "flex",
    padding: "14px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    height: 48,
    flex: " 1 0 0",
    borderRadius: 6,
    width: '100%',
})
const Loader = styled(CircularProgress)({
    fontSize: 5,
    color: PRIMARYCOLOR,

})
const Text = styled(Typography)({
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 14,
    color: PRIMARYDARK,
})
const GoogleButton: FC<{ login?: boolean }> = ({ login }) => {
    const { data: session, status } = useSession()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (status !== 'loading') {
            setLoading(false)
        }
    }, [session])
    const Controller = async () => {
        if (loading === false) {
            localStorage.setItem('typeInit', login ? 'login' : 'register')
            localStorage.setItem('typeLogin', 'google')
            setTimeout(async () => {
                await signIn("google", { redirect: false });
            }, 500)
        }
    }
    return (
        <>
            <Container>
                <Item xs={12}>
                    <Card onClick={Controller} style={{ backgroundColor: PAPERGRAY }}>
                        {loading ? <Loader size="18px" thickness={6} /> :
                            <div style={{ display: 'flex', alignItems: 'center', gap: 4, textTransform: 'none' }}>
                                <Image alt={''} src={'/assets/google.png'} width={24} height={24} />
                                <Text>
                                    Google
                                </Text>
                            </div>
                        }
                    </Card>
                </Item>
            </Container>
        </>
    )
}
export default GoogleButton