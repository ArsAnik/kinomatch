import React from 'react';
import './button_ok_no.css'

const Button_ok_no = (props) => {
    return (
        <div className="btn_block">
            <button className="btn_choice">
                <svg className="img_btn_film_ok" width="44.000000" height="41.000000" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <line id="Линия 3" x1="6.000000" y1="23.500000" x2="17.900757" y2="34.618286" stroke="#66FCF1" strokeOpacity="1.000000" strokeWidth="4.000000"/>
                    <line id="Линия 3" x1="15.500122" y1="33.999878" x2="40.000000" y2="10.000000" stroke="#66FCF1" strokeOpacity="1.000000" strokeWidth="4.000000"/>
                </svg>
            </button>
            <button className="btn_choice">
                <svg className="img_btn_film_ono" width="22.000000" height="22.000000" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <line id="Линия 2" x1="20.797852" y1="21.000000" x2="1.000000" y2="1.170898" stroke="#66FCF1" strokeOpacity="1.000000" strokeWidth="2.000000"/>
                    <line id="Линия 2" x1="1.202393" y1="20.829102" x2="21.000244" y2="1.000000" stroke="#66FCF1" strokeOpacity="1.000000" strokeWidth="2.000000"/>
                </svg>
            </button>
        </div>
    );

};

export default Button_ok_no;