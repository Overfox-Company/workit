// Eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
'use client'
import React, { useState, FC } from "react";
import { Field } from "formik";
import styled from "@emotion/styled";
import { InputProps } from "@/types/App";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Container, Item } from '@/components/layout/Container'
import { IconButton, Typography } from "@mui/material";
import { ERROR, ERROROPACITY, GRAYINPUT, PAPERGRAY, PRIMARYDARK, SECONDARYDARK } from "@/constants/Colors";
import Image from "next/image";
import Icon from "./Icon";
import { PRINCIPALFONT } from "@/constants/Fonts";
import SearchIcon from "@/icons/SearchIcon";

//Deezert es una aplicacion para la gestion empresarial, tanto del lado de recursos humanos como la gestion administrativa y la gestion de proyectos
const TextInput = styled(Field)({
    padding: "16px",
    width: '100%',
    height: 48,
    // backgroundColor: GRAYINPUT,
    paddingRight: 20,
    borderRadius: 6,
    border: 0,
    fontSize: 14,
    fontWeight: 400,
    outline: "none",
    color: "rgb(80,80,80)",
    fontFamily: PRINCIPALFONT,
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
    fontFamily: PRINCIPALFONT,
});
const ContainerInput = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    borderRadius: '8px',
    border: `solid 1px #646464`,
})
const ViewPassword = styled(Image)({
    width: "auto",
    height: "auto"
})
const OcultPassword = styled(Image)({
    width: "auto",
    height: "auto"
})

const Input: FC<InputProps> = ({
    iconName,
    iconSize,
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
                            fontFamily: PRINCIPALFONT,
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
                    paddingLeft: iconName ? '12px' : 1,
                    backgroundColor: error && touched ? ERROROPACITY : "white",
                    borderColor: error && touched ? ERROR : undefined,
                }}>
                    {iconName ? <Icon src={iconName} size={iconSize} /> : null}
                    <TextInput
                        style={{
                            paddingLeft: iconName ? '8px' : "16px",
                            backgroundColor: error && touched ? ERROROPACITY : "white",
                            resize: 'none',
                            WebkitBackgroundColor: error && touched ? ERROROPACITY : "white",
                            WebkitBoxShadow: `0 0 0 30000px ${error && touched ? ERROROPACITY : "white"} inset`, /* Cambiar el color de fondo al autocompletar */
                            WebkitTextFillColor: '#333' /* Cambiar el color del texto al autocompletar */

                        }}
                        autoComplete={type === 'password' ? 'current-password' : 'on'}
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
                            <ViewPassword loading="eager" priority alt="icon" src={error && touched ? '/assets/erroreye.svg' : '/assets/eye.svg'} width={20} height={20} /> :
                            <OcultPassword loading="eager" priority alt="icon" src={error && touched ? '/assets/errorhideeye.svg' : '/assets/hideeye.svg'} width={20} height={20} />}
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
    fontFamily: PRINCIPALFONT,
    width: 120
})
export const InputSearch: FC<any> = (props) => {
    return (
        <div style={{
            display: "flex",
            alignItems: 'center',
            padding: 4,
            border: "solid 1px #647184",
            borderRadius: 12,
        }}>
            <SearchIcon size={20} />
            <InputSimple {...props} style={{

                width: '100%',
                fontSize: 14
            }} />
        </div>

    )
} 