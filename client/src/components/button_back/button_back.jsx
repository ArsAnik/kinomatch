import React from 'react';
import './button_back.css'
import {Link, useNavigate} from "react-router-dom";

const Button_back = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} className="button_back" >
            <svg className="img_btn_back" width="27.000000" height="13.000000" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path id="Стрелка 1" d="M3.41 5.52L7.36 1.67C7.76 1.28 7.76 0.67 7.36 0.28C6.96 -0.1 6.34 -0.1 5.94 0.28L0.29 5.81C-0.1 6.19 -0.1 6.8 0.29 7.18L5.94 12.71C6.34 13.09 6.96 13.09 7.36 12.71C7.76 12.32 7.76 11.71 7.36 11.32L3.41 7.48L26 7.48C26.56 7.48 27 7.05 27 6.5C27 5.94 26.56 5.52 26 5.52L3.41 5.52Z" fillOpacity="1.000000" fillRule="evenodd"/>
            </svg>
        </button>

    );
};

export default Button_back;