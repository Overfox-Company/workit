import Step4 from '@/app/firstTime/components/steps/step4'
import { NextPage } from 'next'
import { Dispatch, SetStateAction, useCallback, useContext, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Step3 from '@/app/firstTime/components/steps/step3';
import { AvatarCompany, AvatarContent, BgColor, BoxOpacity, ContainerImages, ContainerOptions, ContentAddImageIcon, CoverCompany, InfoContainer, LabelOption } from '@/app/firstTime/components/steps/components/ComponentsStep4';
import { Avatar, CircularProgress } from '@mui/material';
import { PRIMARYCOLOR, PRIMARYDARK } from '@/constants/Colors';
import { useDropzone } from 'react-dropzone';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { CompanyType, InitialCompany } from '@/types/Company';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Container, Item } from '@/components/layout/Container';
import { Form, Formik } from 'formik';
import Input from '@/components/UI/Input';
import { ButtonBlue, ButtonBlueOutlined } from '@/components/UI/Buttons';
import * as Yup from 'yup'
import ApiController from '@/ApiController/ApiController';
import HeaderForms from '@/components/UI/HeaderForms';
import { AuthContext } from '@/context/AuthContext';
import { CompanyContext } from '@/context/CompanyContext';
import { AppContext } from '@/context/AppContext';
const validationSchema = Yup.object({
    name: Yup.string().required('Debes especificar el nombre del proyecto')
});
interface Props {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}
const Colors = ["rgb(85,85,85)", "rgb(96,38,154)", "rgb(238,175,96)", PRIMARYCOLOR, PRIMARYDARK, "rgb(76,86,206)", "rgb(228,69,110)", "rgb(91,183,97)", "rgb(84,177,250)"]

const AddNewCompany: NextPage<Props> = ({ open, setOpen }) => {
    const [newCompany, setNewCompany] = useState<CompanyType>(InitialCompany)

    const handleClose = () => {
        setOpen(false);
    };
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const fileUrl = URL.createObjectURL(file); // Crear una URL para el archivo
            setNewCompany(prev => ({ ...prev, bgFile: acceptedFiles[0], bg: fileUrl }));
        }
    }, [newCompany])
    const onDropAvatar = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const fileUrl = URL.createObjectURL(file); // Crear una URL para el archivo
            setNewCompany(prev => ({ ...prev, avatarFile: acceptedFiles[0], avatar: fileUrl }));
        }
    }, []);



    const { getRootProps, getInputProps, } = useDropzone({ onDrop, maxFiles: 1 })
    const { getRootProps: getRootPropsAvatar, getInputProps: getInputPropsAvatar, } = useDropzone({ onDrop: onDropAvatar, maxFiles: 1 })
    const { user } = useContext(AuthContext)
    const [loadBg, setLoadBg] = useState(false)
    const [opacityBg, setOpacityBg] = useState(0)
    const [color, setColor] = useState(Colors[Math.floor(Math.random() * Colors.length)])
    const [loadAvatar, setLoadAvatar] = useState(false)
    const [opacityAvatar, setOpacityAvatar] = useState(0)
    const { getCompanies } = useContext(CompanyContext)
    const { setSnackbarOpen } = useContext(AppContext)
    const onCreateCompany = async (value: string) => {
        const dataAddCompany = {
            id: user._id,
            nameCompany: value
        }
        const result = await ApiController.addCompany(dataAddCompany)
        const { status, company, message } = result.data
        if (company._id) {
            const form: any = new FormData()
            form.append("id_company", company._id)
            const { avatarFile, bgFile } = newCompany as any
            if (avatarFile) {
                form.append("avatar", avatarFile)
            }
            if (bgFile) {
                form.append("bg", bgFile)
            }
            const res = await ApiController.editCompany(form)

            const { company: companyEdtited } = res.data
            setSnackbarOpen({ message, type: companyEdtited ? "success" : "error" })
            if (companyEdtited) {
                getCompanies()
                handleClose()
            }
        }
    }
    return <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >

        <Container justifyContent='center' style={{ marginTop: 6 }}>
            <Item xs={11}>
                <HeaderForms onClick={handleClose}>
                    Crear nueva organizacion
                </HeaderForms>
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
            </Item>
            <Item xs={11}>
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



                </InfoContainer>
            </Item>
            <Item xs={11}>
                <br />  <br />
                <Formik

                    onSubmit={(values) => onCreateCompany(values.name)}
                    validateOnChange={false} // No validar al cambiar
                    validateOnBlur={false}
                    initialValues={{ name: '' }}
                    validationSchema={validationSchema}
                >{({ errors, touched }) => (
                    <Form>

                        <Input label='Nombre de tu organizacion' error={errors.name} touched={touched.name} name={"name"} placeholder="Nombre tu empresa u organizacion" />
                        <br />
                        <Container columnSpacing={2} rowSpacing={2}>

                            <Item xs={12}>

                                <ButtonBlue type="submit">
                                    Continuar
                                </ButtonBlue>
                            </Item>

                        </Container>
                    </Form>
                )}
                </Formik>
            </Item>

        </Container>

    </Dialog>

}

export default AddNewCompany