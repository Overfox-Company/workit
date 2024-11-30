import { NextPage } from 'next'
import styled from '@emotion/styled';
import { useContext, useState } from 'react'
import { CompanyContext } from '@/context/CompanyContext'
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select';

interface Props { openSideBar: boolean }
export const SelectCustom = styled(Select)({
    width: "100%",
    padding: '12px 8px',
    borderRadius: 64,
    border: 'none',
    display: "flex",
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontSize: 18,
    fontWeight: 600,
    height: 36,
    fontFamily: 'Roboto',
    cursor: 'pointer',
});

const SelectorCompany: NextPage<Props> = ({ openSideBar }) => {
    const { companyList } = useContext(CompanyContext)
    const [age, setAge] = useState('');

    const handleChange = (event: any) => {
        setAge(event.target.value as string);
    };
    return <FormControl fullWidth>

        <SelectCustom
            inputProps={{

                backgroundColor: 'blue', // Cambia el color del texto
                padding: '10px', // Agrega padding interno

            }}

            value={age}
            onChange={handleChange}
        >
            {companyList.length > 0 ? companyList.map((company, index) => (
                <MenuItem value={10} style={{ display: 'flex' }}>
                    <Avatar src={company.avatar} style={{ width: 24, height: 24 }} />
                    {openSideBar ? company.name : null}
                </MenuItem>

            )) : null}

        </SelectCustom>
    </FormControl>

}

export default SelectorCompany