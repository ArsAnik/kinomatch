import React from 'react';
import './block_photo_header.css'
import Button_estimate from "../button_estimate/button_estimate.jsx";
import {Link} from "react-router-dom";

const Block_photo_header = (props) => {
    return (
        <Link to={"/film/" + props.id}>
            <div className="film_block">
                <img src={props.img} className="poster_film"/>

                <div className="choice_block">
                    <div className="header_film">{props.header}</div>
                    {props.children}
                </div>
            </div>
        </Link>

    );
};

export default Block_photo_header;