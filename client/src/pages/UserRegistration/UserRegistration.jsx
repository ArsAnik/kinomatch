import React, {useEffect, useState} from 'react'
import './UserRegistration.css'
import Input from "../../components/input/input.jsx";
import Button_back from "../../components/button_back/button_back.jsx";
import {registration} from "../../action/user";
import Error_window from "../../components/error_window/error_window";

export const UserRegistration =() =>{
    const [login,setLogin] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [message_error, setMessage] = useState("");
    const [message_error_show, setMessageShow] = useState("hide");

    async function clickHandler(email, name, login, password) {
        const response = await registration(email, name, login, password)
        if(response){
            setMessage(response);
            setMessageShow("show");
            timerShow();
        }
    }

    function timerShow(){
        setInterval(() => {
            setMessageShow("hide");
        }, 5000);
    }

    return(
        <div className="registration_body">
            <div className="registration_windows_error">
            {(message_error)
                ? <Error_window message={message_error} show={message_error_show}/>
                : <></>}
            </div>
            <div className="registration_btn_back">
                <Button_back/>

            </div>
            <div className="registration">

                <div className="registration_header">Регистрация</div>

                <div className="registration_input">
                    <Input value = {login} setValue = {setLogin} type="text" placeholder="Логин" />
                    <Input value = {name} setValue = {setName} type="text" placeholder="ФИО"/>
                    <Input value = {email} setValue = {setEmail} type="text" placeholder="Почта"/>
                    <Input value = {password} setValue = {setPassword} type="password" placeholder="Пароль"/>
                </div>
                <a className="registration_btn" onClick={() => clickHandler(email, name, login, password)}>Зарегистрироваться</a>
            </div>
        </div>
    );
};

export default UserRegistration;