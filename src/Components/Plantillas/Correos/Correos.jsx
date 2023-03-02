import React from 'react'
import './Correos.css'
import SelectBox from './SelectBox'

const Correos = () => {
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
                        <span>Orden de parte</span>
                    </label>
                </div>

            </div>

            {/* ENVIAR TBS */}

            <div className="enviar-tbs">
                <span>Seleccione datos a solicitar: </span>
                <label htmlFor="cbk1">
                    <input type="checkbox" id="cbk1" checked/>
                    <span class="cbx">
                        <svg width="12px" height="11px" viewBox="0 0 12 11">
                            <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                        </svg>
                    </span>
                    <span>Nombre y apellido</span>
                </label>

                <label htmlFor="cbk2">
                    <input type="checkbox" id="cbk2" checked/>
                    <span class="cbx">
                        <svg width="12px" height="11px" viewBox="0 0 12 11">
                            <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                        </svg>
                    </span>
                    <span>Dirección Completa</span>
                </label>

                <label htmlFor="cbk3">
                    <input type="checkbox" id="cbk3" checked/>
                    <span class="cbx">
                        <svg width="12px" height="11px" viewBox="0 0 12 11">
                            <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                        </svg>
                    </span>
                    <span>Número de serie</span>
                </label>

                <label htmlFor="cbk4">
                    <input type="checkbox" id="cbk4" checked/>
                    <span class="cbx">
                        <svg width="12px" height="11px" viewBox="0 0 12 11">
                            <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                        </svg>
                    </span>
                    <span>Comprobante de compra</span>
                </label>

                <label htmlFor="cbk5">
                    <input type="checkbox" id="cbk5" checked/>
                    <span class="cbx">
                        <svg width="12px" height="11px" viewBox="0 0 12 11">
                            <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                        </svg>
                    </span>
                    <span>Descripción del problema</span>
                </label>
            </div>

            {/* REPARACION O REEMPLAZO // Elegir país */}
            <div className="repair-country">
                <div className='repair-swap'>
                    <span>Servicio disponible: </span>
                    <div>
                        <label htmlFor="repair">
                            <input type="radio" id="repair" name="r-radio" checked />
                            <span className="rdo"></span>
                            <span>Reparación</span>
                        </label>

                        <label htmlFor="swap">
                            <input type="radio" id="swap" name="r-radio" />
                            <span className="rdo"></span>
                            <span>Reemplazo</span>
                        </label>
                    </div>
                </div>
                <div className="elegir-pais">
                    <span>Elegir país: </span>
                    <SelectBox />
                </div>
            </div>

        </div>
    )
}

export default Correos