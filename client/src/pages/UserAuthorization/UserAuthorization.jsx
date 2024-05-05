import React, {useState} from 'react'
import './UserAuthorization.css'
import Input from "../../components/input/input.jsx";
import Button_back from "../../components/button_back/button_back.jsx";

export const UserAuthorization =() =>{
    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")

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
                <button className="authorization_btn" >Войти</button>
                <button className="reg_in_auth_btn" >Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default UserAuthorization;