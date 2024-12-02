import { CardWhite, Container, Item, } from '@/components/layout/Container'
import { NextPage } from 'next'
import { StepIndicator, Title } from '../Components'
import FadeIn from '@/components/animation/FadeIn'
import { Dispatch, SetStateAction, useMemo, useEffect, useState, useContext } from 'react'
import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons'
import { AuthContext } from '@/context/AuthContext'
import Input from '@/components/UI/Input'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import ApiController from '@/ApiController/ApiController'
import { CompanyContext } from '@/context/CompanyContext'
import { AppContext } from '@/context/AppContext'
import Skip from './controllers/Skip'
import InidicatorSteps from './components/InidicatorSteps'
interface Props { setStep?: Dispatch<SetStateAction<number>>; ds?: boolean; setOpen?: Dispatch<SetStateAction<boolean>> }
const validationSchema = Yup.object().shape({
    nameCompany: Yup.string()
});
const Step3: NextPage<Props> = ({ setStep, ds, setOpen }) => {
    const { user } = useContext(AuthContext)
    const { setSnackbarOpen } = useContext(AppContext)
    const { setCompanyList, getCompanies } = useContext(CompanyContext)
    const handleSend = async (nameCompany: string) => {
        const dataAddCompany = {
            id: user._id,
            nameCompany
        }
        const result = await ApiController.addCompany(dataAddCompany)
        const { status, company, message } = result.data

        if (status === 200) {

            if (setStep) {
                setCompanyList([company])
                setStep(1)
            }
            if (setOpen) {
                setOpen(false)
                getCompanies()
            }

        }
        setSnackbarOpen({ message, type: status === 200 ? 'success' : 'error' })
    }
    const [skip, setSkip] = useState(false)
    return skip ? <Skip /> : <FadeIn>
        <div>
            <Container justifyContent='center'>
                <Item xs={ds ? 12 : 5}>
                    <CardWhite>

                        <Title>
                            {ds ? "Nombre de la organizacion" : "¿Cual es el nombre de tu empresa?"}
                        </Title>
                        <br />
                        <Container justifyContent='center' columnSpacing={2} rowSpacing={2}>
                            <Item xs={10}>
                                <Formik

                                    onSubmit={(values) => handleSend(values.nameCompany)}
                                    validateOnChange={false} // No validar al cambiar
                                    validateOnBlur={false}
                                    initialValues={{ nameCompany: '' }}
                                    validationSchema={validationSchema}
                                >{({ errors, touched }) => (
                                    <Form>

                                        <Input error={errors.nameCompany} touched={touched.nameCompany} name={"nameCompany"} placeholder="Nombre tu empresa u organizacion" />
                                        <br />
                                        <Container columnSpacing={2} rowSpacing={2}>
                                            {ds ? null : <Item xs={6}>
                                                <ButtonBlueOutlined onClick={() => setSkip(true)}>
                                                    Omitir
                                                </ButtonBlueOutlined>
                                            </Item>}
                                            <Item xs={ds ? 12 : 6}>

                                                <ButtonBlue type="submit">
                                                    Continuar
                                                </ButtonBlue>
                                            </Item>
                                            {!ds ? <Item xs={12}>
                                                <InidicatorSteps steps={3} />
                                            </Item> : null}
                                        </Container>
                                    </Form>
                                )}
                                </Formik>
                            </Item>

                        </Container>

                    </CardWhite>
                </Item>
            </Container>
        </div>
    </FadeIn>
}

export default Step3