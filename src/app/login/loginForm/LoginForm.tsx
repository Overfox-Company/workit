import Input from '@/components/UI/Input'
import { Form, Formik, FormikProps } from 'formik'
import { NextPage } from 'next'
import { InitialValues, loginSchema } from '../config/Validations'
import { loginUserFormik } from '@/types/User'
import { Dispatch, SetStateAction, useContext, useRef } from 'react'
import { HandleSubmitForm } from '../handlers/SubmitForm'
import { AppContext } from '@/context/AppContext'
import { CardWhite, Container, Item, Wrapper } from '@/components/layout/Container'
import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons'
import { IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import Icon from '@/components/UI/Icon'
import FadeIn from '@/components/animation/FadeIn'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import HeaderForms from '@/components/UI/HeaderForms'
interface Props { setStep: Dispatch<SetStateAction<number>> }

const LoginForm: NextPage<Props> = ({ setStep }) => {
    const { setSnackbarOpen } = useContext(AppContext)
    const { user } = useContext(AuthContext)
    const FormRef = useRef<FormikProps<loginUserFormik>>(null)
    const route = useRouter()
    const SubmitForm = () => {
        if (FormRef.current) {
            FormRef.current.submitForm();
        }
    }
    return <Wrapper>
        <Container justifyContent='center'>
            <Item xs={10} md={8} lg={4}>
                <FadeIn>
                    <CardWhite>
                        <Container>
                            <Item xs={12}>
                                <HeaderForms onClick={() => setStep(0)}>
                                    Iniciar sesión
                                </HeaderForms>
                            </Item>
                            <Item xs={12}>
                                <Formik
                                    innerRef={FormRef}
                                    onSubmit={async (values, { resetForm }) => {
                                        const res = await HandleSubmitForm(values, setSnackbarOpen)
                                        if (res) {
                                            const a = user.firstTime ? '/firstTime' : '/dashboard'
                                            route.push(a)
                                        }
                                        // resetForm();
                                    }}
                                    validateOnChange={false} // No validar al cambiar
                                    validateOnBlur={false}
                                    initialValues={InitialValues}
                                    validationSchema={loginSchema}
                                >{({ errors, touched }) => (
                                    <Form>
                                        <Input
                                            iconName='email'
                                            iconSize={20}
                                            error={errors.email}
                                            touched={touched.email}
                                            name={"email"}
                                            label={"Correo"}
                                            placeholder='Tu correo'
                                        />
                                        <Input
                                            iconName='lock'
                                            iconSize={20}
                                            error={errors.password}
                                            touched={touched.password}
                                            name={"password"}
                                            label={"Contraseña"}
                                            placeholder='******'
                                            type="password"
                                        />
                                    </Form>
                                )}
                                </Formik>
                                <br />
                                <ButtonBlue type="submit" onClick={() => SubmitForm()}>
                                    Continuar
                                </ButtonBlue>
                                <br />
                                <Link href={"/register"}>
                                    <ButtonBlueOutlined>
                                        Crear cuenta
                                    </ButtonBlueOutlined>
                                </Link>
                            </Item>
                        </Container>
                    </CardWhite>
                </FadeIn>
            </Item>
        </Container>
    </Wrapper>



}

export default LoginForm