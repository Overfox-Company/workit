'use client'
import { FC } from 'react'
import { ButtonType } from '@/types/App'
import styled from '@emotion/styled'
import LoadingButton from '@mui/lab/LoadingButton';
import { PRIMARYCOLOR, PRIMARYDARK } from '@/constants/Colors';
import { PRINCIPALFONT } from '@/constants/Fonts';
// oioioioi
const ButtonBlueCustom = styled(LoadingButton)({
    textTransform: 'none',
    backgroundColor: PRIMARYCOLOR,
    display: "flex",
    width: "100%",
    height: 48,
    padding: "12px 16px",
    alignItems: "center",
    gap: 10,
    boxShadow: 'none',
    fontFamily: PRINCIPALFONT,
    borderRadius: 6,
    justifyContent: 'center',
    border: ` 0px solid ${PRIMARYCOLOR}`,
    fontSize: 16,
    '&:hover': {
        boxShadow: 'none'
    }
})
const ButtonBlueOutlinedCustom = styled(LoadingButton)({
    textTransform: 'none',
    display: "flex",
    width: '100%',
    height: 48,
    padding: "12px 16px",
    alignItems: "center",
    gap: 10,
    borderRadius: 6,
    border: `solid 1px ${PRIMARYDARK}`,
    justifyContent: 'center',
})
export const ButtonBlue: FC<ButtonType> = ({ loading, children, disabled, ...props }) => {
    return (<ButtonBlueCustom style={{ backgroundColor: PRIMARYDARK, }} loading={loading} variant={"contained"} disabled={disabled || loading} {...props} >
        {!loading ? <p style={{ color: 'white' }} >
            {children}
        </p> : null}
    </ButtonBlueCustom >)
}
export const ButtonBlueOutlined: FC<ButtonType> = ({ loading, children, ...props }) => {
    return (<ButtonBlueOutlinedCustom loadingIndicator="Loading…" loading={loading} variant={"outlined"} {...props}>
        {!loading ? <p style={{ color: 'black' }} >
            {children}
        </p> : null}

    </ButtonBlueOutlinedCustom >)
}