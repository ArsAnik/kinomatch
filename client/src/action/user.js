import axios from "axios";

export const registration = async(login,name,email,password) => {
    try{
        const response = await axios.post('http://localhost:5173/auth/registration',
            {login,name,email,password})
        alert(response.data.message)
    } catch (e) {
        alert(e)
    }


}