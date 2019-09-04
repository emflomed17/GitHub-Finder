import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return (
        alert !== null && (
            <div>
                {window.alert('Hey you need to type something!')}
            </div>
        )
    )
}

export default Alert;
