import React from 'react'
import {useRoutes} from "./routes.jsx";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import {useSelector} from "react-redux";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    console.log(isAuth)
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
