import React, {useState} from 'react'
import './UserSettings.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Input from "../../components/input/input.jsx";
import {useDispatch, useSelector} from "react-redux";
import default_photo from "../../img/default_photo.jpg";
import {logout} from "../../reducers/userReducer.js";
import {Link} from "react-router-dom";


export const UserSettings =() =>{
    const AvatarUser = useSelector(state => state.user.currentUser.avatar)
    const NameUser = useSelector(state => state.user.currentUser.name)
    const [name,setName] = useState(NameUser)
    const dispatch= useDispatch();


    return(
        <div className="settings_body">
            <div className="settings_btn_back">
                <Button_back href="/profile"/>
            </div>
            <div className="settings">
                <div className="setting_photo_block">
                    <div className="setting_photo">
                        {AvatarUser
                            ? <img src={AvatarUser} className="img_setting_photo"/>
                            : <img src={default_photo} className="img_setting_photo"/>
                        }
                    </div>
                    <div className="section_btn_photo">
                        <button className="btn_photo">Изменить фото</button>
                    </div>
                </div>
                <div className="setting_inf_block">
                    <Input value = {name} setValue = {setName} type="text" placeholder="ФИО"/>
                    <a className="setting_btn_save" >Сохранить</a>
                    <Link to="/authorization">
                        <a className="setting_btn_exit" onClick={() => dispatch(logout())}>Выйти из профиля</a>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default UserSettings;