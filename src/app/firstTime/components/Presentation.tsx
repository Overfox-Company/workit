import { CardWhite, Container, Item } from '@/components/layout/Container'
import { NextPage } from 'next'
import Image from 'next/image'
import { SubTitle, Text, Title } from './Components'
import { Dispatch, SetStateAction, useContext, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { ButtonBlue } from '@/components/UI/Buttons'
const Ilustration = '/assets/CheckimageFirstTime.svg'

interface Props { setStep: Dispatch<SetStateAction<number>> }

const Presentation: NextPage<Props> = ({ setStep }) => {
    const { user } = useContext(AuthContext)


    return <Container justifyContent='center'>
        <Item xs={5}>
            <div>
                <CardWhite>
                    <Image width={50} height={50} src={Ilustration} alt="ilustration check" />
                    <Title>
                        ¡Bienvenido {user.name ? user.name.split(" ")[0] : null}!
                    </Title>
                    <br />
                    <SubTitle>
                        Nuestra mision es hacerte mas productivo
                    </SubTitle>
                    <br />
                    <Text>
                        esto solo tomara un minuto
                    </Text>
                    <br />
                    <Container justifyContent='center'>
                        <Item xs={8}>
                            <ButtonBlue onClick={() => setStep(1)}>
                                Hagamoslo!
                            </ButtonBlue>
                        </Item>
                    </Container>
                </CardWhite>
            </div>
        </Item>

    </Container>
}

export default Presentation