import './AdminFilms.css'
import React from 'react'
import Button_back from "../../../components/button_back/button_back.jsx";
import {Link} from "react-router-dom";
import axios from "axios";

export const AdminFilms =() =>{

    const proc_login = async() => {
        try{
            axios.get('http://localhost:5000/admin/getUsers',  {headers:{Authorization:`Bearer ${localStorage.getItem('admin_token')}`}})
                .then(function (response){

                });
        } catch (e) {
            return(e.response.data.message)
        }
    }

    return(
        <div className="admin_film_block">
            <Button_back/>
            <div className="film_block">
                <img src={props.img} className="film_img"/>
                <span className="film_genre">{props.genres}</span>
                <span className="film_description">{props.description}</span>
                <a>Удалить</a>
            </div>
        </div>
    );
};

export default AdminFilms;
