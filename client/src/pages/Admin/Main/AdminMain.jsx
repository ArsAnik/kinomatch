import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

export const AdminMain =() =>{

    const LoginAdmin = JSON.parse(localStorage.getItem('admin')).login;

    return(
        <div className="main_admin">
            <div className="admin_inf">
                <span>Логин админ-пользователя: {LoginAdmin}</span>
            </div>
            <div className="admin_button_block">
                <Link to={}>
                    <a className="admin_button_choose">Список фильмов</a>
                </Link>
                <Link to={}>
                    <a className="admin_button_choose">Список пользователей</a>
                </Link>
            </div>
        </div>
    );
};

export default AdminMain;
