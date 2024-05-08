import React from 'react';
import './button_filters.css'

const Button_filters = (props) => {
    return (
        <a href="/filters" className="button_filters">
            <svg className="img_btn_filters" width="27.000000" height="15.000000" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path id="Линия 1" d="M1 3L26 3" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
                <path id="Линия 1" d="M1 11L26 11" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round"/>
                <circle id="Эллипс 1" cx="22.000000" cy="11.000000" r="3.000000" fill-opacity="1.000000"/>
                <circle id="Эллипс 1" cx="5.000000" cy="3.000000" r="3.000000" fill-opacity="1.000000"/>
            </svg>
        </a>
    );
};

export default Button_filters;