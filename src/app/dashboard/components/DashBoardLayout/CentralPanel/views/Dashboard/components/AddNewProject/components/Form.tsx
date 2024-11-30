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
import * as Yup from 'yup'

import styled from '@emotion/styled'
import { SelectColors, AvatarCompany, AvatarContent, BgColor, BoxColor, BoxOpacity, CompanyCard, ContainerImages, ContainerOptions, ContentAddImageIcon, CoverCompany, InfoContainer, LabelOption, NameCompany, SelectImages } from '@/app/firstTime/components/steps/components/ComponentsStep4'
import { onChangeColor, onDropImageAvatar, onDropImageBg, onSendEmail } from '../controllers/FormAddProyect'
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
const FormAddProjects: NextPage<Props> = ({ }) => {
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


    const [loadBg, setLoadBg] = useState(false)
    const [opacityBg, setOpacityBg] = useState(0)

    const [loadAvatar, setLoadAvatar] = useState(false)
    const [opacityAvatar, setOpacityAvatar] = useState(0)
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onDropImageBg(acceptedFiles[0], setLoadBg, setOpacityBg, newCompany, setNewCompany)
    }, [newCompany])
    //falta acomodar esto
    const onDropAvatar = useCallback((acceptedFiles: File[]) => {
        onDropImageAvatar(acceptedFiles[0])
    }, [newCompany])
    const { getRootProps, getInputProps, } = useDropzone({ onDrop, maxFiles: 1 })
    const { getRootProps: getRootPropsAvatar, getInputProps: getInputPropsAvatar, } = useDropzone({ onDrop: onDropAvatar, maxFiles: 1 })
    const [optionToChangeBackground, setOptionToChangeBackground] = useState(0)
    return <div style={{ width: "100%" }}>

        <Container justifyContent='center' >
            <Item xs={12}>
                <CompanyCard style={{ backgroundColor: 'rgba(40,40,40,0)', }}>
                    <ContainerImages {...getRootProps()} style={{ height: 160, }}>
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
                    <InfoContainer style={{ padding: "0px 24px" }}>
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
                            <Form style={{ display: "flex", flexDirection: "column", gap: 4, }}>

                                <Input error={errors.email} touched={touched.email} name={"email"} label={`Email asociado a ${newCompany.name}`} placeholder="example@gmail.com" />

                                <div style={{ display: 'flex', gap: 4, width: '100%' }}>
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


                                <Container columnSpacing={1} rowSpacing={1}>
                                    <Item xs={12}>
                                        {optionToChangeBackground ?
                                            <div {...getRootProps()} style={{ width: "100%", backgroundColor: "blue" }}>
                                                <input {...getInputProps()} />
                                                <SelectImages />
                                            </div>
                                            : <SelectColors onChangeColor={onChangeColor} value={color} />
                                        }
                                    </Item>
                                    <Item xs={12}>
                                        <ButtonBlue type="submit">
                                            Continuar
                                        </ButtonBlue>
                                    </Item>
                                </Container>
                            </Form>
                        )}
                        </Formik>
                    </InfoContainer>
                </CompanyCard>
            </Item>
        </Container>
    </div >
}

export default FormAddProjects