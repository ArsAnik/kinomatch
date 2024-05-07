import React from 'react'
    import './InfoFilm.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Button_profile from "../../components/button_profile/button_profile.jsx";
import Block_inf_film from "../../components/block_inf_film/block_inf_film.jsx";
import Block_acting from "../../components/block_acting/block_acting.jsx";

export const InfoFilm =() =>{
    return(
        <div className="inf_body">
            <div className="inf_btn_block">
                <div className="inf_back">
                    <Button_back/>
                </div>
                <div className="inf_profile">
                    <Button_profile/>
                </div>

            </div>
            <div className="inf_film">
                <Block_inf_film header="Оппенгеймер" img="src/img/poster_film.jpg" genres="биография, драма, США, 3 ч" text="История жизни американского физика-теоретика Роберта Оппенгеймера, который во времена Второй мировой войны руководил Манхэттенским проектом — секретными разработками ядерного оружия." />
                <div className="block_acting">
                    <Block_acting/>
                </div>
            </div>

        </div>
    );
};

export default InfoFilm;