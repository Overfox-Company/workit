import { CardWhite, Container, Item, } from '@/components/layout/Container'
import { NextPage } from 'next'
import { StepIndicator, Title } from '../Components'
import FadeIn from '@/components/animation/FadeIn'
import { Dispatch, SetStateAction, useMemo, useEffect, useState } from 'react'
import { ButtonBlue } from '@/components/UI/Buttons'
import countryList from 'react-select-country-list';
import Flag from 'react-world-flags';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel, MenuItem } from '@mui/material'
interface Props { setStep: Dispatch<SetStateAction<number>> }

const Step1: NextPage<Props> = ({ }) => {
    const [value, setValue] = useState<string>("");
    const options = useMemo(() => countryList().getData().map(country => ({
        label: (
            <div key={country.value} style={{ display: 'flex', alignItems: 'center' }}>
                <Flag code={country.value} style={{ width: 20, height: 15, marginRight: 10 }} />
                {country.label}
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

    return <FadeIn>
        <div>
            <Container justifyContent='center'>
                <Item xs={5}>
                    <CardWhite>
                        <StepIndicator step={1} />
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
                                        value={value}
                                        label="Country"
                                        onChange={changeHandler}
                                    >

                                        {options.map(option => (
                                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                            </Item>


                            <Item xs={10}>
                                <ButtonBlue>
                                    Siguiente
                                </ButtonBlue>
                            </Item>
                        </Container>

                    </CardWhite>
                </Item>
            </Container>
        </div>
    </FadeIn>
}

export default Step1