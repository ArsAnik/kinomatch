import React, {useEffect} from 'react'
import {useRoutes} from "./routes.jsx";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./action/user";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)

    const routes = useRoutes(isAuth)
    return (
        <Router>
            <div className="container">
                {routes}
            </div>
        </Router>

    )
}

export default App
