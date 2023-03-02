import React from 'react'
import logo from '../../img/bose_logo.png'
import Toggle from './Toggle/Toggle'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="n-left">
                <img src={logo} alt="bose_logo.png" />
            </div>
            <div className='n-right'>
                <div className="n-tittle">
                        <span>Herramientas para Agentes de Bose</span>
                </div>
                <div className='buttonToggle'>
                    {/* <button className='n-button'>Contacto</button> */}
                    <div className="n-tema">
                        <span>Tema:</span>
                        <Toggle/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar