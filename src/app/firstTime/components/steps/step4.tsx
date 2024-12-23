import { NextPage } from 'next'
import { CompanyContext } from '@/context/CompanyContext'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { CompanyType, InitialCompany } from '@/types/Company'
import { Avatar, Box, Button, } from '@mui/material'
import { Container, Item } from '@/components/layout/Container'
import { BGSCREEN, PRIMARYCOLOR, PRIMARYDARK, TEXTDARK } from '@/constants/Colors'
import Scale from '@/components/animation/Scale'
import { AppContext } from '@/context/AppContext'
import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons'
import { Form, Formik } from 'formik'
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Input from '@/components/UI/Input'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ApiController from '@/ApiController/ApiController'
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation'
import { AvatarCompany, AvatarContent, BgColor, BoxColor, BoxOpacity, CompanyCard, ContainerImages, ContainerOptions, ContentAddImageIcon, CoverCompany, InfoContainer, LabelOption, NameCompany, SelectColors, SelectImages } from './components/ComponentsStep4'
import * as Yup from 'yup'
import Skip from './controllers/Skip'

import styled from '@emotion/styled'
import InidicatorSteps from './components/InidicatorSteps'
interface Props { }

const validationSchema = Yup.object({
    email: Yup.string().email('Debe ser un correo electrónico válido').required('El correo es obligatorio')
});
const ButtonToSelect = styled(Button)({
    fontWeitgh: 700,
    borderRadius: 8,
    textTransform: 'none',
    boxShadow: 'none',
    "&:hover": {
        boxShadow: 'none'
    }

})
const Colors = ["rgb(85,85,85)", "rgb(96,38,154)", "rgb(238,175,96)", PRIMARYCOLOR, PRIMARYDARK, "rgb(76,86,206)", "rgb(228,69,110)", "rgb(91,183,97)", "rgb(84,177,250)"]
const Step4: NextPage<Props> = ({ }) => {
    const route = useRouter()
    const { companyList } = useContext(CompanyContext)
    const { user } = useContext(AuthContext)
    const { loadingScreen, setSnackbarOpen, setLoadingScreen } = useContext(AppContext)
    const [show, setShow] = useState(false)
    const [color, setColor] = useState(Colors[Math.floor(Math.random() * Colors.length)])
    const [newCompany, setNewCompany] = useState<CompanyType>(InitialCompany)

    useEffect(() => {
        const filter = companyList.filter(company => company.idOwner === user._id)[0]

        if (filter?._id && !newCompany._id) {

            console.log(filter)
            setNewCompany(filter)
            if (filter.bgColor) {
                setColor(filter.bgColor)
            }
        }
    }, [user, companyList, newCompany])

    useEffect(() => {
        if (!loadingScreen) {
            setTimeout(() => {
                setShow(true)
            }, 100)
        }
    }, [loadingScreen])

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };
    const handleTooltipOpen = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setOpen(true);
    };
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onDropImageBg(acceptedFiles[0])
    }, [newCompany])
    const { getRootProps, getInputProps, } = useDropzone({ onDrop, maxFiles: 1 })
    const [loadBg, setLoadBg] = useState(false)
    const [opacityBg, setOpacityBg] = useState(0)

    const [loadAvatar, setLoadAvatar] = useState(false)
    const [opacityAvatar, setOpacityAvatar] = useState(0)
    const onDropAvatar = useCallback((acceptedFiles: File[]) => {
        onDropImageAvatar(acceptedFiles[0])
    }, [newCompany])
    const { getRootProps: getRootPropsAvatar, getInputProps: getInputPropsAvatar, } = useDropzone({ onDrop: onDropAvatar, maxFiles: 1 })
    const onDropImageBg = async (File: File) => {
        setLoadBg(true)
        setTimeout(() => {
            setOpacityBg(1)
        }, 10)
        const form: any = new FormData()
        form.append("bg", File)
        console.log(newCompany)
        if (newCompany._id) {
            form.append("id_company", newCompany._id)
        }


        const res = await ApiController.editCompany(form)
        console.log(res)
        const { company } = res.data
        if (company) {
            setNewCompany(company)

        }
        setTimeout(() => {
            setOpacityBg(0)
        }, 1000)
        setTimeout(() => {
            setLoadBg(false)
        }, 1300)

    }
    const onDropImageAvatar = async (File: File) => {
        setLoadAvatar(true)
        setTimeout(() => {
            setOpacityAvatar(1)
        }, 10)
        const form: any = new FormData()
        form.append("avatar", File)
        if (newCompany._id) {
            form.append("id_company", newCompany._id)
        }
        const res = await ApiController.editCompany(form)

        const { company } = res.data
        if (company) {
            setNewCompany(company)
        }
        setTimeout(() => {
            setOpacityAvatar(0)
        }, 1000)
        setTimeout(() => {
            setLoadAvatar(false)
        }, 1300)

    }
    const onChangeColor = async (color: string) => {

        setLoadBg(true)
        setTimeout(() => {
            setOpacityBg(1)
        }, 10)
        const formData: any = new FormData()
        if (newCompany._id) {
            formData.append("id_company", newCompany._id)
        }
        formData.append("bgColor", color)
        const res = await ApiController.editCompany(formData)
        console.log(res)
        const { company } = res.data
        if (company) {
            setNewCompany(company)

        }
        setColor(color)
        setTimeout(() => {
            setOpacityBg(0)
        }, 1000)
        setTimeout(() => {
            setLoadBg(false)

        }, 1300)
    }
    const onSendEmail = async (email: string) => {
        const formData: any = new FormData()
        if (newCompany._id) {
            formData.append("id_company", newCompany._id)
        }
        formData.append("id_user", user._id)
        formData.append("email", email)
        const result = await ApiController.editCompany(formData)
        const { company, message } = result.data
        if (company) {
            setNewCompany(company)
            route.push('/dashboard')
        } else {
            setSnackbarOpen({ message, type: "error" })
        }
    }
    const [skip, setSkip] = useState(false)
    const [optionToChangeBackground, setOptionToChangeBackground] = useState(0)
    return skip ? <Skip /> : show ? <div>
        <Scale from={"0.8"} to={"1"}>
            <Container justifyContent='center'>
                <Item xs={5}>
                    <CompanyCard>
                        <ContainerImages {...getRootProps()}>
                            {loadBg ?
                                <ContentAddImageIcon style={{ zIndex: 9, opacity: opacityBg, backgroundColor: 'rgba(40,40,40,1)', }}>
                                    <CircularProgress style={{ color: PRIMARYCOLOR, width: 18, height: 18 }} />
                                </ContentAddImageIcon>

                                : null}
                            <ContentAddImageIcon id="containerOPtions">
                                <AddPhotoAlternateIcon style={{ color: 'rgb(240,240,240)', fontSize: 24 }} />
                            </ContentAddImageIcon>
                            <input {...getInputProps()} />
                            {newCompany.bg ?
                                <CoverCompany src={newCompany.bg} fill objectFit='cover' alt="cover company" /> :
                                <BgColor style={{ backgroundColor: color }} />
                            }
                            <ContainerOptions style={{ opacity: open ? 1 : undefined }}>
                                <BoxOpacity>
                                    <LabelOption>
                                        Image
                                    </LabelOption>
                                    <InsertPhotoIcon style={{ color: 'white', cursor: 'pointer' }} />
                                </BoxOpacity>

                            </ContainerOptions>
                        </ContainerImages>
                        <InfoContainer>
                            <AvatarContent {...getRootPropsAvatar()}>
                                <input {...getInputPropsAvatar()} />
                                {loadAvatar ?
                                    <ContentAddImageIcon style={{ zIndex: 9, opacity: opacityAvatar, backgroundColor: 'rgba(40,40,40,1)', borderRadius: 8 }}>
                                        <CircularProgress style={{ color: PRIMARYCOLOR, width: 18, height: 18 }} />
                                    </ContentAddImageIcon>

                                    : null}
                                <ContentAddImageIcon id="avatar" style={{ borderRadius: 8, backgroundColor: 'rgba(40,40,40,1)', zIndex: 9 }}>
                                    <AddPhotoAlternateIcon style={{ color: 'rgb(240,240,240)', fontSize: 24 }} />
                                </ContentAddImageIcon>

                                {newCompany.avatar ? <AvatarCompany src={newCompany.avatar} fill objectFit='cover' alt='Company image' />
                                    : <Avatar style={{ borderRadius: 8 }} sx={{ width: 61, height: 61 }}>
                                        {newCompany.name?.slice(0)[0]}
                                    </Avatar>
                                }  </AvatarContent>
                            <br />
                            <NameCompany>
                                {newCompany.name}
                            </NameCompany>
                            <br />
                            <Formik

                                onSubmit={(values) => onSendEmail(values.email)}
                                validateOnChange={false} // No validar al cambiar
                                validateOnBlur={false}
                                initialValues={{ email: '' }}
                                validationSchema={validationSchema}
                            >{({ errors, touched }) => (
                                <Form>

                                    <Input error={errors.email} touched={touched.email} name={"email"} label={`Email asociado a ${newCompany.name}`} placeholder="example@gmail.com" />
                                    <br />
                                    <div style={{ display: 'flex', gap: 4 }}>
                                        {["Color de fondo", "Imagen de fondo"].map((text, index) => (
                                            < ButtonToSelect key={text} onClick={() => setOptionToChangeBackground(index)} variant='contained'

                                                style={{
                                                    color: optionToChangeBackground !== index ? TEXTDARK : "white",
                                                    backgroundColor: optionToChangeBackground !== index ? BGSCREEN : PRIMARYDARK
                                                }}>
                                                {text}
                                            </ButtonToSelect>
                                        ))}
                                    </div>

                                    <br />
                                    <Container columnSpacing={2} rowSpacing={2}>
                                        <Item xs={12}>
                                            {optionToChangeBackground ?
                                                <div {...getRootProps()}>


                                                    <input {...getInputProps()} />

                                                    <SelectImages />
                                                </div>


                                                : <SelectColors onChangeColor={onChangeColor} value={color} />
                                            }
                                        </Item>
                                        <Item xs={6}>
                                            <ButtonBlueOutlined onClick={() => { setLoadingScreen(true); setSkip(true) }}>
                                                Omitir
                                            </ButtonBlueOutlined>
                                        </Item>
                                        <Item xs={6}>

                                            <ButtonBlue type="submit">
                                                Continuar
                                            </ButtonBlue>
                                        </Item>
                                        <Item xs={12}>
                                            <InidicatorSteps steps={4} />
                                        </Item>
                                    </Container>
                                </Form>
                            )}
                            </Formik>

                        </InfoContainer>
                    </CompanyCard>

                </Item>
            </Container>
        </Scale>

    </div > : null
}

export default Step4