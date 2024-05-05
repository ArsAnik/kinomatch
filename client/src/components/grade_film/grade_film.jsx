import React from 'react';
import './grade_film.css'

const Grade_film = (props) => {
    return (
        <span className="grade">{props.grade}</span>
    );
};

export default Grade_film;