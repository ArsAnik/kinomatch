import React, {useEffect, useState} from 'react'
import './Acting.css'
import Button_back from "../../components/button_back/button_back.jsx";
import Inf_acting from "../../components/inf_acting/inf_acting.jsx";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export const Acting =() =>{
    const params = useParams();
    const filmId = params.id;

    const [data, setData] = useState(["Загрузка..."]);
    useEffect(() => {
        axios.get('http://localhost:5000/film/getFilmActing/' + filmId,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then(function (response) {
                console.log(response.data.acting);
                setData(response.data.acting);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return(
        <div className="acting_body">
            <div className="acting_btn_back">
                <Button_back/>
            </div>
            <div className="acting_block_all">
                {data.map((inf) =>
                    <Inf_acting photo={inf.photo} name={inf.name} role={inf.description}/>
                )}
                {/*<Inf_acting img="src/img/act_1.png" name="Киллиан Мерфи - актер" role="J.Robert Oppenheimer"/>*/}
                {/*<Inf_acting img="src/img/act_2.png" name="Эмили Блант - актриса" role="Kitty Oppenheimer"/>*/}
                {/*<Inf_acting img="src/img/act_3.png" name="Мэтт Дэймон - актёр" role="Leslie Groves"/>*/}
                {/*<Inf_acting img="src/img/act_4.png" name="Робер Дауни мл. - актёр" role="Lewis Strauss"/>*/}
                {/*<Inf_acting img="src/img/act_5.png" name="Флоренс Пью - актриса" role="Jean Tatlock"/>*/}
                {/*<Inf_acting img="src/img/act_6.png" name="Джош Хартнетт- актёр" role="Ernest Lawrence"/>*/}
                {/*<Inf_acting img="src/img/act_7.png" name="Дэвид Крамхолц- актёр" role="Isidor Rabi"/>*/}
                {/*<Inf_acting img="src/img/act_8.png" name="Бенни Сэфди - актёр" role="Edward Taller"/>*/}
                {/*<Inf_acting img="src/img/act_9.png" name="Олден Эренрайк - актёр" role="Senate Aide"/>*/}
            </div>
        </div>
    );
};

export default Acting;