import React, {useEffect, useState} from 'react'
import './Main.css'
import Button_filters from "../../components/button_filters/button_filters.jsx";
import Button_profile from "../../components/button_profile/button_profile.jsx";
import Block_inf_film from "../../components/block_inf_film/block_inf_film.jsx";
import icon_film from "../../img/icon_film.svg";
import {Link} from "react-router-dom";
import {addFilm} from "../../action/film.js";
import axios from "axios";
import Inf_acting from "../../components/inf_acting/inf_acting.jsx";


export const Main = () => {
    const [activeDouble, setDouble] = useState(false);
    const [stateListForTwo,setStateListForTwo ] = useState(false);
    const [data, setData] = useState(["Загрузка..."]);
    const [secondUserId, setSecondUserId] = useState("")
    const [user, setUser] = useState(["Загрузка..."]);
    const [secondUser, setSecondUser] = useState("")
    const [secondUserLogin, setSecondUserLogin] = useState("")
    const [next, setNext] = useState(false)

    useEffect(() => {
        if (!activeDouble){
            axios.get('http://localhost:5000/film/getFilmForUser',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
                .then(function (response) {
                    console.log(response.data);
                    setData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        else{
            axios.post('http://localhost:5000/film/getFilmForTwoUsers',{secondUserId},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
                .then(function (response) {
                    console.log(response.data);
                    setData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        setNext(false);
    }, [activeDouble, next]);

    const clickHandler = (event) => {
        axios.get('http://localhost:5000/user/findUser/'+ secondUser,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then(function (response) {
                console.log(response.data);
                setUser(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    async function clickHandlerSave(user_id,user_log){
        setSecondUserId(user_id)
        setSecondUserLogin(user_log)
        setDouble(true)
        setStateListForTwo(false)
        console.log(user_id)

    }


    function chooseButtonHandler(filmId, isWanted, isWatch) {
        addFilm(filmId, isWanted, isWatch).then(() => {
            setNext(true);
        }).catch(() => {
            console.log('Ошибка');
        });
    }

    return (
        <div className="main">
            {stateListForTwo &&
                <div className="window_search">
                    <input type="search" placeholder="Логин" value = {secondUser} onChange={(event)=> setSecondUser(event.target.value)}/>
                    <button className="btn_search" onClick={clickHandler}>Искать!</button>
                    <br/>
                    {user.map((inf) =>
                        <a className="text_search" onClick={() => clickHandlerSave(inf._id,inf.login)}>{inf.login}</a>
                    )}

                </div>
            }

            <div className="main_btn_block">
                <div className="main_btn_filter">
                    <Button_filters/>
                </div>
                <div className="checkbox_switch">
                    <button className={activeDouble ? "switch_btn_option active" : "switch_btn_option"}  onClick={() => {setDouble(false), setStateListForTwo(true)}}>
                        <svg className="img_option" width="20.000000" height="23.000000" viewBox="0 0 20 23"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="path"
                                  d="M3.28 19.7L1.23 15.25C0.69 14.08 1.12 12.7 2.22 12.05L4.99 10.41C5.48 10.13 6.08 10.13 6.55 10.43L6.9 10.65C7.25 10.87 7.71 10.58 7.66 10.16L6.85 3.33C6.81 2.93 6.94 2.53 7.23 2.25C7.54 1.94 8.04 1.91 8.39 2.19L8.58 2.34C8.87 2.57 9.06 2.9 9.12 3.27L10.24 10.21C10.26 10.35 10.38 10.45 10.52 10.45C10.67 10.45 10.79 10.34 10.8 10.19L11.47 3.33C11.51 2.93 11.71 2.56 12.02 2.3L12.13 2.22C12.5 1.92 13.03 1.95 13.37 2.29C13.63 2.55 13.78 2.91 13.78 3.28L13.78 14.41C13.78 14.83 14.26 15.06 14.59 14.8L16.28 13.45C17.11 12.79 18.22 13.22 18.91 13.67C19.13 13.81 19.16 14.11 19 14.32L15.03 19.7C15.03 19.7 13.28 21.7 9.28 21.7C5.28 21.7 3.61 20.37 3.28 19.7Z"
                                  fillOpacity="0" fillRule="nonzero"/>
                            <path id="path"
                                  d="M1.23 15.25C0.69 14.08 1.12 12.7 2.22 12.05L4.99 10.41C5.48 10.13 6.08 10.13 6.55 10.43L6.9 10.65C7.25 10.87 7.71 10.58 7.66 10.16L6.85 3.33C6.81 2.93 6.94 2.53 7.23 2.25C7.54 1.94 8.04 1.91 8.39 2.19L8.58 2.34C8.87 2.57 9.06 2.9 9.12 3.27L10.24 10.21C10.26 10.35 10.38 10.45 10.52 10.45C10.67 10.45 10.79 10.34 10.8 10.19L11.47 3.33C11.51 2.93 11.71 2.56 12.02 2.3L12.13 2.22C12.5 1.92 13.03 1.95 13.37 2.29C13.63 2.55 13.78 2.91 13.78 3.28L13.78 14.41C13.78 14.83 14.26 15.06 14.59 14.8L16.28 13.45C17.11 12.79 18.22 13.22 18.91 13.67C19.13 13.81 19.16 14.11 19 14.32L15.03 19.7C15.03 19.7 13.28 21.7 9.28 21.7C5.28 21.7 3.61 20.37 3.28 19.7L1.23 15.25Z"
                                  strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round"/>
                        </svg>
                    </button >
                    <button className={!activeDouble ? "switch_btn_option active" : "switch_btn_option"} onClick={() => setStateListForTwo(false)}>
                        <svg className="img_option" width="20.000000" height="23.000000" viewBox="0 0 20 23"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="path"
                                  d="M3.26 19.68L1.23 15.28C0.68 14.09 1.14 12.69 2.28 12.05L7.9 8.9C8.42 8.61 9.06 8.66 9.54 9.01L10.05 9.4C10.36 9.63 10.81 9.44 10.85 9.05L11.44 3.3C11.48 2.9 11.68 2.54 12 2.29L12.1 2.2C12.48 1.9 13.01 1.93 13.35 2.27C13.61 2.53 13.76 2.89 13.76 3.26L13.76 14.39C13.76 14.81 14.24 15.04 14.57 14.78L16.26 13.43C17.08 12.77 18.19 13.2 18.88 13.65C19.1 13.79 19.14 14.09 18.98 14.3L15.01 19.68C15.01 19.68 13.26 21.68 9.26 21.68C5.26 21.68 3.59 20.34 3.26 19.68Z"
                                  fillOpacity="0" fillRule="nonzero"/>
                            <path id="path"
                                  d="M1.23 15.28C0.68 14.09 1.14 12.69 2.28 12.05L7.9 8.9C8.42 8.61 9.06 8.66 9.54 9.01L10.05 9.4C10.36 9.63 10.81 9.44 10.85 9.05L11.44 3.3C11.48 2.9 11.68 2.54 12 2.29L12.1 2.2C12.48 1.9 13.01 1.93 13.35 2.27C13.61 2.53 13.76 2.89 13.76 3.26L13.76 14.39C13.76 14.81 14.24 15.04 14.57 14.78L16.26 13.43C17.08 12.77 18.19 13.2 18.88 13.65C19.1 13.79 19.14 14.09 18.98 14.3L15.01 19.68C15.01 19.68 13.26 21.68 9.26 21.68C5.26 21.68 3.59 20.34 3.26 19.68L1.23 15.28Z"
                                  strokeOpacity="1.000000" strokeWidth="1.500000"/>
                        </svg>
                    </button>
                </div>
                <div className="main_btn_profile">
                    <Button_profile/>
                </div>
            </div>
            {activeDouble &&
                <div className="login_friend">
                    {secondUserLogin}
                </div>
            }
            <div className="main_block">
                <a className="btn_no" onClick={() => chooseButtonHandler(data.id, false, false)}>
                    <svg width="40.000000" height="40.000000" viewBox="6 1 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path id="path"
                              d="M30.09 32.68L30.12 32.68C30.71 33.28 30.71 34.21 30.12 34.81C29.52 35.4 28.59 35.4 28 34.81L28 34.78L30.09 32.68ZM28 10.21L28 10.18C28.59 9.59 29.52 9.59 30.12 10.18C30.71 10.78 30.71 11.71 30.12 12.31L30.09 12.31L28 10.21Z"
                              fill="#000000" fillOpacity="0" fillRule="nonzero"/>
                        <path id="path" d="M29.06 33.75L17.81 22.5L29.06 11.25" stroke="#232424"
                              strokeOpacity="1.000000" strokeWidth="3.000000" strokeLinejoin="round"
                              strokeLinecap="round"/>
                    </svg>
                </a>

                <Link to={"/film/" + data.id}>
                    <a className="main_inf_film">
                        <Block_inf_film header={data.name} img={data.poster} genres={data.genres}/>
                    </a>
                </Link>
                <a className="btn_yes" onClick={() => chooseButtonHandler(data.id, true,false)}>
                    <svg width="40.000000" height="40.000000" viewBox="0 2 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path id="path"
                              d="M14.9 12.31L14.87 12.31C14.28 11.71 14.28 10.78 14.87 10.18C15.47 9.59 16.4 9.59 16.99 10.18L16.99 10.21L14.9 12.31ZM16.99 34.78L16.99 34.81C16.4 35.4 15.47 35.4 14.87 34.81C14.28 34.21 14.28 33.28 14.87 32.68L14.9 32.68L16.99 34.78Z"
                              fill="#000000" fillOpacity="0" fillRule="nonzero"/>
                        <path id="path" d="M15.93 11.25L27.18 22.5L15.93 33.75" stroke="#232424"
                              strokeOpacity="1.000000" strokeWidth="3.000000" strokeLinejoin="round"
                              strokeLinecap="round"/>
                    </svg>
                </a>
            </div>


            <Link to="/liked">
                <a className="main_btn_list_film">
                    <img src={icon_film} className="img_list_film" alt="Подобранные фильмы"/>
                </a>
            </Link>

        </div>
    );
};

export default Main;