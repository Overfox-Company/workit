'use client';
import { NextPage } from 'next'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout as DashboardLayoutMaterial } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import CentralPanel from './CentralPanel/CentralPanel';
import Icon from '@/components/UI/Icon';
import OptionsToNavBar from './components/OptionsToNavBar';
import { Avatar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AuthContext } from '@/context/AuthContext';
import AvatarComponent from './components/AvatarComponent';
import SideBarComponent from './SideBar/SideBar';
import NavBar from './navBar/NavBar';
import { Dispatch, SetStateAction, useState } from 'react';
interface Props { variant: boolean; setVariant: Dispatch<SetStateAction<boolean>> }


const DashboardLayout: NextPage<Props> = ({ variant, setVariant }) => {

    const [selectedOption, setSelectedOption] = useState(0);
    return (<Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            position: "relative",
            width: '100vw',
            backgroundColor: '#FCFCFC',
        }}
    >
        <NavBar variant={variant} setVariant={setVariant} />
        <div style={{
            marginTop: "64px",
            display: 'flex',
            flexDirection: 'column',
            width: "100%",
            position: 'relative',
        }}>
            <div style={{ display: 'flex', width: "100%", }}>
                <SideBarComponent
                    variant={variant}
                    setVariant={setVariant}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
                <div style={{
                    height: 'calc(100vh - 64px)',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <CentralPanel

                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                </div>
            </div>

        </div>
    </Box>
    );
}

export default DashboardLayout