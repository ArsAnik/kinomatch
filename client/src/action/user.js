import axios from "axios";
import {useRoutes} from "../routes.jsx";

export const registration = async(email, name, login, password) => {
    try{
        const response = await axios.post('http://localhost:5000/auth/registration',
            {email, name, login, password})
        window.location.href = '/authorization';
    } catch (e) {
        return(e.response.data.message)
    }
}


export const authorization = async(login, password) => {
    try{
            await axios.post('http://localhost:5000/auth/login', {login, password})
                .then(function (response){

                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user' , JSON.stringify(response.data.user))
                window.location.href = '/';
        })
    } catch (e) {
        return(e.response.data.message)
    }

}



export const logout = () => {
    try{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        window.location.href = '/authorization';
    } catch (e) {
        console.log(e)
    }
}


export const auth = () => {
    try{
            axios.get('http://localhost:5000/auth/auth',  {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
                .then(function (response){
            localStorage.setItem('user' , response.data.user)
            localStorage.setItem('token', response.data.token)
        })
        } catch (e) {
            localStorage.removeItem('token')
        }
}



export const updateUser = (name) => {
    try{
        axios.patch('http://localhost:5000/user/updateUser', {name}, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then(function (response){
                localStorage.setItem('user' , JSON.stringify(response.data.user))
            })
        } catch (e) {
            console.log(e)
        }
}


export const updateAvatar = (id,file) => {
    try{
        let formData = new FormData()
        formData.append('file', file)
        axios.post('http://localhost:5000/user/changeUserAvatar', formData, {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then(function (response){
                localStorage.setItem('user' , JSON.stringify(response.data.user))
            })
        } catch (e) {
            console.log(e)
    }
}
