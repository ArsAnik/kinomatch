import React from 'react';
import './button_back.css'

const Button_back = (props) => {
    return (
        <button className="button_back" >
            <img src="src/img/arrow_back.svg" className="img_btn_back"/>
        </button>
    );
};

export default Button_back;