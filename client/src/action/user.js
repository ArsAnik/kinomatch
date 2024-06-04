import axios from "axios";
import {setUser} from "../reducers/userReducer.js";
import {useSelector} from "react-redux";


export const registration = async(email, name, login, password) => {
    try{
        const response = await axios.post('http://localhost:5000/auth/registration',
            {email, name, login, password})
        window.location.href = '/authorization';
    } catch (e) {
        console.log(e.response.data.message)
    }
}


export const authorization = (login, password) => {
    return async dispatch => {
        try{
            const response = await axios.post('http://localhost:5000/auth/login',
                {login, password})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data.token)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

}

export const auth = () => {
    return async dispatch => {
        try{
            const response = await axios.get('http://localhost:5000/auth/auth',  {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }

}


export const updateUser = (name) => {
    return async dispatch => {
        try{
            const response = await axios.patch('http://localhost:5000/user/updateUser',
                {name},
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            dispatch(setUser(response.data.user))
        } catch (e) {
            console.log(e)
        }
    }

}

export const updateAvatar = (id,file) => {
    return async dispatch => {
        try{
            let formData = new FormData()
            formData.append('file', file)
            const response = await axios.post('http://localhost:5000/user/changeUserAvatar',
                formData,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
            dispatch(setUser(response.data.user))
        } catch (e) {
            console.log(e)
        }
    }

}
