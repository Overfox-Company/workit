'use client'
import GoogleButton from '@/components/Auth/Google'
import { NextPage } from 'next'
import React, { useRef } from 'react'
import { useSession } from 'next-auth/react'
import { Container, Item, Wrapper } from '@/components/layout/Container'
import { Form, Formik, FormikProps } from 'formik'
import Input from '@/components/UI/Input'
import { ButtonBlue } from '@/components/UI/Buttons'
import { CardVariants, SubtitleVariants, TitleVariants } from './config/Parameters'
import { Card, Divider, Subtitle, Title } from './components/Components'
import { InitialValues, loginSchema } from './config/Validations'
import { loginUser, loginUserFormik } from '@/types/User'
import Link from 'next/link'

interface Props { }


const Login: NextPage<Props> = ({ }) => {

    const FormRef = useRef<FormikProps<loginUserFormik>>(null)
    const SubmitForm = () => {
        if (FormRef.current) {
            FormRef.current.submitForm();
        }
    }
    return <Wrapper>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', }}>
            <Container justifyContent='center'>
                <Item xs={12} sm={8} md={6} lg={4} xl={5}>
                    <Card sx={CardVariants}>
                        <Container justifyContent='center' rowSpacing={{ xs: 1, md: 0 }} alignItems='center' gap={{ xs: 0, md: 1 }}>
                            <Item xs={12}>
                                <Title sx={{ fontSize: TitleVariants }}>
                                    Bienvenido a workit
                                </Title>
                            </Item>
                            <Item xs={12}>
                                <Subtitle sx={{ fontSize: SubtitleVariants }}>
                                    Comienza iniciando sesión
                                </Subtitle>
                            </Item>
                            <Item xs={12}>
                                <Formik
                                    innerRef={FormRef}
                                    onSubmit={(values, { resetForm }) => {
                                        console.log(values);
                                        // resetForm();
                                    }}
                                    validateOnChange={false} // No validar al cambiar
                                    validateOnBlur={false}
                                    initialValues={InitialValues}
                                    validationSchema={loginSchema}
                                >{({ errors, touched }) => (
                                    <Form>
                                        <Input error={errors.email} touched={touched.email} name={"email"} label={"Correo"} placeholder='Tu correo' />
                                        <Input error={errors.password} touched={touched.password} name={"password"} label={"Contraseña"} placeholder='******' type='password' />
                                    </Form>
                                )}
                                </Formik>
                            </Item>
                            <Item xs={12}>

                                <Subtitle sx={{ fontSize: SubtitleVariants }} style={{ fontWeight: 400 }}>
                                    ¿Ha olvidado su contraseña?
                                </Subtitle>

                            </Item>
                            <Item xs={12}>
                                <ButtonBlue type="submit" onClick={() => SubmitForm()}>
                                    Iniciar sesion
                                </ButtonBlue>

                            </Item>
                            <Item xs={6} md={5}>
                                <Subtitle sx={{ fontSize: SubtitleVariants }} style={{ fontWeight: 400 }}>
                                    ¿No tienes cuenta?
                                </Subtitle>
                            </Item>
                            <Item xs={6} md={5}>
                                <Subtitle sx={{ fontSize: SubtitleVariants }} style={{ fontWeight: 700 }}>
                                    <Link href={"/register"}>

                                        Crea una cuenta
                                    </Link>
                                </Subtitle>
                            </Item>
                            <Item xs={3}>
                                <Divider />
                            </Item>
                            <Item xs={6} md={5}>
                                <Subtitle sx={{ fontSize: SubtitleVariants }} style={{ fontWeight: 400 }}>
                                    Puedes iniciar con
                                </Subtitle>
                            </Item>
                            <Item xs={3}>
                                <Divider />
                            </Item>
                            <Item xs={12}>
                                <GoogleButton login />
                            </Item>
                        </Container>
                    </Card>
                </Item>
            </Container>
        </div>

    </Wrapper>
}

export default Login