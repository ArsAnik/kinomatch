import './AdminUsers.css'
import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

export const AdminUsers =() =>{

    return(
        <div className="admin_user_block">
            <div className="user_block">
                <img src={props.img} className="user_avatar"/>
                <span className="user_name">{props.genres}</span>
                <span className="user_login">{props.description}</span>
                <span className="user_email">{props.description}</span>
                <a>Удалить</a>
            </div>
        </div>
    );
};

export default AdminUsers;
