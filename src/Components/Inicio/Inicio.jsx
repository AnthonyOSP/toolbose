import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faCalendarDays, faGear} from '@fortawesome/free-solid-svg-icons'
import './Inicio.css'
import Plantillas from '../Plantillas/Plantillas'
import Noticias from '../Noticias/Noticias'
// import logo from '../../img/webhelpLogo.png'

const Inicio = () => {
    return (
        <div className='i-contenedor'>
            <div className="contenedorPrincipal">
                <Noticias/>
            </div>
            <div id="nav" className="nav">
                <div className="icon">
                    <ul>
                        <li><a title="Inicio" href="Inicio"><FontAwesomeIcon icon={faHome}/></a></li>
                        <li><a href="Plantillas"><FontAwesomeIcon icon={faEnvelope}/></a></li>
                        <li><a href="ContadorSemanas"><FontAwesomeIcon icon={faCalendarDays}/></a></li>
                        <li><a href="Ajustes"><FontAwesomeIcon icon={faGear}/></a></li>

                    </ul>
                </div>
                <div className="text">
                    <ul>
                        <li><a title="Inicio" href="Inicio">Inicio</a></li>
                        <li><a href="Plantillas">Plantillas</a>
                        </li>
                        <li><a href="ContadorSemanas">Semanas</a>
                        </li>
                        <li><a href="Ajustes#">Ajustes</a>
                        </li>
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