import React, {useState} from 'react'
import '../../UserAuthorization/UserAuthorization.css'
import './AdminLogin.css'
import Input from "../../../components/input/input.jsx";
import {Link} from "react-router-dom";
import axios from "axios";
import Error_window from "../../../components/error_window/error_window.jsx";


export const AdminLogin =() =>{
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const [message_error, setMessage] = useState("");
    const [message_error_show, setMessageShow] = useState("hide");

    let timeout;

    const proc_login = async(login, password) => {
        try{
            await axios.post('http://localhost:5000/admin/login', {login, password})
                .then(function (response){
                    localStorage.clear();
                    localStorage.setItem('admin_token', response.data.token);
                    localStorage.setItem('admin' , JSON.stringify(response.data.admin));
                    window.location.href = '/admin/';
                })
        } catch (e) {
            console.log(e.response.data.message);
            return(e.response.data.message)
        }
    }

    async function clickHandler(login, password) {
        const response = await proc_login(login, password);
        if(response){
            setMessage(response);
            setMessageShow("show");
            timerShow();
        }
    }

    function timerShow(){
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setMessageShow("hide");
        }, 5000);
    }

    return(
        <div className="authorization_body">
            <div className="registration_windows_error">
                {(message_error)
                    ? <Error_window message={message_error} show={message_error_show}/>
                    : <></>}
            </div>
            <div className="authorization">
                <div className="authorization_header admin_authorization_header">Вход в панель администратора</div>
                <div className="authorization_input">
                    <Input value = {login} setValue = {setLogin} type="text" placeholder="Логин" />
                    <Input value = {password} setValue = {setPassword} type="password" placeholder="Пароль"/>
                </div>
                <a className="authorization_btn" onClick={() => clickHandler(login, password)}>Войти</a>
            </div>
        </div>
    );
};

export default AdminLogin;
