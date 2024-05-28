import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import './UserAuthorization.css'
import Input from "../../components/input/input.jsx";
import Button_back from "../../components/button_back/button_back.jsx";
import {authorization} from "../../action/user.js";


export const UserAuthorization =() =>{
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    const dispatch= useDispatch();

    return(
        <div className="authorization_body">
            <div className="authorization_btn_back">
                <Button_back/>
            </div>
            <div className="authorization">
                <div className="authorization_header">Вход</div>
                <div className="authorization_input">
                    <Input value = {login} setValue = {setLogin} type="text" placeholder="Логин" />
                    <Input value = {password} setValue = {setPassword} type="password" placeholder="Пароль"/>
                </div>
                <a className="authorization_btn" onClick={() => dispatch(authorization(login, password))}>Войти</a>
                <a href={"/registration"} className="reg_in_auth_btn" >Зарегистрироваться</a>
            </div>
        </div>
    );
};

export default UserAuthorization;

//href={"/profile"}