import React, {useEffect, useState} from 'react';
import './block_acting.css'
import Inf_acting from "../inf_acting/inf_acting.jsx";
import Button_back from "../button_back/button_back.jsx";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Block_acting = () => {
    const params = useParams();
    const filmId = params.id;
    let acting;

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

    return (
        <div className="acting">
            {data.map((inf) =>
                <Inf_acting photo={inf.photo} name={inf.name} role={inf.description}/>
            )}
            <div className="button_further_block">
                <Link to="/acting" >
                        <a className="button_further" >
                            <svg className="img_btn_further" width="27.000000" height="13.000000" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path id="Стрелка 1" d="M3.41 5.52L7.36 1.67C7.76 1.28 7.76 0.67 7.36 0.28C6.96 -0.1 6.34 -0.1 5.94 0.28L0.29 5.81C-0.1 6.19 -0.1 6.8 0.29 7.18L5.94 12.71C6.34 13.09 6.96 13.09 7.36 12.71C7.76 12.32 7.76 11.71 7.36 11.32L3.41 7.48L26 7.48C26.56 7.48 27 7.05 27 6.5C27 5.94 26.56 5.52 26 5.52L3.41 5.52Z" fillOpacity="1.000000" fillRule="evenodd"/>
                            </svg>
                        </a>
                </Link>
            </div>
        </div>
    );
};

export default Block_acting;