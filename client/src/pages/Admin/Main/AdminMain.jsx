import React, {useState} from 'react'
import {Link} from "react-router-dom";
import "./AdminMain.css";
import axios from "axios";

export const AdminMain =() =>{

    const LoginAdmin = JSON.parse(localStorage.getItem('admin')).login;

    function logoutAdmin(){
        localStorage.clear();
        window.location.href = '/admin/login';
    }

    return(
        <div className="main_admin">
            <div className="admin_inf">
                <span>Логин админ-пользователя: {LoginAdmin}</span>
            </div>
            <div className="admin_button_block">
                <Link to="/admin/films">
                    <a className="admin_button_choose">Список фильмов</a>
                </Link>
                <Link to="/admin/users">
                    <a className="admin_button_choose">Список пользователей</a>
                </Link>
                <a className="admin_btn_exit" onClick={() => logoutAdmin()}>Выйти из профиля</a>
            </div>
        </div>
    );
};

export default AdminMain;
