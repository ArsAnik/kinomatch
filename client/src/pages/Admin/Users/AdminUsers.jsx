import './AdminUsers.css'
import React, {useEffect, useState} from 'react'
import Button_back from "../../../components/button_back/button_back.jsx";
import {Link, useLinkClickHandler} from "react-router-dom";
import axios from "axios";
import {static_path} from "../../../../config.js";
import default_photo from "../../../img/default_photo.jpg";

export const AdminUsers =() =>{

    const [data, setData] = useState(["Загрузка..."]);
    const [reaload, setReaload] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:5000/admin/getUsers',  {headers:{Authorization:`Bearer ${localStorage.getItem('admin_token')}`}})
            .then(function (response){
                console.log(response.data);
                setData(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        setReaload(false);
    }, [reaload]);

    function clickHandler(userId){
        axios.post('http://localhost:5000/admin/deleteUser', {userId},  {headers:{Authorization:`Bearer ${localStorage.getItem('admin_token')}`}})
            .then(function (response){

                console.log(response.data);
            }).catch(function (error) {
            console.log(error);
        });
        setReaload(true);
    }

    return(
        <div className="admin_user_block">
            <div className="admin_button_back">
                <Button_back/>
            </div>
            <div>
                {data.map((user) =>
                    <div className="user_block">
                        <div className="admin_user_photo_block">
                        {user.avatar
                            ? <img src={static_path + user.avatar} className="admin_user_photo"/>
                            : <img src={default_photo} className="admin_user_photo"/>
                        }
                        </div>
                        <div className="user_inf_block">
                            <span className="user_text">Имя: {user.name ? user.name : "-"}</span>
                            <span className="user_text">Логин: {user.login ? user.login : "-"}</span>
                            <span className="user_text">Email: {user.email ? user.email : "-"}</span>
                        </div>
                        <a className="user_delete_button" onClick={() => clickHandler(user.id)}>❌</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminUsers;
