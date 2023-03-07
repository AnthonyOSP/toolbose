import React from 'react'
import { Route, Routes, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faCalendarDays, faPen } from '@fortawesome/free-solid-svg-icons'
import './Inicio.css'
import Plantillas from '../Plantillas/Plantillas'
import Noticias from '../Noticias/Noticias'
import Semanas from '../ContadorSemanas/Semanas'
import Sugerencias from '../Sugerencias/Sugerencias'
// import logo from '../../img/webhelpLogo.png'

const Inicio = () => {
    return (
        <div className='i-contenedor'>
            <div className="contenedorPrincipal">
                
                <Routes>
                    <Route path='/' element={<Noticias /> } />
                    <Route path='/Inicio' element={<Noticias /> } />
                    <Route path='/ContadorSemanas' element={<Semanas/> } />   
                    <Route path='/Plantillas' element={<Plantillas /> } />
                    <Route path='/Sugerencias' element={<Sugerencias /> } />
                </Routes>
                    

            </div>
            <div id="nav" className="nav">
                <div className="icon">
                    <ul>
                    <NavLink to='/Inicio'><li><span><FontAwesomeIcon icon={faHome} /></span></li></NavLink>
                    <NavLink to='/Plantillas'><li><span><FontAwesomeIcon icon={faEnvelope} /></span></li></NavLink>
                    <NavLink to='/ContadorSemanas'><li><span><FontAwesomeIcon icon={faCalendarDays} /></span></li></NavLink>
                    <NavLink to='/Sugerencias'><li><span><FontAwesomeIcon icon={faPen} /></span></li></NavLink>

                    </ul>
                </div>
                <div className="text">
                    <ul>
                    <NavLink to='/Inicio' style={{textDecoration: "none"}}><li><span>Inicio</span></li></NavLink>
                    <NavLink to='/Plantillas' style={{textDecoration: "none"}}><li><span>Plantillas</span></li></NavLink>
                    <NavLink to='/ContadorSemanas' style={{textDecoration: "none"}}><li><span>Semanas</span></li></NavLink>
                    <NavLink to='/Sugerencias' style={{textDecoration: "none"}}><li><span>Sugerencias</span></li></NavLink>
                    </ul>
                </div>
                <div className="info">
                    {/* Logo Wenhelp */}
                    {/* <div className="logo">
                        <img src={logo} alt="boselogo.png" style={{width: '250px'}} />
                    </div> */}
                    <div className="name">WebHelp</div>
                    <div className="quote">Herramienta</div>
                </div>
            </div>
        </div>
    )
}

export default Inicio