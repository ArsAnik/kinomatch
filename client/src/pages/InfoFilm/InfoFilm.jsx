import React, {useEffect, useState} from 'react'
    import './InfoFilm.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Button_profile from "../../components/button_profile/button_profile.jsx";
import Block_inf_film from "../../components/block_inf_film/block_inf_film.jsx";
import Block_acting from "../../components/block_acting/block_acting.jsx";
import {useParams} from "react-router-dom";
import axios from "axios";

export const InfoFilm =() =>{
    const params = useParams();
    const filmId = params.id;

    const [data, setData] = useState(["Загрузка..."]);
    useEffect(() => {
        axios.get('http://localhost:5000/film/getFilmInf/' + filmId,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return(
        <div className="inf_body">
            <div className="inf_btn_block">
                <div className="inf_back">
                    <Button_back/>
                </div>
                <div className="inf_profile">
                    <Button_profile/>
                </div>

            </div>
            <div className="inf_film">
                <Block_inf_film header={data.name} img={data.poster} genres={data.genres}
                                text={data.description}/>
                <div className="block_acting">
                    <Block_acting />
                </div>
            </div>

        </div>
    );
};

export default InfoFilm;