import React, {useState} from 'react'
import './Filters.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Checkbox_filters from "../../components/checkbox_filters/checkbox_filters.jsx";

export const Filters =() =>{
    const [rulesChecked, setRulesChecked] = useState(false);
    return(
        <div className="filters_body">

            <div className="filters_btn_block">
                <Button_back/>
            </div>
            <div className="filters_header">Фильтры</div>
            <div className="filters">
                <Checkbox_filters name="экшн" isChecked={rulesChecked} onChange={setRulesChecked}>экшн</Checkbox_filters>
                <Checkbox_filters name="боевик" isChecked={rulesChecked} onChange={setRulesChecked}>боевик</Checkbox_filters>
            </div>

        </div>
    );
};

export default Filters;