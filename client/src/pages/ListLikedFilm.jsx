import React from 'react'
import './ListLikedFilm.css'
import Button_back from "../components/button_back/button_back.jsx";
import Button_filters from "../components/button_filters/button_filters.jsx";
import Button_ok_no from "../components/button_ok_no/button_ok_no.jsx";

export const ListLikedFilm =() =>{
    return(
        <div className="liked_body">

            <div className="liked_btn_block">
                <div className="liked_btn_back">
                    <Button_back/>
                </div>
                <div className="liked_btn_filters">
                    <Button_filters/>
                </div>
            </div>

            <div className="liked">
                <div className="liked_film_block">
                    <img src="src/img/liked_photo_1.png" className="liked_poster_film"/>
                    <div className="liked_choice_block">
                        <div className="liked_header_film">Оппенгеймер</div>
                        <Button_ok_no/>
                    </div>
                </div>

                <div className="liked_film_block">
                    <img src="src/img/liked_photo_2.png" className="liked_poster_film"/>
                    <div className="liked_choice_block">
                        <div className="liked_header_film">Барби</div>
                        <Button_ok_no/>
                    </div>
                </div>

                <div className="liked_film_block">
                    <img src="src/img/liked_photo_3.png" className="liked_poster_film"/>
                    <div className="liked_choice_block">
                        <div className="liked_header_film">Бедные-несчастные</div>
                        <Button_ok_no/>
                    </div>
                </div>

                <div className="liked_film_block">
                    <img src="src/img/liked_photo_4.png" className="liked_poster_film"/>
                    <div className="liked_choice_block">
                        <div className="liked_header_film">Гарри Поттер и Философский камень</div>
                        <Button_ok_no/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListLikedFilm;