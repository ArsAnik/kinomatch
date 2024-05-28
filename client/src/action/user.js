import axios from "axios";
import {setUser} from "../reducers/userReducer.js";

export const registration = async(email, name, login, password) => {
    try{
        const response = await axios.post('http://localhost:5000/auth/registration',
            {email, name, login, password})
        alert(response.data.message)
    } catch (e) {
        alert(e)
    }
}


export const authorization = (login, password) => {
    return async dispatch => {
        try{
            const response = await axios.post('http://localhost:5000/auth/login',
                {login, password})
            dispatch(setUser(response.data.user))
            //localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (e) {
            alert(e)
        }
    }

}
