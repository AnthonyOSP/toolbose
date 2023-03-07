import React from 'react'
import './Plantillas.css'
import Tablas from './Tablas'

const Plantillas = () => {

    return (
        <div className='p-contenedor'>
            <div className="p-left">
                <span className='p-titulo'>EDITOR DE CORREOS</span>
                <Tablas />
                {/* <form action="" method="post">
                    <fieldset>
                        <legend>Templates</legend>
                        <input type="text" />
                    </fieldset>
                    <fieldset>
                        <legend>TroubleShooting</legend>
                    </fieldset>
                </form> */}
            </div>
            <div className="p-right">
                <span className='p-titulo'>CORREO TERMINADO</span>
                <form action="" className='p-form'>
                    <textarea id="" placeholder='Aqui se mostrara el correo que vas a copiar' className='p-textarea' ></textarea>
                </form>
            </div>
        </div>
    )
}

export default Plantillas