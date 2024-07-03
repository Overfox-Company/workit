'use client'
import GoogleButton from '@/components/Auth/Google'
import { NextPage } from 'next'
import React, { useContext, useRef, useState } from 'react'
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
import { HandleSubmitForm } from './handlers/SubmitForm'
import { AppContext } from '@/context/AppContext'
import SocialInit from './SocialInit/SocialInit'
import LoginForm from './loginForm/LoginForm'


interface Props { }


const Login: NextPage<Props> = ({ }) => {

    const [step, setStep] = useState(0)
    return <div>
        {step === 0 ? <SocialInit setStep={setStep} /> : null}
        {step === 1 ? <LoginForm setStep={setStep} /> : null}
    </div>
}

export default Login