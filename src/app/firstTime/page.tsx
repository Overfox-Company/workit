'use client'
import { CardWhite, Container, Item, Wrapper } from '@/components/layout/Container'
import { NextPage } from 'next'
import Image from 'next/image'
import { SubTitle, Text, Title } from './components/Components'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { ButtonBlue } from '@/components/UI/Buttons'
import Presentation from './components/Presentation'
import Scale from '@/components/animation/Scale'
import Step1 from './components/steps/step1'
import Step2 from './components/steps/step2'
import Step3 from './components/steps/step3'
import Step4 from './components/steps/step4'
import { CompanyContext } from '@/context/CompanyContext'
import { useRouter } from 'next/navigation'
interface Props { }

const Page: NextPage<Props> = ({ }) => {
    const { companyList } = useContext(CompanyContext)
    const { user } = useContext(AuthContext)
    const [step, setStep] = useState(0)
    const router = useRouter()
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (user._id && !user.firstTime) {
            router.push("/dashboard")
        } else {
            setShow(true)
        }
    }, [user])
    return show ? <Wrapper>
        {user._id ?
            <Scale from={"0.5"} to="1">
                {!user.survey?.country ? <div>
                    {step === 0 ? <Presentation setStep={setStep} /> : null}
                    {step === 1 ? <Step1 setStep={setStep} /> : null}
                </div> : null}
                {user.survey?.country && !user.survey?.typeUser ? <div>
                    {step === 0 ? <Step2 setStep={setStep} /> : null}
                </div> : null}

                {user.survey?.country && user.survey?.typeUser && companyList.length === 0 ? <div>
                    {step === 0 ? <Step3 setStep={setStep} /> : null}
                </div> : null}
                {companyList.length > 0 && user.survey?.country && user.survey?.typeUser ?
                    <Step4 />
                    : null}

            </Scale>

            : null}

    </Wrapper> : null
}

export default Page