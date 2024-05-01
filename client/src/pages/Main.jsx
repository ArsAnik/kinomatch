import React from 'react'
import './Main.css'
import Button_filters from "../components/button_filters/button_filters.jsx";
import Button_profile from "../components/button_profile/button_profile.jsx";

export const Main =() =>{
    return(
        <div className="main">
            <Button_filters/>
            <Button_profile/>
            <button className="list_film"></button>
        </div>
    );
};

export default Main;