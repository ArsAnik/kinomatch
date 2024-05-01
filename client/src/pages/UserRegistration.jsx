import React, {useState} from 'react'
import './UserRegistration.css'
import Input from "../components/input/input.jsx";
import Button_back from "../components/button_back/button_back.jsx";
import {registration} from "../action/user.js";

export const UserRegistration =() =>{
    const [login,setLogin] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return(
        <div className="registration">
            <div className="registration_header">Регистрация</div>
            <Button_back/>
            <div className="registration_input">
                <Input value = {login} setValue = {setLogin} type="text" placeholder="Логин" />
                <Input value = {name} setValue = {setName} type="text" placeholder="ФИО"/>
                <Input value = {email} setValue = {setEmail} type="text" placeholder="Почта"/>
                <Input value = {password} setValue = {setPassword} type="password" placeholder="Пароль"/>
            </div>
            <button className="registration_btn" onClick={() => registration(login,name,email,password)}>Зарегистрироваться</button>
        </div>
    );
};

export default UserRegistration;