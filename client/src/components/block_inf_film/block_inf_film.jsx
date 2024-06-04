import React from 'react';
import './block_inf_film.css'

const Block_inf_film = (props) => {
    return (
        <div className="inf">
            <div className="inf_header">{props.header}</div>
            <img src={props.img} className="inf_film_poster"/>
            <div className="inf_text_genre">{props.genres}
            </div>
            {props.text &&
                <div className="inf_contain_text_info_film">
                    <p className="inf_text_info_film">{props.text}
                    </p>
                </div>
            }

        </div>

    );
};

export default Block_inf_film;