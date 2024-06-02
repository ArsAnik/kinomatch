import React, {useState} from 'react'
import './Filters.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Checkbox_filters from "../../components/checkbox_filters/checkbox_filters.jsx";

export const Filters =(props) =>{

    return(
        <div className="filters_body">

            <div className="filters_btn_block">
                <Button_back/>
            </div>
            <div className="filters_header">Фильтры</div>
            <div className="filter_main_block">
                <div className="name_filters">По жанру</div>
                <div className="filters">
                {[...Array(10)].map((_, idx) => (
                    <div key={idx} className="filter_checkbox">
                        <label className="text_check">
                            <input
                                key={idx}
                                className="checkbox_square"
                                type="checkbox"
                            />
                            Жанр {idx}
                        </label>
                    </div>
                ))}
                </div>
                <button className="btn_save">Сохранить</button>
                <button className="btn_cancel">Отменить</button>
            </div>


        </div>
    );
};

export default Filters;