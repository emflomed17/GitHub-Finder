import React from 'react';
import swal from '@sweetalert/with-react';

const Alert = ({ alert }) => {
    return (
        alert !== null && (
            <div>
                {window.alert('eeee')}
            </div>
        )
    )
}

export default Alert
