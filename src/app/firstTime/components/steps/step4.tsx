import { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import { CompanyContext } from '@/context/CompanyContext'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { CompanyType, InitialCompany } from '@/types/Company'
import { Box, Button, Typography } from '@mui/material'
import { Container, Item } from '@/components/layout/Container'
import { PRIMARYCOLOR, PRIMARYDARK } from '@/constants/Colors'
import Scale from '@/components/animation/Scale'
import { AppContext } from '@/context/AppContext'
import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons'
import { Form, Formik } from 'formik'
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Input from '@/components/UI/Input'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const AvatarCompany = styled(Image)({
    position: 'absolute',
    top: -35,
    zIndex: 10,
    borderRadius: 8
})
const CompanyCard = styled(Box)({
    borderRadius: 24,
    paddingBottom: 40,
    backgroundColor: 'white',

})
const CoverCompany = styled(Image)({
    borderRadius: "24px 24px 0 0",

})
const ContainerImages = styled(Box)({
    position: 'relative',
    width: '100%',
    height: 200,
    borderRadius: "24px 24px 0 0",
    "&:hover #containerOPtions": {
        opacity: 1
    }
})
const InfoContainer = styled(Box)({
    position: 'relative',
    padding: '0px 40px'
})
const BgColor = styled(Box)({
    width: '100%',
    height: '100%',
    transition: 'all 0.1s ease-in-out',
    borderRadius: "24px 24px 0 0",
})
const NameCompany = styled(Typography)({
    fontWeight: 700,
    fontSize: 28
})
const ContainerOptions = styled(Box)({
    cursor: 'pointer',
    transition: 'all 0.1s ease-in-out',
    position: 'absolute',
    right: 10,
    bottom: 10,
    display: 'flex',
    gap: 8,
    opacity: 0
})
const BoxOpacity = styled(Box)({
    borderRadius: 8,
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgb(11,22,31,0.6)'

})
const BoxColor = styled(Box)({
    height: 22,
    width: 22,
    cursor: 'pointer',
    borderRadius: 4
})
const LabelOption = styled(Typography)({
    color: 'white',
    fontWeight: 700,
    fontSize: 12

})
interface Props { }
const Colors = ["rgb(85,85,85)", "rgb(96,38,154)", "rgb(238,175,96)", PRIMARYCOLOR, PRIMARYDARK, "rgb(76,86,206)", "rgb(228,69,110)", "rgb(91,183,97)", "rgb(84,177,250)"]
const Step4: NextPage<Props> = ({ }) => {
    const { companyList } = useContext(CompanyContext)
    const { user } = useContext(AuthContext)
    const { loadingScreen } = useContext(AppContext)
    const [show, setShow] = useState(false)
    const [color, setColor] = useState(Colors[Math.floor(Math.random() * Colors.length)])
    const [newCompany, setNewCompany] = useState<CompanyType>(InitialCompany)
    useEffect(() => {
        const filter = companyList.filter(company => company.idOwner === user._id)[0]
        if (filter?._id && !newCompany._id) {
            console.log(filter)
            setNewCompany(filter)
        }

    }, [user, companyList])
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

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return show ? <div>
        <Scale from={"0.8"} to={"1"}>
            <Container justifyContent='center'>
                <Item xs={5}>
                    <CompanyCard>
                        <ContainerImages>
                            {newCompany.bg ?
                                < CoverCompany src={'/assets/default/ld.jpg'} fill objectFit='cover' alt="cover company" /> :

                                <BgColor style={{ backgroundColor: color }} />

                            }
                            <ContainerOptions id="containerOPtions" style={{ opacity: open ? 1 : undefined }}>
                                <BoxOpacity>
                                    <LabelOption>
                                        Image
                                    </LabelOption>
                                    <InsertPhotoIcon style={{ color: 'white', cursor: 'pointer' }} />
                                </BoxOpacity>
                                <BoxOpacity >
                                    <LabelOption>
                                        Color
                                    </LabelOption>
                                    <ClickAwayListener onClickAway={handleTooltipClose}>
                                        <div>
                                            <Tooltip
                                                arrow

                                                placement='right'
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                                onClose={handleTooltipClose}
                                                open={open}
                                                disableFocusListener
                                                disableHoverListener
                                                disableTouchListener
                                                title={
                                                    Colors.map(color => (

                                                        <BoxColor key={color} style={{ backgroundColor: color }} onClick={() => { setColor(color) }} />


                                                    )
                                                    )


                                                }
                                            >
                                                <BoxColor style={{ backgroundColor: color, border: 'solid 1px rgb(250,250,250)' }} onClick={handleTooltipOpen} />
                                            </Tooltip>
                                        </div>
                                    </ClickAwayListener>
                                </BoxOpacity>
                            </ContainerOptions>
                        </ContainerImages>
                        <InfoContainer>
                            <AvatarCompany src={'/assets/default/avatarcompany.svg'} width={60} height={60} alt='Company image' />
                            <br />

                            <NameCompany>
                                {newCompany.name}
                            </NameCompany>
                            <br />
                            <Formik

                                onSubmit={(values) => console.log(values.nameCompany)}
                                validateOnChange={false} // No validar al cambiar
                                validateOnBlur={false}
                                initialValues={{ nameCompany: '' }}
                            //validationSchema={validationSchema}
                            >{({ errors, touched }) => (
                                <Form>

                                    <Input error={errors.nameCompany} touched={touched.nameCompany} name={"emailCompany"} label={`Email asociado a ${newCompany.name}`} placeholder="example@gmail.com" />
                                    <br />
                                    <Container columnSpacing={2} rowSpacing={2}>
                                        <Item xs={6}>
                                            <ButtonBlueOutlined>
                                                Omitir
                                            </ButtonBlueOutlined>
                                        </Item>
                                        <Item xs={6}>

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
        </Scale>

    </div> : null
}

export default Step4