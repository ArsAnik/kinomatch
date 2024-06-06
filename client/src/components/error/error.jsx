import React from 'react';
import './error.css'

const Error = (props) => {

    return (
        <div className="error">
            <div className="name_error">{props.children}</div>
            <div className="text_error">Упс... Произошла ошибка. Попробуйте ещё раз или обратитесь в поддержку xxxx@gmail.com</div>
        </div>

    );
};

export default Error;