import React from 'react';
import './checkbox_filters.css'

const Checkbox_filters = (props) => {
    return (
        <label className="filters_checkbox">
            <input type="checkbox" checked={props.isChecked} onChange={()=> props.onChange((prev) => !prev)} className="checkbox_element"/>
            <p>{props.children}</p>
        </label>


    );
};

export default Checkbox_filters;
