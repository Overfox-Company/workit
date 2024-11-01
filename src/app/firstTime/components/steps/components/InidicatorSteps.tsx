import { NextPage } from 'next'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { PRIMARYCOLOR, TEXTDARK } from '@/constants/Colors'
interface Props {
    steps: number
}
const BoxWithoutColor = styled(Box)({
    width: 8,
    height: 8,
    backgroundColor: TEXTDARK,
    borderRadius: 70
})
const BoxWithColor = styled(Box)({
    width: 8,
    height: 8,
    backgroundColor: PRIMARYCOLOR,
    borderRadius: 70
})
const InidicatorSteps: NextPage<Props> = ({ steps }) => {
    const totalSteps = 4;

    // Generamos un array que tenga la cantidad de elementos con color (steps) y el resto sin color
    const boxes = Array.from({ length: totalSteps }, (_, i) =>
        i < steps ? <BoxWithColor key={i} /> : <BoxWithoutColor key={i} />
    );
    return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', gap: 4 }}>
            {boxes}
        </div>
    </div>

}

export default InidicatorSteps