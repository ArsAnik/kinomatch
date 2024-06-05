import axios from "axios";


export const addFilm = async (userId, filmId, filmState) => {
    await axios.post('http://localhost:5000/film/addWantToWatch',{userId,filmId,filmState},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            location.reload()
        })
        .catch(function (error) {
            console.log(error);
        })
}

export const addWatchedFilm = async (userId, filmId) => {
    await axios.post('http://localhost:5000/film/addWantToWatch',{userId,filmId,filmState},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            location.reload()
        })
        .catch(function (error) {
            console.log(error);
        })
}

export const deleteFilm = async (userId, filmId) => {
    await axios.post('http://localhost:5000/film/addWantToWatch',{userId,filmId,filmState},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
            location.reload()
        })
        .catch(function (error) {
            console.log(error);
        })
}

