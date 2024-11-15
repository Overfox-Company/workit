'use client'
import { NextPage } from 'next'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout as DashboardLayoutMaterial } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import CentralPanel from './CentralPanel/CentralPanel';
import Icon from '@/components/UI/Icon';
import OptionsToNavBar from './components/OptionsToNavBar';
import { Avatar } from '@mui/material';
import { AuthContext } from '@/context/AuthContext';
import AvatarComponent from './components/AvatarComponent';
interface Props { }
const NAVIGATION: Navigation = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <Icon src={'Dashboard'} size={24} />,
    },
    {
        segment: 'proyectos',
        title: 'Proyectos',
        icon: <Icon src={'Proyectos'} size={24} />,
    },
    {
        segment: 'equipo',
        title: 'Equipo',
        icon: <Icon src={'Equipo'} size={24} />,
    },
    {
        segment: 'finanzas',
        title: 'Finanzas',
        icon: <Icon src={'Finanzas'} size={24} />,
    },
    {
        segment: 'contactos',
        title: 'Contactos',
        icon: <Icon src={'Contactos'} size={24} />,
    },
    {
        segment: 'configuracion',
        title: 'Configuracion',
        icon: <Icon src={'Configuracion'} size={24} />,
    },
];
;

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});


interface DemoProps {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
}

const DashboardLayout: NextPage<Props> = (props: DemoProps) => {
    const { window } = props;

    const router = useDemoRouter('/dashboard');

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            branding={{
                logo: <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 4
                }}>
                    <img src="/assets/default/Workit-l.svg" alt="MUI logo" />,
                </div>,

                title: '',
            }}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayoutMaterial
                slots={{
                    toolbarActions: OptionsToNavBar,
                    toolbarAccount: AvatarComponent
                }}>
                <CentralPanel pathname={router.pathname} />
            </DashboardLayoutMaterial>
        </AppProvider>
        // preview-end
    );
}

export default DashboardLayout