import React from 'react';
import './block_acting.css'
import Inf_acting from "../inf_acting/inf_acting.jsx";
import Button_back from "../button_back/button_back.jsx";

const Block_acting = (props) => {
    return (
        <div className="acting">
            <div className="three_acting">
                <Inf_acting img="src/img/act_1.png" name="Киллиан Мерфи - актер" role="J.Robert Oppenheimer"/>
                <Inf_acting img="src/img/act_2.png" name="Эмили Блант - актриса" role="Kitty Oppenheimer"/>
                <Inf_acting img="src/img/act_3.png" name="Мэтт Дэймон - актёр" role="Leslie Groves"/>
            </div>
            <div className="three_acting">
                <Inf_acting img="src/img/act_4.png" name="Робер Дауни мл. - актёр" role="Lewis Strauss"/>
                <Inf_acting img="src/img/act_5.png" name="Флоренс Пью - актриса" role="Jean Tatlock"/>
                <Inf_acting img="src/img/act_6.png" name="Джош Хартнетт- актёр" role="Ernest Lawrence"/>
            </div>
            <div className="three_acting">
                <Inf_acting img="src/img/act_7.png" name="Дэвид Крамхолц- актёр" role="Isidor Rabi"/>
                <Inf_acting img="src/img/act_8.png" name="Бенни Сэфди - актёр" role="Edward Taller"/>
                <Inf_acting img="src/img/act_9.png" name="Олден Эренрайк - актёр" role="Senate Aide"/>
            </div>
            <a href={"/acting"} className="button_further" >
                <svg className="img_btn_further" width="27.000000" height="13.000000" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path id="Стрелка 1" d="M3.41 5.52L7.36 1.67C7.76 1.28 7.76 0.67 7.36 0.28C6.96 -0.1 6.34 -0.1 5.94 0.28L0.29 5.81C-0.1 6.19 -0.1 6.8 0.29 7.18L5.94 12.71C6.34 13.09 6.96 13.09 7.36 12.71C7.76 12.32 7.76 11.71 7.36 11.32L3.41 7.48L26 7.48C26.56 7.48 27 7.05 27 6.5C27 5.94 26.56 5.52 26 5.52L3.41 5.52Z" fillOpacity="1.000000" fillRule="evenodd"/>
                </svg>
            </a>


        </div>
    );
};

export default Block_acting;