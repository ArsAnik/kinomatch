import React, {useState} from 'react'
import './Filters.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Checkbox_filters from "../../components/checkbox_filters/checkbox_filters.jsx";

export const Filters =() =>{
    const [rulesChecked,setRulesChecked] = useState(false);
    return(
        <div className="filters_body">

            <div className="filters_btn_block">
                <Button_back/>
            </div>
            <div className="filters">
                <div className="filters_header">Фильтры</div>
                <Checkbox_filters isChecked={rulesChecked} onChange={setRulesChecked}>экшн</Checkbox_filters>
            </div>

        </div>
    );
};

export default Filters;