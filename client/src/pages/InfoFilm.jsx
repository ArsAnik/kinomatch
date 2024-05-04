import React from 'react'
    import './InfoFilm.css'
import Button_back from "../components/button_back/button_back.jsx";
import Button_profile from "../components/button_profile/button_profile.jsx";

export const InfoFilm =() =>{
    return(
        <div className="inf_body">
            <div className="inf_btn_block">
                <Button_back/>
                <Button_profile/>
            </div>

            <div className="inf">
                <div className="inf_header">ОППЕНГЕЙМЕР</div>
                <img src="src/img/poster_fil_oppen.jpg" className="inf_film_poster"/>
                <div className="inf_text_genre">
                    биография, драма, США, 3ч.
                </div>
                <div className="inf_contain_text_info_film">
                    <p className="inf_text_info_film">История жизни американского физика-теоретика Роберта Оппенгеймера, который
                        во времена Второй мировой войны
                        руководил Манхэттенским
                        проектом — секретными разработками
                        ядерного оружия.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default InfoFilm;