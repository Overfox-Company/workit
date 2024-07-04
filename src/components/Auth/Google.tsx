'use client'
import React, { useEffect, useState, FC } from 'react';
import { Container, Item } from '../layout/Container';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import { Card, ContainerButton, Loader, Text } from './components/Components';

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
                    <Card onClick={Controller} style={{ backgroundColor: 'white' }}>
                        {loading ? <Loader size="18px" thickness={6} /> :
                            <ContainerButton >
                                <Text>
                                    Iniciar con Google
                                </Text>
                                <Image alt={''} loading="eager" src={'/assets/google.png'} width={24} height={24} />

                            </ContainerButton>
                        }
                    </Card>
                </Item>
            </Container>
        </>
    )
}
export default GoogleButton