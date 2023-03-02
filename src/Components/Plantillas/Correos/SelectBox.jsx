import React, { useState } from 'react'
import Select from 'react-select'
import './SelectBox.css'

const SelectBox = () => {

    const countries = [
        { label: 'Argentina', value: 'Argentina' },
        { label: 'Chile', value: 'Chile' },
        { label: 'Colombia', value: 'Colombia' },
        { label: 'Mexico', value: 'Mexico' },
        { label: 'Perú', value: 'Perú' },
        { label: 'USA', value: 'USA' },
    ]

    const [selectedCountry, setSelectedCountry] = useState('');



    const handleSelectChange = ({ value }) => {
        setSelectedCountry(value);
    }

    return (
        <div className='select-container'>
            {
                console.log(selectedCountry)}
            <Select
                defaultValue={countries[3]}
                options={countries}
                onChange={handleSelectChange}
                
            />

        </div>
    )
}

export default SelectBox