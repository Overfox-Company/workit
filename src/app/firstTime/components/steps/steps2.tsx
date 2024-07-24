import { CardWhite, Container, Item, } from '@/components/layout/Container'
import { NextPage } from 'next'
import { StepIndicator, Title } from '../Components'
import FadeIn from '@/components/animation/FadeIn'
import { Dispatch, SetStateAction, useMemo, useEffect, useState, useContext } from 'react'
import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons'
import { AuthContext } from '@/context/AuthContext'
import Input from '@/components/UI/Input'
import { Form, Formik } from 'formik'
interface Props { setStep: Dispatch<SetStateAction<number>> }

const Step2: NextPage<Props> = ({ setStep }) => {
    const { user, setUser } = useContext(AuthContext)
    const handleClick = async () => {

    }
    return <FadeIn>
        <div>
            <Container justifyContent='center'>
                <Item xs={5}>
                    <CardWhite>
                        <StepIndicator step={2} />
                        <Title>
                            ¿Cual es el nombre de tu empresa?
                        </Title>
                        <br />
                        <Container justifyContent='center' columnSpacing={2} rowSpacing={2}>
                            <Item xs={10}>
                                <Formik

                                    onSubmit={(values) => console.log(values)}
                                    validateOnChange={false} // No validar al cambiar
                                    validateOnBlur={false}
                                    initialValues={{ name: '' }}
                                //validationSchema={loginSchema}
                                >{({ errors, touched }) => (
                                    <Form>
                                        <Input error={errors.name} touched={touched.name} name={"name"} placeholder="Nombre tu empresa u organizacion" />
                                    </Form>
                                )}
                                </Formik>
                            </Item>
                            <Item xs={5}>
                                <ButtonBlueOutlined>
                                    Omitir
                                </ButtonBlueOutlined>
                            </Item>
                            <Item xs={5}>

                                <ButtonBlue onClick={() => handleClick()}>
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

export default Step2