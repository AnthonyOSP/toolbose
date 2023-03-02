import { React, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment/moment';
import './Semanas.css'
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)

const Semanas = () => {
    const [startDateInicial, setStartDateInicial] = useState(new Date());
    const [startDateFinal, setStartDateFinal] = useState(new Date());

    let fecha1 = moment(startDateInicial);
    let fecha2 = moment(startDateFinal);

    const semanasFinales = fecha2.diff(fecha1, 'weeks');
    const diasFinal = (fecha2.diff(fecha1, 'days'))%7;

    return (
        <div className='s-container'>
            <div className="s-leftside">
                <span className='s-tittle'>CONTADOR DE SEMANAS</span>
                <div className="s-datepickers">
                    <div className="dp-left">
                        <span>Inicio de servicio:</span>
                        <DatePicker
                            selected={startDateInicial}
                            onChange={(date) => setStartDateInicial(date)}
                            locale="es"
                            inline
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"

                        />
                    </div>
                    <div className="dp-left">
                        <span>Fecha Actual:</span>
                        <DatePicker
                            selected={startDateFinal}
                            onChange={(date) => setStartDateFinal(date)}
                            locale="es"
                            inline
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>


                </div>
            </div>
            <div className="s-rightside">
                <span className='txtCliente'>El cliente lleva esperando </span>
                <span id='tat' className='txtSemanas'> {semanasFinales} semanas y {diasFinal} días </span>
            </div>


        </div>
    )
}

export default Semanas