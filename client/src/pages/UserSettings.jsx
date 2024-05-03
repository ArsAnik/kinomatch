import React from 'react'
import './UserSettings.css'
import Button_back from "../components/button_back/button_back.jsx";

export const UserSettings =() =>{
    return(
        <div className="settings_body">
            <div className="settings_btn_back">
                <Button_back/>
            </div>
            <div className="settings">
                <div className="setting_photo_block">
                    <div className="setting_photo">
                        <img src="src/img/profile_photo.jpg" className="img_setting_photo"/>
                    </div>
                    <div className="section_btn_photo">
                        <button className="btn_photo">Изменить фото</button>
                    </div>
                </div>
                <div className="setting_inf_block">
                    <div className="setting_inf_text">yoyogikk</div>
                    <div className="setting_inf_text">Дорогова Дарья Дмитриевна</div>
                    <div className="setting_inf_text">daria180301@rambler.ru</div>
                    <button className="setting_btn_save" >Сохранить</button>
                    <button className="setting_btn_exit" >Выйти из профиля</button>
                </div>
            </div>

        </div>
    )
}

export default UserSettings;