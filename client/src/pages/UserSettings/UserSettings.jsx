import React, {useState} from 'react'
import './UserSettings.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Input from "../../components/input/input.jsx";

import profile_photo from "../../img/profile_photo.jpg";

export const UserSettings =() =>{
    const [login,setLogin] = useState("yoyogikkk")
    const [name,setName] = useState("Дорогова Дарья Дмитриевна")
    const [email,setEmail] = useState("daria180301@rambler.ru")
    const [password,setPassword] = useState("yoyogikkk")

    return(
        <div className="settings_body">
            <div className="settings_btn_back">
                <Button_back/>
            </div>
            <div className="settings">
                <div className="setting_photo_block">
                    <div className="setting_photo">
                        <img src={profile_photo} className="img_setting_photo"/>
                    </div>
                    <div className="section_btn_photo">
                        <button className="btn_photo">Изменить фото</button>
                    </div>
                </div>
                <div className="setting_inf_block">
                    <Input value={login} setValue = {setLogin} type="text" placeholder="Логин"/>
                    <Input value = {name} setValue = {setName} type="text" placeholder="ФИО"/>
                    <Input value = {email} setValue = {setEmail} type="text" placeholder="Почта"/>
                    <Input value = {password} setValue = {setPassword} type="password" placeholder="Пароль"/>
                    <button className="setting_btn_save" >Сохранить</button>
                    <a href={"/authorization"} className="setting_btn_exit" >Выйти из профиля</a>
                </div>
            </div>

        </div>
    )
}

export default UserSettings;