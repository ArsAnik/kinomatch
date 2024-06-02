import {useSelector} from "react-redux";

const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const UPDATE_USER = "UPDATE_USER"

const defaultState = {
    currentUser: [],
    isAuth: false
}


export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case UPDATE_USER:
            return {
                ...state,
                currentUser: [ ...state.currentUser.map(
                    user => user.id === action.payload.id
                    ? {...user, name: action.payload.name}
                    : {...user}
                )]
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}


export const setUser = user => ({type: SET_USER, payload: user})
export const UpdateUser = (payload) => ({type: UPDATE_USER, payload:payload})
export const logout = () => ({type: LOGOUT})