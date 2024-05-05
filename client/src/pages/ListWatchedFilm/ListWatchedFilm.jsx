import React from 'react'
import './ListWatchedFilm.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Button_filters from "../../components/button_filters/button_filters.jsx";
import Button_estimate from "../../components/button_estimate/button_estimate.jsx";
import Block_photo_header from "../../components/block_photo_header/block_photo_header.jsx";
import Grade_film from "../../components/grade_film/grade_film.jsx";


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
                <Block_photo_header img="src/img/liked_photo_1.png" header="Оппенгеймер">
                    <Button_estimate/>
                </Block_photo_header>

                <Block_photo_header img="src/img/liked_photo_2.png" header="Барби">
                    <Grade_film grade="9/10"/>
                </Block_photo_header>

                <Block_photo_header img="src/img/liked_photo_3.png" header="Бедные - несчастные">
                    <Grade_film grade="7/10"/>
                </Block_photo_header>

                <Block_photo_header img="src/img/liked_photo_4.png" header="Гарри Поттер и Философский камень">
                    <Button_estimate/>
                </Block_photo_header>

            </div>
        </div>
    )
}
export default ListWatchedFilm;