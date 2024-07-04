import GoogleButton from '@/components/Auth/Google'
import { Container, Item, Wrapper } from '@/components/layout/Container'
import { NextPage } from 'next'
import { Card, Divider, Subtitle, Title, WhiteButton } from '../components/Components'
import { CardVariants, SubtitleVariants, TextVariants, TitleVariants } from '../config/Parameters'
import FacebookButton from '@/components/Auth/Facebook'
import React, { Dispatch, SetStateAction } from 'react'
import FadeIn from '@/components/animation/FadeIn'

interface Props { setStep: Dispatch<SetStateAction<number>> }

const SocialInit: NextPage<Props> = ({ setStep }) => {
    return <Wrapper login>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <FadeIn>
                <Container justifyContent='flex-start' alignItems='center'>
                    <Item xs={12} sm={8} md={6} lg={5} xl={5} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card sx={CardVariants}>
                            <Container justifyContent='center' rowSpacing={{ xs: 1, md: 0 }} alignItems='center' gap={{ xs: 0, md: 1 }}>
                                <Item xs={12}>
                                    <Title sx={{ fontSize: TitleVariants }}>
                                        Bienvenido a workit
                                    </Title>
                                </Item>
                                <Item xs={12}>
                                    <Subtitle sx={{ fontSize: SubtitleVariants }}>
                                        Comienza de forma gratuita, puedes actualizar<br /> cuando desees
                                    </Subtitle>
                                </Item>

                                <Item xs={12}>
                                    <Subtitle sx={{ fontSize: TextVariants }}>
                                        Accede con:
                                    </Subtitle>
                                </Item>

                                <Item xs={12}>
                                    <FacebookButton login />
                                </Item>
                                <Item xs={12}>
                                    <GoogleButton login />
                                </Item>
                                <Item xs={3}>
                                    <Divider />
                                </Item>
                                <Item xs={1}>
                                    <Subtitle sx={{ fontSize: TextVariants, textAlign: 'center' }}>
                                        o
                                    </Subtitle>
                                </Item>
                                <Item xs={3}>
                                    <Divider />
                                </Item>
                                <Item xs={12}>
                                    <WhiteButton onClick={() => setStep(1)}>
                                        Usar correo electronico
                                    </WhiteButton>
                                </Item>
                            </Container>
                        </Card>
                    </Item>

                </Container>
            </FadeIn>

        </div>

    </Wrapper>
}

export default SocialInit