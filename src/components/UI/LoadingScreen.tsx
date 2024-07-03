'use client'
import { NextPage } from 'next'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { PAPERGRAY, PRIMARYDARK } from '@/constants/Colors'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '@/context/AppContext'
import { motion } from 'framer-motion'; // Importa motion de Framer Motion

interface Props { }
const Text = styled(Typography)({
    fontWeight: 700,
    color: PRIMARYDARK,
    fontFamily: 'Roboto',
    fontSize: 32,
    textAlign: 'center'
})
const Screen = styled(Box)({
    backgroundColor: PAPERGRAY,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    width: '100vw',
    height: "100vh",
    zIndex: 999
})

const LoadingScreen: NextPage<Props> = ({ }) => {
    const { loadingScreen } = useContext(AppContext)
    const [cleanComponent, setCleanComponent] = useState(false)
    useEffect(() => {

        console.log(loadingScreen)
        if (!loadingScreen) {
            setTimeout(() => {
                setCleanComponent(true)
            }, 1000)
        }
    }, [loadingScreen])
    return (
        <motion.div // Usa motion.div para controlar la animación
            initial={{ opacity: 1 }} // Establece la opacidad inicial
            animate={{ opacity: loadingScreen ? 1 : 0 }} // Animación de opacidad
            transition={{ duration: 0.5 }} // Duración de la transición en segundos
            style={{ width: '100%', height: '100%' }} // Establece el tamaño del componente
        >
            {!cleanComponent ? ( // Renderiza el componente solo si loadingScreen es true
                <Screen>
                    <Text>
                        Loading...
                    </Text>
                </Screen>
            ) : null
            }
        </motion.div>
    )
}

export default LoadingScreen
