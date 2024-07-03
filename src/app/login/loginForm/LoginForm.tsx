import Input from '@/components/UI/Input'
import { Form, Formik, FormikProps } from 'formik'
import { NextPage } from 'next'
import { InitialValues, loginSchema } from '../config/Validations'
import { loginUserFormik } from '@/types/User'
import { Dispatch, SetStateAction, useContext, useRef } from 'react'
import { HandleSubmitForm } from '../handlers/SubmitForm'
import { AppContext } from '@/context/AppContext'
import { Container, Item, Wrapper } from '@/components/layout/Container'
import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons'
import { CardWhite } from '../components/Components'
import { IconButton } from '@mui/material'
import Link from 'next/link'
import Icon from '@/components/UI/Icon'
import FadeIn from '@/components/animation/FadeIn'
interface Props { setStep: Dispatch<SetStateAction<number>> }

const LoginForm: NextPage<Props> = ({ setStep }) => {
    const { setSnackbarOpen } = useContext(AppContext)
    const FormRef = useRef<FormikProps<loginUserFormik>>(null)
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
                        <Container >
                            <Item xs={12}>
                                <IconButton onClick={() => setStep(0)}>
                                    <Icon src="arrowLeft" size={24} />
                                </IconButton>
                            </Item>
                            <Item xs={12}>
                                <Formik
                                    innerRef={FormRef}
                                    onSubmit={(values, { resetForm }) => {
                                        HandleSubmitForm(values, setSnackbarOpen)

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