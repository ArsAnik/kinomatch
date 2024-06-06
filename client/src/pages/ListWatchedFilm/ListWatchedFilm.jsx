import React, {useEffect, useState} from 'react'
import './ListWatchedFilm.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Button_filters from "../../components/button_filters/button_filters.jsx";
import Block_photo_header from "../../components/block_photo_header/block_photo_header.jsx";
import axios from "axios";


export const ListWatchedFilm =() =>{
    const id_user = JSON.parse(localStorage.getItem('user')).id;

    const [data, setData] = useState(["Загрузка..."]);
    useEffect(() => {
        axios.post('http://localhost:5000/film/getUserFilms',{isWatch: true},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then(function (response) {
                console.log(response.data);
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);


    return(
        <div className="watched_body">
            <div className="watched_btn_block">
                <div className="watched_btn_back">
                    <Button_back/>
                </div>
                <div className="watched_btn_filters">
                    <Button_filters/>
                </div>
            </div>
            <div className="watched">
                {data.map((inf) =>
                    <Block_photo_header img={inf.photo} header={inf.name}>
                    </Block_photo_header>
                )}

            </div>
        </div>
    )
}
export default ListWatchedFilm;