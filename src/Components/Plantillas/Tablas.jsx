import React, { useState } from 'react'
import Correos from './Correos/Correos';
import './Tablas.css'
import TroubleShotting from './TroubleShotting/TroubleShotting';

const Tablas = () => {

    const [toggleState, setToggleState] = useState(1);

    // Functions

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className='tabla-contenedor'>
            <div id="container" className="container">
                <div id="tabs" className="tabs-container">

                    <div className="tabs">
                        <a className={toggleState === 1 ? "tab active-tabs" : 'tab'} onClick={() => toggleTab(1)}>Correo Base</a>
                        <a className={toggleState === 2 ? "tab active-tabs" : 'tab'} onClick={() => toggleTab(2)}>TroubleShotting</a>
                        <a className={toggleState === 3 ? "tab active-tabs" : 'tab'} onClick={() => toggleTab(3)}>Servicio</a>
                    </div>

                    <div className="content">
                        <div className={toggleState === 1 ? "tabcontent active-tabcontent" : 'tabcontent'}>
                            <Correos/>
                        </div>
                        <div className={toggleState === 2 ? "tabcontent active-tabcontent" : 'tabcontent'}>
                            <TroubleShotting/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tablas