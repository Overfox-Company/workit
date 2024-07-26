import { PRIMARYDARK } from "@/constants/Colors";
import { PRINCIPALFONT } from "@/constants/Fonts";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { FC } from "react";

export const Title = styled(Typography)({
    fontWeight: 700,
    color: PRIMARYDARK,
    fontFamily: PRINCIPALFONT,
    fontSize: 32,
    textAlign: 'center'
})
export const SubTitle = styled(Typography)({
    fontWeight: 500,
    color: PRIMARYDARK,
    fontFamily: PRINCIPALFONT,
    fontSize: 24,

    textAlign: 'center'
})
export const Text = styled(Typography)({

    color: PRIMARYDARK,
    fontFamily: PRINCIPALFONT,
    fontSize: 18,
})
export const StepIndicator: FC<{ step: number, limit?: number }> = ({ step, limit = 3 }) => {
    return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Text>

            Paso {step} de {limit}
        </Text>
    </div>
}