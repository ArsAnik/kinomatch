import axios from "axios";


export const addFilm = async (filmId, isWanted, isWatch) => {
    await axios.post('http://localhost:5000/film/addFilm',{filmId,isWanted,isWatch},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            return 0;
        })
        .catch(function (error) {
            console.log(error);
        })
}

export const editFilm = async (filmId, isWanted, isWatch) => {
    await axios.post('http://localhost:5000/film/editFilmStatus',{filmId,isWanted,isWatch},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            return 0;
        })
        .catch(function (error) {
            console.log(error);
        })
}


export const deleteFilm = async (filmId, isWanted, isWatch) => {
    await axios.post('http://localhost:5000/film/editFilmStatus',{filmId,isWanted,isWatch},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            return 0;
        })
        .catch(function (error) {
            console.log(error);
        })
}

export const MainForTwoUser = async (secondUserId) => {
    let res
    axios.post('http://localhost:5000/film/getFilmForTwoUsers',{secondUserId},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            console.log(response.data);
            res = response.data
        })
        .catch(function (error) {
            console.log(error);
        })
    return res
}
