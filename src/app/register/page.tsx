'use client'
import GoogleButton from '@/components/Auth/Google'
import { Container, Item, Wrapper } from '@/components/layout/Container'
import { loginUser, registerUser } from '@/types/User'
import { Form, Formik, FormikProps } from 'formik'
import { NextPage } from 'next'
import { useContext, useEffect, useRef, useState } from 'react'
import { Card, Divider, Subtitle, Title } from './components/Components'
import { CardVariants, SubtitleVariants, TitleVariants } from './config/Parameters'
import { InitialValues, loginSchema } from './config/Validations'
import Input from '@/components/UI/Input'
import { ButtonBlue } from '@/components/UI/Buttons'
import Link from 'next/link'
import { HandleSubmitForm } from './handlers/SubmitForm'
import { AppContext } from '@/context/AppContext'
import { useSession } from 'next-auth/react'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    const { data: session } = useSession()
    const FormRef = useRef<FormikProps<registerUser>>(null)
    const [loadingButton, setLoadingButton] = useState(false)
    const { setSnackbarOpen } = useContext(AppContext)
    const SubmitForm = () => {
        if (FormRef.current) {
            FormRef.current.submitForm();
        }
    }
    useEffect(() => {
        console.log(session)
    }, [session])
    return <Wrapper>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', }}>
            <Container justifyContent='center'>
                <Item xs={12} sm={8} md={6} lg={4} xl={5}>
                    <Card sx={CardVariants}>
                        <Container justifyContent='center' rowSpacing={{ xs: 1, md: 0 }} alignItems='center' gap={{ xs: 0, md: 1 }}>
                            <Item xs={12}>
                                <Title sx={{ fontSize: TitleVariants }}>
                                    Somos workit
                                </Title>
                            </Item>
                            <Item xs={12}>
                                <Subtitle sx={{ fontSize: SubtitleVariants }}>
                                    ¿Nuevo por aqui? ¡Crea una cuenta!
                                </Subtitle>
                            </Item>
                            <Item xs={12}>
                                <Formik
                                    innerRef={FormRef}
                                    onSubmit={(values) => {
                                        HandleSubmitForm(values, setLoadingButton, setSnackbarOpen)
                                    }}
                                    validateOnChange={false} // No validar al cambiar
                                    validateOnBlur={false}
                                    initialValues={InitialValues}
                                    validationSchema={loginSchema}
                                >{({ errors, touched }) => (
                                    <Form>
                                        <Input error={errors.email} touched={touched.email} name={"email"} label={"Correo"} placeholder='Tu correo' />
                                        <Input error={errors.password} touched={touched.password} name={"password"} label={"Contraseña"} placeholder='******' type='password' />
                                        <Input error={errors.repeatPassword} touched={touched.repeatPassword} name={"repeatPassword"} label={"Repite la contraseña"} placeholder='******' type='password' />

                                    </Form>
                                )}
                                </Formik>
                            </Item>

                            <Item xs={12}>
                                <ButtonBlue type="submit" onClick={() => SubmitForm()}>
                                    Registrarme
                                </ButtonBlue>

                            </Item>
                            <Item xs={6} md={5}>
                                <Subtitle sx={{ fontSize: SubtitleVariants }} style={{ fontWeight: 400 }}>
                                    ¿Ya tienes cuenta?
                                </Subtitle>
                            </Item>
                            <Item xs={6} md={5}>
                                <Subtitle sx={{ fontSize: SubtitleVariants }} style={{ fontWeight: 700 }}>
                                    <Link href={"/login"}>

                                        ¡Accede aqui!
                                    </Link>
                                </Subtitle>
                            </Item>

                        </Container>
                    </Card>
                </Item>
            </Container>
        </div>

    </Wrapper>
}

export default Page