// Eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
'use client'
import React, { useState } from "react";
import { Field } from "formik";
import styled from "@emotion/styled";
import { InputProps } from "@/types/App";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Container, Item } from '@/components/layout/Container'
import { IconButton, Typography } from "@mui/material";
import { ERROR, ERROROPACITY, PAPERGRAY, PRIMARYDARK, SECONDARYDARK } from "@/constants/Colors";
import Image from "next/image";

//Deezert es una aplicacion para la gestion empresarial, tanto del lado de recursos humanos como la gestion administrativa y la gestion de proyectos
const TextInput = styled(Field)({
    padding: "16px",
    width: '100%',
    height: 48,
    backgroundColor: "rgba(0,0,0,0)",
    paddingRight: 20,
    borderRadius: 6,
    border: 0,
    fontSize: 14,
    fontWeight: 400,
    outline: "none",
    color: "rgb(80,80,80)",
    fontFamily: "Roboto",
    '&::placeholder': {
        color: SECONDARYDARK
    }

});
const Error = styled(Typography)({
    color: ERROR,
    fontWeight: 500,
    fontSize: 12,
    margin: 0,
    marginLeft: 5,
    textAlign: "left",
    letterSpacing: 2,
    fontFamily: "Roboto",
});
const ContainerInput = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: '8px',
    border: `solid 2px rgba(0,0,0,0)`
})
const ViewPassword = styled(Image)({

})
const OcultPassword = styled(Image)({

})
const Input: React.FC<InputProps> = ({

    name,
    label,
    error,
    touched,
    placeholder,
    type,
    as,
    rows,
    cols,
    children,
}) => {
    const [isPassword, setIsPassword] = useState(type === 'password' ? true : false)
    return (
        <Container

            rowSpacing={1}
        >
            {label && (
                <Item xs={12}>
                    <Typography
                        sx={{ fontSize: { xs: 14, md: 16 } }}
                        style={{
                            fontFamily: "Roboto",
                            color: PRIMARYDARK,
                            width: "100%",
                            textAlign: "left",
                            marginLeft: 5,
                            fontWeight: 700
                        }}
                    >
                        {label}
                    </Typography>
                </Item>
            )}
            <Item xs={12}>
                <ContainerInput style={{
                    backgroundColor: error && touched ? ERROROPACITY : PAPERGRAY,
                    borderColor: error && touched ? ERROR : undefined,
                }}>
                    <TextInput
                        style={{
                            backgroundColor: error && touched ? ERROROPACITY : PAPERGRAY,
                            resize: 'none',
                            WebkitBackgroundColor: error && touched ? ERROROPACITY : PAPERGRAY,
                            WebkitBoxShadow: `0 0 0 30000px ${error && touched ? ERROROPACITY : PAPERGRAY} inset`, /* Cambiar el color de fondo al autocompletar */
                            WebkitTextFillColor: '#333' /* Cambiar el color del texto al autocompletar */

                        }}
                        name={name}
                        placeholder={placeholder}
                        type={type === 'password' ? isPassword ? 'password' : 'text' : type}
                        as={as ?? null}
                        rows={rows}
                        cols={cols}
                    >
                        {children}
                    </TextInput>
                    {type == 'password' ? <IconButton onClick={() => setIsPassword(!isPassword)}>
                        {isPassword ?
                            <ViewPassword alt="icon" src={error && touched ? '/assets/eyeerror.svg' : '/assets/eye.svg'} width={20} height={20} /> :
                            <OcultPassword alt="icon" src={error && touched ? '/assets/eye-offerror.svg' : '/assets/eye-off.svg'} width={20} height={20} />}
                    </IconButton> : null}
                </ContainerInput >

            </Item>
            <Item xs={12}>
                {error && touched ? <Error>{error}</Error> : null}
            </Item>
        </Container>


    )
};
export default Input;

export const InputSimple = styled.input({
    border: 0,
    outline: 'none',
    padding: 5,
    fontSize: 16,
    boxShadow: '0 0 0px 0 rgb(50,50,50)',
    fontFamily: '"Inter",sans-serif',
    width: 120
})