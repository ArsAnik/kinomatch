import React from 'react';
import './inf_acting.css'

const Inf_acting = (props) => {
    return (
        <div className="inf_acting">
            <img src={props.photo} className="acting_photo"/>
            <div className="acting_text">{props.name}<br/>
                <div className="role_acting">
                    {props.role}
                </div>
            </div>
        </div>
    );
};

export default Inf_acting;