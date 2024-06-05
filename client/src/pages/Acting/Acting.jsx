import React, {useEffect, useState} from 'react'
import './Acting.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Inf_acting from "../../components/inf_acting/inf_acting.jsx";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export const Acting =() =>{
    const params = useParams();
    const filmId = params.id;

    const [data, setData] = useState(["Загрузка..."]);
    useEffect(() => {
        axios.get('http://localhost:5000/film/getFilmActing/' + filmId,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then(function (response) {
                console.log(response.data.acting);
                setData(response.data.acting);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return(
        <div className="acting_body">
            <div className="acting_btn_back">
                <Button_back/>
            </div>
            <div className="acting_block_all">
                {data.map((inf) =>
                    <Inf_acting photo={inf.photo} name={inf.name} role={inf.description}/>
                )}
            </div>
        </div>
    );
};

export default Acting;