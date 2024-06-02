import React, {useState} from 'react'
import './UserRegistration.css'
import Input from "../../components/input/input.jsx";
import Button_back from "../../components/button_back/button_back.jsx";
import {registration} from "../../action/user";

export const UserRegistration =() =>{
    const [login,setLogin] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return(
        <div className="registration_body">
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
                <a className="registration_btn" onClick={() => registration(email, name, login, password)}>Зарегистрироваться</a>
            </div>
        </div>
    );
};

export default UserRegistration;