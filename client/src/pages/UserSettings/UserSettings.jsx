import React, {useState} from 'react'
import './UserSettings.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Input from "../../components/input/input.jsx";
import default_photo from "../../img/default_photo.jpg";
import {Link} from "react-router-dom";
import {logout, updateAvatar, updateUser} from "../../action/user.js";
import {static_path} from "../../../config.js";
import Error_window from "../../components/error_window/error_window.jsx";


export const UserSettings =() =>{
    const NameUser = JSON.parse(localStorage.getItem('user')).name;
    const AvatarUser = JSON.parse(localStorage.getItem('user')).avatar;
    const id = JSON.parse(localStorage.getItem('user')).id;
    const [name,setName] = useState(NameUser)
    const [message_error, setMessage] = useState("");
    const [message_error_show, setMessageShow] = useState("hide");
    let timeout;

    async function clickHandler(name) {
        const response = await updateUser(name)
        if(response){
            setMessage(response);
            setMessageShow("show");
            timerShow();
        }
        else{
            const response = await updateUser(name)
            if(response){
                setMessage(response);
                setMessageShow("show");
                timerShow();
            }
        }


    }



    async function changeHandler(e) {
        const file = e.target.files[0]
        const response = await updateAvatar(id, file)
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
        <div className="settings_body">
            <div className="registration_windows_error">
                {(message_error)
                    ? <Error_window message={message_error} show={message_error_show}/>
                    : <></>}
            </div>
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
                        <a className="setting_btn_save" onClick={() => clickHandler(name)}>Сохранить</a>
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