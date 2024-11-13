
import styled from '@emotion/styled'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { BGSCREEN, PRIMARYCOLOR, PRIMARYDARK } from '@/constants/Colors'
export const AvatarCompany = styled(Image)({

    borderRadius: 8
})
export const AvatarContent = styled(Box)({
    position: 'absolute',
    top: -35,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 62,
    height: 62,
    zIndex: 10,
    borderRadius: 8,
    '&:hover #avatar': {
        opacity: 1
    }
})
export const CompanyCard = styled(Box)({
    borderRadius: 24,
    paddingBottom: 40,
    backgroundColor: 'white',

})
export const CoverCompany = styled(Image)({
    borderRadius: "24px 24px 0 0",
})
export const ContainerImages = styled(Box)({
    position: 'relative',
    width: '100%',
    cursor: 'pointer',
    height: 200,
    borderRadius: "24px 24px 0 0",
    "&:hover #containerOPtions": {
        opacity: 1
    }
})
export const InfoContainer = styled(Box)({
    position: 'relative',
    padding: '0px 40px'
})
export const BgColor = styled(Box)({
    width: '100%',
    height: '100%',
    transition: 'all 0.1s ease-in-out',
    borderRadius: "24px 24px 0 0",
})
export const NameCompany = styled(Typography)({
    fontWeight: 700,
    fontSize: 28
})
export const ContainerOptions = styled(Box)({
    cursor: 'pointer',
    transition: 'all 0.1s ease-in-out',
    position: 'absolute',
    right: 10,
    bottom: 10,
    display: 'flex',
    gap: 8,
    opacity: 1
})
export const BoxOpacity = styled(Box)({
    borderRadius: 8,
    zIndex: 99,
    padding: "6px 12px",
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgb(11,22,31,0.6)'
})
export const BoxColor = styled(Box)({
    height: 38,
    width: 38,
    cursor: 'pointer',
    borderRadius: 122
})
export const LabelOption = styled(Typography)({
    color: 'white',
    fontWeight: 700,
    fontSize: 12

})
export const ContentAddImageIcon = styled(Box)({
    backgroundColor: 'rgba(40,40,40,0.8)',
    position: 'absolute',
    borderRadius: "24px 24px 0 0",
    width: '100%',
    height: '100%',
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})
const Colors = ["rgb(85,85,85)", "rgb(96,38,154)", "rgb(238,175,96)", PRIMARYCOLOR, PRIMARYDARK, "rgb(76,86,206)", "rgb(228,69,110)", "rgb(91,183,97)", "rgb(84,177,250)"]

export const SelectColors = ({ onChangeColor, value }: { value: string, onChangeColor: (color: string) => void }) => {
    return (
        <Box style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
            {Colors.map(color => (
                <div key={color} style={{ padding: 2, border: `solid 2px ${value === color ? value : 'transparent'}`, borderRadius: 200 }}>
                    <BoxColor key={color} style={{ backgroundColor: color }} onClick={() => { onChangeColor(color) }} />

                </div>
            )
            )}
        </Box>
    )
}
export const SelectImages = () => {
    return (
        <div style={{
            height: 46,
            backgroundColor: BGSCREEN,
            color: PRIMARYDARK,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            gap: 8
        }}>
            Cargar imagen
            <Image src={"/assets/upload.svg"} width={18} height={18} alt='' />
        </div>
    )
}