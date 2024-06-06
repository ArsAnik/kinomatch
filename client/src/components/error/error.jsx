import React from 'react';
import './error.css'
import Button_back from "../button_back/button_back.jsx";

const Error = (props) => {

    return (
        <div>
            <div className="btn_back_error">
                <Button_back/>
            </div>
            <div className="error">

                <div className="name_error">{props.children}</div>
                <div className="text_error">Упс... Произошла ошибка. Попробуйте ещё раз или обратитесь в поддержку xxxx@gmail.com</div>
            </div>
        </div>


    );
};

export default Error;