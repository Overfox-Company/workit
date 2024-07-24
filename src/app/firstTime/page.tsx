'use client'
import { CardWhite, Container, Item, Wrapper } from '@/components/layout/Container'
import { NextPage } from 'next'
import Image from 'next/image'
import { SubTitle, Text, Title } from './components/Components'
import { useContext, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { ButtonBlue } from '@/components/UI/Buttons'
import Presentation from './components/Presentation'
import Scale from '@/components/animation/Scale'
import Step1 from './components/steps/step1'
import Step2 from './components/steps/steps2'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    const { user } = useContext(AuthContext)
    const [step, setStep] = useState(0)
    return <Wrapper>
        {user._id ?
            <Scale from={"0.5"} to="1">
                {!user.survey?.country ? <div>
                    {step === 0 ? <Presentation setStep={setStep} /> : null}
                    {step === 1 ? <Step1 setStep={setStep} /> : null}
                </div> : null}

                {user.survey?.country ? <div>
                    {step === 0 ? <Step2 setStep={setStep} /> : null}
                </div> : null}
            </Scale>

            : null}

    </Wrapper>
}

export default Page