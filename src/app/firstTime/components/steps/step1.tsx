import { CardWhite, Container, Item } from '@/components/layout/Container'
import { NextPage } from 'next'
import { StepIndicator, Title } from '../Components'
import FadeIn from '@/components/animation/FadeIn'
import { Dispatch, SetStateAction } from 'react'
import { ButtonBlue } from '@/components/UI/Buttons'

interface Props { setStep: Dispatch<SetStateAction<number>> }

const Step1: NextPage<Props> = ({ }) => {
    return <FadeIn>
        <div>
            <Container justifyContent='center'>
                <Item xs={5}>
                    <CardWhite>
                        <StepIndicator step={1} />
                        <Title>
                            ¿Desde que pais nos visitas?
                        </Title>
                        <br />
                        <Container justifyContent='center'>
                            <Item xs={8}>
                                <ButtonBlue>
                                    Siguiente
                                </ButtonBlue>
                            </Item>
                        </Container>

                    </CardWhite>
                </Item>
            </Container>
        </div>
    </FadeIn>
}

export default Step1