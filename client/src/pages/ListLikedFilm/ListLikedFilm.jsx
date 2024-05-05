import React from 'react'
import './ListLikedFilm.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Button_filters from "../../components/button_filters/button_filters.jsx";
import Button_ok_no from "../../components/button_ok_no/button_ok_no.jsx";
import Block_photo_header from "../../components/block_photo_header/block_photo_header.jsx";

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

                <Block_photo_header img="src/img/liked_photo_1.png" header="Оппенгеймер">
                    <Button_ok_no/>
                </Block_photo_header>

                <Block_photo_header img="src/img/liked_photo_2.png" header="Барби">
                    <Button_ok_no/>
                </Block_photo_header>

                <Block_photo_header img="src/img/liked_photo_3.png" header="Бедные - несчастные">
                    <Button_ok_no/>
                </Block_photo_header>

                <Block_photo_header img="src/img/liked_photo_4.png" header="Гарри Поттер и Философский камень">
                    <Button_ok_no/>
                </Block_photo_header>

            </div>

        </div>
    )
}

export default ListLikedFilm;