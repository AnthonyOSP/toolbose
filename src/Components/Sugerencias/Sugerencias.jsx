import React from 'react'
import './Sugerencias.css'

const Contacto = () => {
    return (
        <div className='c-background'>
            <form >
                <h3>Agrega tus sugerencias </h3>
                <input className='input-texto' type="text" placeholder='Nombre y apellido'/>
                <input className='input-texto' type="text" placeholder='Correo Webhelp'/>
                <textarea name="" placeholder='Escribe tus sugerencias'></textarea>
                <div className='c-buttons'>
                    <input type="submit" value='Enviar' className='c-button'/>
                    <button className='c-button'>Borrar</button>
                </div>
                
            </form>
            
        </div>
    )
}

export default Contacto