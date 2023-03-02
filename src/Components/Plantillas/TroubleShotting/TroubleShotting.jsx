import React from 'react'
import SelectBoxFam from './SelectBoxFam'
import './TroubleShotting.css'


const TroubleShotting = () => {
    return (
        <div class="forms">
            {/* PRIMER CONTACTO */}
            <div className='primer-contacto'>
                <span>Elija el tipo de correo: </span>
                <div>
                    <label htmlFor="rdo1">
                        <input type="radio" id="rdo1" name="radio" checked />
                        <span className="rdo"></span>
                        <span>Primer Contacto</span>
                    </label>

                    <label htmlFor="rdo2">
                        <input type="radio" id="rdo2" name="radio" />
                        <span className="rdo"></span>
                        <span>Elegir Producto</span>
                    </label>
                </div>
            </div>
            <div className="tbs-Container">
                {/* Escoger familia */}
                <div className='tbsFamilia'>
                    <span>Elija la Familia</span>
                    <SelectBoxFam/>
                </div>

                {/* Escoger Categoria */}
                {/* <div className='tbsCategoria'>
                    <span>Elija la Categoria</span>
                </div> */}
                {/* Escoger Producto */}
                {/* <div className='tbsProducto'>
                    <span>Elija el Producto</span>
                </div> */}
            </div>

        </div>
    )
}

export default TroubleShotting