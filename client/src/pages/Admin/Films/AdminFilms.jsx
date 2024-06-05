import 'AdminFilms.css'
import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

export const AdminFilms =() =>{

    return(
        <div className="admin_film_block">
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
