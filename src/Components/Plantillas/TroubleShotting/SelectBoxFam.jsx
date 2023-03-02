import React, { useState } from 'react'
import Select from 'react-select'
import '../Correos/SelectBox.css'

const SelectBoxFam = () => {

    const Categoria = [
        { label: 'Lentes', value: 'Lentes' },
        { label: 'Cine en Casa', value: 'CineEnCasa' },
        { label: 'Audífonos', value: 'Audífonos' },
        { label: 'Altavoces', value: 'Altavoces' },
    ]

    const lentes = [
        { label: 'Tenor', value: 'Tenor' },
        { label: 'Soprano', value: 'Soprano' },
        { label: 'Tempo', value: 'Tempo' },
    ]

    const cineEnCasa = [
        { label: 'SB300', value: 'SB300' },
        { label: 'SB500', value: 'SB500' },
        { label: 'SB600', value: 'SB600' },
        { label: 'SB700', value: 'SB700' },
        { label: 'SB900', value: 'SB900' },
    ]

    const Audifonos = [
        { label: 'SoundSport Wireless', value: 'SoundSport Wireless' },
        { label: 'SoundSport Free', value: 'SoundSport Free' },
        { label: 'Bose Sport Earbuds', value: 'Bose Sport Earbuds' },
        { label: 'QuietComfort Earbuds', value: 'QuietComfort Earbuds' },
        { label: 'QC30/QC35II/QC45', value: 'QC30/QC35II/QC45' },
        { label: 'NC700', value: 'NC700' },
    ]

    const Altavoces = [
        { label: 'SoundLink I/II/III', value: 'SoundLink I/II/III' },
        { label: 'SoundLink Micro', value: 'SoundLink Micro' },
        { label: 'SoundLink Flex', value: 'SoundLink Flex' },
        { label: 'SoundLink Color II', value: 'SoundLink Color II' },
        { label: 'SoundLink Mini II', value: 'SoundLink Mini II' },
        { label: 'SoundLink Revolve/+ I/II', value: 'SoundLink Revolve/+ I/II' },
        { label: 'Portable Smart Speaker', value: 'Portable Smart Speaker' },
        { label: 'Home Speaker 300', value: 'Home Speaker 300' },
        { label: 'Home Speaker 450', value: 'Home Speaker 450' },
        { label: 'Home Speaker 500', value: 'Home Speaker 500' },
        { label: 'SoundTouch 30/20', value: 'SoundTouch 30/20' },
        { label: 'Wave Music System', value: 'Wave Music System' },
        { label: 'Portable Smart Speaker', value: 'Portable Smart Speaker' },
        { label: 'Portable Smart Speaker', value: 'Portable Smart Speaker' },
        { label: 'Portable Smart Speaker', value: 'Portable Smart Speaker' },
    ]

    const [selectedCategoria, setSelectedCategoria] = useState('');
    const [selectedProducto, setSelectedProducto] = useState('');


    const handleSelectChange = ({ value }) => {
        setSelectedCategoria(value);
        productText(value)
    }

    const handleSelectChange2 = ({ value }) => {
        setSelectedProducto(value);
    }

    const productText = (value) => {
        switch (value) {
            case 'Lentes':
                return lentes;
            case "CineEnCasa":
                return cineEnCasa;
            case 'Audífonos':
                return Audifonos;
            case 'Altavoces':
                return Altavoces;
            default:
                break;
        }
    }

    return (
        <div className='select-container'>
            {console.log(selectedCategoria)}
            {console.log(selectedProducto)}
            <Select
                defaultValue={{ label: 'Selecciona una Categoría', value: 'Default' }}
                options={Categoria}
                onChange={handleSelectChange}

            />
            <Select
                defaultValue={{ label: 'Selecciona un Producto', value: 'Default' }}
                options={lentes}
                onChange={handleSelectChange2}

            />

        </div>
    )
}

export default SelectBoxFam