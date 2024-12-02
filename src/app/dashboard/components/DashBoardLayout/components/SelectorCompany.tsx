import { NextPage } from 'next'
import styled from '@emotion/styled';
import { useContext, useState } from 'react'
import { CompanyContext } from '@/context/CompanyContext'
import { Avatar, Button } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select';
import DoubleArrow from '@/icons/DoubleArrow';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Input, { InputSimple, InputSearch } from '@/components/UI/Input';
import { AddIcon } from '@/icons/AddIcon';
import { PRIMARYCOLOR, PRIMARYDARK } from '@/constants/Colors';
import AddNewCompany from './AddNewCompany';
interface Props { openSideBar: boolean }

const ScrollContainer = styled(Box)({
    maxHeight: 250,
    marginBottom: 2,
    overflow: "auto"
})
const ContainerCompany = styled(Button)({
    margin: 8,
    borderRadius: 40,
    width: "92%",
    justifyContent: "flex-start",
    textTransform: "none",
    display: "flex",
    gap: 8,

    padding: "6px 6px",
    alignItems: "center"
})

const SelectorCompany: NextPage<Props> = ({ openSideBar }) => {
    const { companyList, companySelected, setCompanySelected } = useContext(CompanyContext)
    const [age, setAge] = useState('');

    const handleChange = (event: any) => {
        setAge(event.target.value as string);
    };
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const onSelectCompany = (id: string) => {
        localStorage.setItem("idCompanySelected", id)
        const filterCompany = companyList.filter((company) => company._id === id)[0]
        setCompanySelected(filterCompany)
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [openAddNewCompany, setOpenAddNewCompany] = useState(false);
    return <div>
        <AddNewCompany open={openAddNewCompany} setOpen={setOpenAddNewCompany} />
        <Box
            onClick={(e) => handleClick(e as any)}
            style={{
                width: '94%',
                display: "flex",
                alignItems: "center",
                gap: openSideBar ? 4 : 0,
                marginTop: 12,
                justifyContent: "space-between",
                backgroundColor: "white",
                padding: "6px 4px",
                borderRadius: 24,
                cursor: "pointer"
            }}

        >
            {companySelected && (<>
                <div style={{ display: "flex", gap: openSideBar ? 8 : 0 }}>
                    <Avatar src={companySelected.avatar} sx={{ width: 28, height: 28 }} />
                    <p style={{ fontWeight: 700 }}>{openSideBar ? companySelected.name : null}</p>
                </div>
                <DoubleArrow size={24} />
            </>
            )}
        </Box>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            style={{ borderRadius: 48, }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        ><div style={{ minWidth: 200, padding: 12 }}>

                <InputSearch placeholder="Busca una organizacion" />
                <ScrollContainer>
                    {companyList.length > 0 ? companyList.map((company, index) => (
                        <ContainerCompany onClick={() => onSelectCompany(company._id || "")}
                            style={{
                                backgroundColor: company._id === (companySelected?._id ?? "") ? PRIMARYCOLOR : "transparent"
                            }}>
                            <Avatar src={company.avatar} sx={{ width: 28, height: 28 }} />
                            <p style={{ color: "rgb(34,32,32)", fontWeight: 700 }}>{company.name}</p>
                        </ContainerCompany>
                    )) : null}
                </ScrollContainer>
                <Button style={{ borderRadius: 40, textTransform: "none" }} onClick={() => setOpenAddNewCompany(true)}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <AddIcon size={24} color={PRIMARYDARK} />
                        <p style={{ color: PRIMARYDARK, fontWeight: 700, fontSize: 16 }}>
                            Crear nueva organizacion
                        </p>
                    </div>
                </Button>
            </div>
        </Popover>
    </div>
    {/* <FormControl fullWidth>

        <SelectCustom
            inputProps={{

                backgroundColor: 'blue', // Cambia el color del texto
                padding: '10px', // Agrega padding interno

            }}

            value={age}
            onChange={handleChange}
            renderValue={(selected) => {
                // Aquí controlas lo que se muestra cuando el menú está cerrado
                const selectedItem = companyList.find((company) => company._id === selected);
                return (
                    selectedItem && (<>
                        <Avatar
                            src={selectedItem.avatar}
                            style={{ width: 24, height: 24 }}
                        />
                        {openSideBar ? selectedItem.name : null}
                    </>
                    )
                );
            }}
        >
            {companyList.length > 0 ? companyList.map((company, index) => (
                <MenuItem value={company._id} style={{ display: 'flex', gap: 4 }}>
                    <Avatar src={company.avatar} style={{ width: 24, height: 24 }} />
                    {company.name}
                </MenuItem>

            )) : null}

        </SelectCustom>
    </FormControl>*/}

}

export default SelectorCompany