
import styled from '@emotion/styled'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
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
    height: 22,
    width: 22,
    cursor: 'pointer',
    borderRadius: 4
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