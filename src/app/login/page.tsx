'use client'
import { NextPage } from 'next'
import React, { useContext, useRef, useState } from 'react'

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