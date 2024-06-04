import React from 'react';
import './button_filters.css'
import {Link} from "react-router-dom";

const Button_filters = (props) => {
    return (
        <Link to="/filters">
            <a className="button_filters">
                <svg className="img_btn_filters" width="27.000000" height="15.000000" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path id="Линия 1" d="M1 3L26 3" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinecap="round"/>
                    <path id="Линия 1" d="M1 11L26 11" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinecap="round"/>
                    <circle id="Эллипс 1" cx="22.000000" cy="11.000000" r="3.000000" fillOpacity="1.000000"/>
                    <circle id="Эллипс 1" cx="5.000000" cy="3.000000" r="3.000000" fillOpacity="1.000000"/>
                </svg>
            </a>
        </Link>

    );
};

export default Button_filters;