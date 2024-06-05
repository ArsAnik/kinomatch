import React from 'react';
import './error_window.css'

const Error_window = (props) => {


    return (
        <div className={'error_windows ' + props.show}>
            {props.message}
        </div>

    );

};

export default Error_window;