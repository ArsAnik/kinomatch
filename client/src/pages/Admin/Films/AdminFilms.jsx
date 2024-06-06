import './AdminFilms.css'
import React, {useEffect, useState} from 'react'
import Button_back from "../../../components/button_back/button_back.jsx";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {static_path} from "../../../../config.js";
import default_photo from "../../../img/default_photo.jpg";

export const AdminFilms =() =>{

    const [data, setData] = useState(["Загрузка..."]);
    const [page, setPage] = useState(0);
    const [pagesAtAll, setPagesAtAll] = useState(0);
    const [reaload, setReaload] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/admin/getFilmsPages', {headers:{Authorization:`Bearer ${localStorage.getItem('admin_token')}`}})
            .then(function (response){
                setPagesAtAll(Number(response.data));
            }).catch(function (error) {
            window.location.href = '/errors';
        });
    }, []);


    useEffect(() => {
        axios.post('http://localhost:5000/admin/getFilms',  {page}, {headers:{Authorization:`Bearer ${localStorage.getItem('admin_token')}`}})
            .then(function (response){
                setData(response.data);
            }).catch(function (error) {
            window.location.href = '/errors';
        });
        setPage(page);
        setReaload(false);
    }, [page, reaload]);

    function clickDeleteHandler(filmId){
        axios.post('http://localhost:5000/admin/deleteFilm', {filmId},  {headers:{Authorization:`Bearer ${localStorage.getItem('admin_token')}`}})
            .then(function (response){
            }).catch(function (error) {
            window.location.href = '/errors';
        });
        setReaload(true);
    }

    return(
        <div className="admin_film_block">
            <div className="admin_button_back">
                <Button_back/>
            </div>
            {data.map((film) =>
                <div className="admin_film">
                    <div className="admin_film_photo_block">
                        <img src={film.photo} className="admin_film_photo"/>
                    </div>
                    <div className="film_inf_block">
                        <span className="film_name">{film.name}</span>
                        <span className="film_description">{film.description}</span>
                    </div>
                    <a className="film_delete_button" onClick={() => clickDeleteHandler(film.id)}>❌</a>
                </div>
            )}
            <div className="admin_film_pages">
                {page !== 0 && <a className="admin_page_prev" onClick={() => setPage(page - 1)}>←</a>}
                <span>{page + 1} / {pagesAtAll}</span>
                {(pagesAtAll !== page) && <a className="admin_page_next" onClick={() => setPage(page + 1)}>→</a>}
            </div>
        </div>
    );
};

export default AdminFilms;
