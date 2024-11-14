import { CardWhite, Container, Item, } from '@/components/layout/Container'
import { NextPage } from 'next'
import { StepIndicator, SubTitle, Title } from '../Components'
import FadeIn from '@/components/animation/FadeIn'
import { Dispatch, SetStateAction, useMemo, useEffect, useState, useContext } from 'react'
import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons'
import { AuthContext } from '@/context/AuthContext'
import Input from '@/components/UI/Input'
import { Form, Formik } from 'formik'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { PRIMARYCOLOR, PRIMARYDARK } from '@/constants/Colors'
import { CheckIcon, NoCheckIcon } from '@/icons/CheckIcon'
import ApiController from '@/ApiController/ApiController'
import InidicatorSteps from './components/InidicatorSteps'
const Card = styled.div({
    borderRadius: 8,
    backgroundColor: 'white',
    display: 'flex',
    gap: 4,
    flexDirection: 'column',
    padding: 8,
    border: `solid 1px rgb(140,140,140)`,
    margin: '10px 0',
    transition: 'all 0.1s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
        boxShadow: `0 4px 10px -4px rgb(180,180,180)`,
        transform: 'scale(1.01)'
    },
    '&:active': {


        transform: 'scale(0.99)',
        boxShadow: `0 4px 10px -4px ${PRIMARYCOLOR}`,
    },
})
const TitleCard = styled(Typography)({
    color: PRIMARYDARK,
    fontWeight: 700,
    fontSize: 18

})
const TextCard = styled(Typography)({


})
interface Props { setStep: Dispatch<SetStateAction<number>> }
const TypeUser = [{
    id: 1,
    title: 'Corporativo',
    text: 'Ideal para entornos colaborativos y de equipo. Gestiona eficazmente tareas, asignaciones y recursos compartidos'
}, {
    id: 2,
    title: 'Autónomo',
    text: 'Perfecto para trabajadores independientes. Lleva un control detallado de proyectos y finanzas sin necesidad de colaboradores externos.'
},
]
const Step2: NextPage<Props> = ({ setStep }) => {
    const { user, setUser } = useContext(AuthContext)
    const [selected, setSelected] = useState<number | null>(null)
    const handleClick = async () => {
        const type = TypeUser.filter(e => e.id === selected)[0].title
        const result = await ApiController.updateUser({
            _id: user._id,
            typeUser: type
        })
        const { status, data } = result
        if (status === 200) {
            setUser(data.user)
            setStep(0)
        }
    }
    return <FadeIn>
        <div>
            <Container justifyContent='center'>
                <Item xs={5}>
                    <CardWhite>
                        <StepIndicator step={2} limit={2} />
                        <Title>
                            ¿Como deseas empezar a usar Workit?
                        </Title>
                        <br />
                        {TypeUser.map((type) => (
                            <Card key={type.id} onClick={() => setSelected(type.id)} style={{
                                borderColor: selected === type.id ? PRIMARYCOLOR : "rgb(140,140,140)",
                                boxShadow: selected === type.id ? `0 4px 10px -8px ${PRIMARYCOLOR}` : undefined,
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <TitleCard>
                                        {type.title}
                                    </TitleCard>
                                    {selected === type.id ? <CheckIcon size={22} /> : <NoCheckIcon size={22} />}
                                </div>
                                <TextCard>
                                    {type.text}
                                </TextCard>
                            </Card>
                        ))}
                        <br />
                        <Container>
                            <Item xs={12}>
                                <ButtonBlue disabled={!selected} onClick={() => handleClick()}>
                                    Siguiente
                                </ButtonBlue>
                                <br />
                            </Item>
                            <Item xs={12}>
                                <InidicatorSteps steps={2} />
                            </Item>
                        </Container>
                    </CardWhite>
                </Item>

            </Container>
        </div>
    </FadeIn>
}

export default Step2