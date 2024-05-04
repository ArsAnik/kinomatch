import React from 'react'
import './ListWatchedFilm.css'
import Button_back from "../components/button_back/button_back.jsx";
import Button_filters from "../components/button_filters/button_filters.jsx";
import Button_ok_no from "../components/button_ok_no/button_ok_no.jsx";


export const ListWatchedFilm =() =>{
    return(
        <div className="watched_body">
            <div className="watched_btn_block">
                <div className="watched_btn_back">
                    <Button_back/>
                </div>
                <div className="watched_btn_filters">
                    <Button_filters/>
                </div>
            </div>
            <div className="watched">
                <div className="watched_film_block">
                    <img src="src/img/liked_photo_1.png" className="liked_poster_film"/>
                    <div className="watched_choice_block">
                        <div className="watched_header_film">Оппенгеймер</div>
                        <button className="watched_btn_estimate">Оценить</button>
                    </div>
                </div>

                <div className="watched_film_block">
                    <img src="src/img/liked_photo_2.png" className="liked_poster_film"/>
                    <div className="watched_choice_block">
                        <div className="watched_header_film">Барби</div>
                        <span className="watched_btn_grade">9/10</span>
                    </div>
                </div>

                <div className="watched_film_block">
                    <img src="src/img/liked_photo_3.png" className="liked_poster_film"/>
                    <div className="watched_choice_block">
                        <div className="watched_header_film">Бедные - несчастные</div>
                        <span className="watched_btn_grade">7/10</span>
                    </div>
                </div>

                <div className="watched_film_block">
                    <img src="src/img/liked_photo_4.png" className="liked_poster_film"/>
                    <div className="watched_choice_block">
                        <div className="watched_header_film">Гарри Поттер и Философский камень</div>
                        <button className="watched_btn_estimate">Оценить</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListWatchedFilm;