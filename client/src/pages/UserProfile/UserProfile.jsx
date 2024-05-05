import React from 'react'
import Button_back from "../../components/button_back/button_back.jsx";
import './UserProfile.css'

export const UserProfile =() =>{
    return(
        <div className="profile">

            <div className="profile_btn_block">
                <div className="profile_btn_back">
                    <Button_back/>
                </div>
                <div className="profile_settings">
                    <button className="profile_btn_settings">
                        <svg className="img_settings" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <circle id="Эллипс 1" cx="12.500000" cy="11.500000" r="4.500000" fill="#66FCF1" fill-opacity="1.000000"/>
                            <path id="path" d="M2.6 17.89C2.22 17.7 2 17.32 2 16.92L2 7.07C2 6.67 2.22 6.29 2.6 6.1L11.93 1.14C12.28 0.95 12.71 0.95 13.06 1.14L22.39 6.1C22.77 6.29 23 6.67 23 7.07L23 16.92C23 17.32 22.77 17.7 22.39 17.89L13.06 22.85C12.71 23.04 12.28 23.04 11.93 22.85L2.6 17.89Z" stroke-opacity="1.000000" stroke-width="1.500000"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="profile_center_block">
                <div className="profile_photo">
                    <img src="src/img/profile_photo.jpg" className="img_profile_photo"/>
                </div>
                <div className="profile_login">yoyogikkk</div>
                <div className="profile_liked_film">
                    <button className="profile_btn_film">
                        <svg className="profile_img_btn_film" width="41.000000" height="38.000000" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path id="矢量 17" d="M20.5 3.13C25.31 -1.19 32.75 -1.05 37.39 3.6C42.03 8.25 42.19 15.65 37.88 20.48L20.49 37.89L3.11 20.48C-1.2 15.65 -1.04 8.23 3.6 3.6C8.24 -1.04 15.67 -1.2 20.5 3.13L20.5 3.13ZM34.49 6.49C31.41 3.41 26.45 3.29 23.24 6.18L20.5 8.64L17.76 6.18C14.53 3.29 9.58 3.41 6.5 6.5C3.44 9.55 3.29 14.44 6.1 17.67L20.49 32.09L34.89 17.67C37.7 14.44 37.55 9.56 34.49 6.49L34.49 6.49Z" fill="#66FCF1" fill-opacity="1.000000" fill-rule="evenodd"/>
                        </svg>
                        <div className="text_btn_film">Понравившиеся фильмы</div>
                    </button>
                </div>
                <div className="profile_watched_film">
                    <button className="profile_btn_film">
                        <svg className="profile_img_btn_film" width="44.000000" height="41.000000" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <line id="Линия 3" x1="6.000000" y1="23.500000" x2="17.900757" y2="34.618286" stroke="#66FCF1" stroke-opacity="1.000000" stroke-width="4.000000"/>
                            <line id="Линия 3" x1="15.500122" y1="33.999878" x2="40.000000" y2="10.000000" stroke="#66FCF1" stroke-opacity="1.000000" stroke-width="4.000000"/>
                        </svg>
                        <div className="text_btn_film">Просмотренные фильмы</div>
                    </button>
                </div>


            </div>


        </div>
    )
}

export default UserProfile;