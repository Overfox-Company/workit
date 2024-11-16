import { CardWhite, Container, Item, } from '@/components/layout/Container'
import { NextPage } from 'next'
import { StepIndicator, Title } from '../Components'
import FadeIn from '@/components/animation/FadeIn'
import { Dispatch, SetStateAction, useMemo, useEffect, useState, useContext } from 'react'
import { ButtonBlue } from '@/components/UI/Buttons'
import countryList from 'react-select-country-list';
import Flag from 'react-world-flags';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel, MenuItem } from '@mui/material'
import { americanCountries, europeanCountries } from '@/countries/data'
import styled from '@emotion/styled';
import { AddCountry } from '../../handlers/SendSurvey'
import { AuthContext } from '@/context/AuthContext'
import InidicatorSteps from './components/InidicatorSteps'

interface Props { setStep: Dispatch<SetStateAction<number>> }

const CustomPaper = styled.div(({ theme }) => ({
    height: 200, // Change this value to adjust the height
}));

const MenuProps = {
    PaperProps: {
        component: CustomPaper,
    },
};
const FlagsA: any = Flag
const Step1: NextPage<Props> = ({ setStep }) => {
    const { user, setUser } = useContext(AuthContext)
    const [value, setValue] = useState<string | null>(null);
    const options = useMemo(() => countryList().getData().filter((country) => americanCountries.includes(country.value) || europeanCountries.includes(country.value)
    ).map(country => ({
        label: (
            <div key={country.value} style={{ display: 'flex', alignItems: 'center' }}>
                <FlagsA code={country.value as string} style={{ width: 20, height: 15, marginRight: 10 }} />

                <span style={{ marginRight: 10 }}>{country.label}</span>
            </div>
        ),
        value: country.value,
    })), [])


    const changeHandler = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    }
    useEffect(() => {
        console.log(options)
    }, [])
    const handleClick = async () => {
        const result = await AddCountry(value as string, user._id, setUser)
        if (result) {
            setStep(0)
        }
    }
    return <FadeIn>
        <div>
            <Container justifyContent='center'>
                <Item xs={5}>
                    <CardWhite>

                        <Title>
                            ¿Desde que pais nos visitas?
                        </Title>
                        <br />

                        <Container justifyContent='center' columnSpacing={2} rowSpacing={2}>
                            <Item xs={10}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={value as string}
                                        label="Country"
                                        onChange={changeHandler}
                                        MenuProps={MenuProps}
                                    >
                                        {options.map(option => (
                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Item>
                            <Item xs={10}>
                                <ButtonBlue disabled={value ? false : true} onClick={() => handleClick()}>
                                    Siguiente
                                </ButtonBlue>
                            </Item>
                            <Item xs={12}>
                                <InidicatorSteps steps={1} />
                            </Item>
                        </Container>
                    </CardWhite>
                </Item>
            </Container>
        </div>
    </FadeIn>
}

export default Step1