import React from 'react'
import './Main.css'
import Button_filters from "../components/button_filters/button_filters.jsx";
import Button_profile from "../components/button_profile/button_profile.jsx";

export const Main =() =>{
    return(
        <div className="main">
            <div className="main_btn_block">
                <div className="main_btn_filter">
                    <Button_filters/>
                </div>
                <div className="checkbox_switch">
                    <button className="switch_btn_option">
                        <svg className="img_option" width="20.000000" height="23.000000" viewBox="0 0 20 23" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path id="path" d="M3.28 19.7L1.23 15.25C0.69 14.08 1.12 12.7 2.22 12.05L4.99 10.41C5.48 10.13 6.08 10.13 6.55 10.43L6.9 10.65C7.25 10.87 7.71 10.58 7.66 10.16L6.85 3.33C6.81 2.93 6.94 2.53 7.23 2.25C7.54 1.94 8.04 1.91 8.39 2.19L8.58 2.34C8.87 2.57 9.06 2.9 9.12 3.27L10.24 10.21C10.26 10.35 10.38 10.45 10.52 10.45C10.67 10.45 10.79 10.34 10.8 10.19L11.47 3.33C11.51 2.93 11.71 2.56 12.02 2.3L12.13 2.22C12.5 1.92 13.03 1.95 13.37 2.29C13.63 2.55 13.78 2.91 13.78 3.28L13.78 14.41C13.78 14.83 14.26 15.06 14.59 14.8L16.28 13.45C17.11 12.79 18.22 13.22 18.91 13.67C19.13 13.81 19.16 14.11 19 14.32L15.03 19.7C15.03 19.7 13.28 21.7 9.28 21.7C5.28 21.7 3.61 20.37 3.28 19.7Z"  fill-opacity="0" fill-rule="nonzero"/>
                            <path id="path" d="M1.23 15.25C0.69 14.08 1.12 12.7 2.22 12.05L4.99 10.41C5.48 10.13 6.08 10.13 6.55 10.43L6.9 10.65C7.25 10.87 7.71 10.58 7.66 10.16L6.85 3.33C6.81 2.93 6.94 2.53 7.23 2.25C7.54 1.94 8.04 1.91 8.39 2.19L8.58 2.34C8.87 2.57 9.06 2.9 9.12 3.27L10.24 10.21C10.26 10.35 10.38 10.45 10.52 10.45C10.67 10.45 10.79 10.34 10.8 10.19L11.47 3.33C11.51 2.93 11.71 2.56 12.02 2.3L12.13 2.22C12.5 1.92 13.03 1.95 13.37 2.29C13.63 2.55 13.78 2.91 13.78 3.28L13.78 14.41C13.78 14.83 14.26 15.06 14.59 14.8L16.28 13.45C17.11 12.79 18.22 13.22 18.91 13.67C19.13 13.81 19.16 14.11 19 14.32L15.03 19.7C15.03 19.7 13.28 21.7 9.28 21.7C5.28 21.7 3.61 20.37 3.28 19.7L1.23 15.25Z" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button className="switch_btn_option active">
                        <svg className="img_option" width="20.000000" height="23.000000" viewBox="0 0 20 23" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path id="path" d="M3.26 19.68L1.23 15.28C0.68 14.09 1.14 12.69 2.28 12.05L7.9 8.9C8.42 8.61 9.06 8.66 9.54 9.01L10.05 9.4C10.36 9.63 10.81 9.44 10.85 9.05L11.44 3.3C11.48 2.9 11.68 2.54 12 2.29L12.1 2.2C12.48 1.9 13.01 1.93 13.35 2.27C13.61 2.53 13.76 2.89 13.76 3.26L13.76 14.39C13.76 14.81 14.24 15.04 14.57 14.78L16.26 13.43C17.08 12.77 18.19 13.2 18.88 13.65C19.1 13.79 19.14 14.09 18.98 14.3L15.01 19.68C15.01 19.68 13.26 21.68 9.26 21.68C5.26 21.68 3.59 20.34 3.26 19.68Z" fill-opacity="0" fill-rule="nonzero"/>
                            <path id="path" d="M1.23 15.28C0.68 14.09 1.14 12.69 2.28 12.05L7.9 8.9C8.42 8.61 9.06 8.66 9.54 9.01L10.05 9.4C10.36 9.63 10.81 9.44 10.85 9.05L11.44 3.3C11.48 2.9 11.68 2.54 12 2.29L12.1 2.2C12.48 1.9 13.01 1.93 13.35 2.27C13.61 2.53 13.76 2.89 13.76 3.26L13.76 14.39C13.76 14.81 14.24 15.04 14.57 14.78L16.26 13.43C17.08 12.77 18.19 13.2 18.88 13.65C19.1 13.79 19.14 14.09 18.98 14.3L15.01 19.68C15.01 19.68 13.26 21.68 9.26 21.68C5.26 21.68 3.59 20.34 3.26 19.68L1.23 15.28Z" stroke-opacity="1.000000" stroke-width="1.500000"/>
                        </svg>
                    </button>
                </div>
                <div className="main_btn_profile">
                    <Button_profile/>
                </div>
            </div>

            <div className="main_inf_film">
                <div className="main_header">ОППЕНГЕЙМЕР</div>
                <img src="src/img/poster_fil_oppen.jpg" className="film_poster"/>
                <div className="main_text_genre">
                    биография, драма, США, 3ч.
                </div>
                <div className="contain_text_info_film">
                    <p className="text_info_film">История жизни американского физика-теоретика Роберта Оппенгеймера, который
                        во времена Второй мировой войны
                        руководил Манхэттенским
                        проектом — секретными разработками
                        ядерного оружия.
                    </p>
                </div>
                <button className="main_btn_list_film">
                    <img src="src/img/icon_film.svg" className="img_list_film"/>
                </button>
            </div>
        </div>
    );
};

export default Main;