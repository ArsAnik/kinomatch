import React from 'react';
import './checkbox_filters.css'

const Checkbox_filters = (props) => {
    return (
        <label className="filters_checkbox" for={props.name}>
            <input type="checkbox" name={props.name} checked={props.isChecked} onChange={()=> props.onChange((prev) => !prev)} className="checkbox_element"/>
            <p className="text_checkbox">{props.children}</p>
        </label>


    );
};

export default Checkbox_filters;
