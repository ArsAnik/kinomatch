import React, {useState} from 'react'
import './UserSettings.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Input from "../../components/input/input.jsx";
import default_photo from "../../img/default_photo.jpg";
import {Link} from "react-router-dom";
import {logout, updateAvatar, updateUser} from "../../action/user.js";
import {static_path} from "../../../config.js";


export const UserSettings =() =>{
    const AvatarUser = localStorage.getItem('user.avatar');
    const NameUser = localStorage.getItem('user.name');
    const id = localStorage.getItem('user.id');
    const [name,setName] = useState(NameUser)

    console.log(NameUser);


    function changeHandler(e) {
        const file = e.target.files[0]
        updateAvatar(id, file)
    }

    return(
        <div className="settings_body">
            <div className="settings_btn_back">
                <Button_back href="/profile"/>
            </div>
            <div className="settings">
                <div className="setting_photo_block">
                    <div className="setting_photo">
                        {AvatarUser
                            ? <img src={static_path + AvatarUser} className="img_setting_photo"/>
                            : <img src={default_photo} className="img_setting_photo"/>
                        }
                    </div>
                    <div className="section_btn_photo">
                        <label for="fileInput" className="btn_photo">Изменить фото
                        <input id="fileInput" type="file" accept="image/*" onChange={e => changeHandler(e)} multiple/>
                        </label>
                    </div>
                </div>
                <div className="setting_inf_block">
                    <Input value = {name} setValue = {setName} type="text" placeholder="ФИО"/>
                    <Link to="/settings">
                        <a className="setting_btn_save" onClick={() => updateUser(name)}>Сохранить</a>
                    </Link>

                    <Link to="/authorization">
                        <a className="setting_btn_exit" onClick={() => logout()}>Выйти из профиля</a>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default UserSettings;