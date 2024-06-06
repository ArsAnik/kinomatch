import React, {useState} from 'react'
import './UserAuthorization.css'
import Input from "../../components/input/input.jsx";
import Button_back from "../../components/button_back/button_back.jsx";
import {authorization} from "../../action/user.js";
import {Link} from "react-router-dom";
import Error_window from "../../components/error_window/error_window.jsx";


export const UserAuthorization =() =>{
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    const [message_error, setMessage] = useState("");
    const [message_error_show, setMessageShow] = useState("hide");
    let timeout;

    async function clickHandler(login, password) {
        const response = await authorization(login, password)
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
            <div className="authorization_btn_back">
                <Button_back/>
            </div>
            <div className="authorization">
                <div className="authorization_header">Вход</div>
                <div className="authorization_input">
                    <Input value = {login} setValue = {setLogin} type="text" placeholder="Логин" />
                    <Input value = {password} setValue = {setPassword} type="password" placeholder="Пароль"/>
                </div>
                <a className="authorization_btn" onClick={() => clickHandler(login, password)}>Войти</a>
                <Link to="/registration">
                    <a className="reg_in_auth_btn" >Зарегистрироваться</a>
                </Link>
            </div>
        </div>
    );
};

export default UserAuthorization;
