'use client'
import React, { FC, useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Container, Item } from '../layout/Container';
import { Box, Button, CircularProgress, IconButton, Typography } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import { Card, ContainerButton, Text } from './components/Components';
//import ApiController from '@/ApiController/ApiController';
//import { FONTPRIMARYCOLOR } from '@/colors/Colors';
//import { AppContext } from '@/context/AppContext';

const Loader = styled(CircularProgress)({


    fontSize: 5,
    //   color: FONTPRIMARYCOLOR
})
const FacebookButton: FC<{ login?: boolean, ws?: boolean }> = ({ login, ws }) => {
    //  const { cart, user, setUser } = useContext(AppContext)
    const { data: session, status } = useSession()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (status !== 'loading') {
            setLoading(false)
        }

    }, [session])
    const Controller = async (e: any) => {
        //  e.preventDefault()
        if (loading === false) {

            setTimeout(async () => {
                await signIn("facebook", { redirect: false });
            }, 500)
        }
    }
    return (
        <>
            <Container>
                <Item xs={12}>

                    <Card onClick={Controller}>

                        {loading ? <Loader size="18px" /> :
                            <ContainerButton>
                                <Text>
                                    Iniciar con facebook
                                </Text>
                                <Image alt={''} src={'/assets/facebook.svg'} width={24} height={24} />
                            </ContainerButton>
                        }

                    </Card>



                </Item>
            </Container>
        </>
    )
}
export default FacebookButton