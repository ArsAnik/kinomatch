import axios from "axios";


export const addFilm = async (userId, filmId, filmState) => {
    await axios.post('http://localhost:5000/film/addWantToWatch',{userId,filmId,filmState},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        })
}