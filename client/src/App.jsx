import React, {useEffect} from 'react'
import {useRoutes} from "./routes.jsx";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
    const isAuth = localStorage.getItem('token');
    const data = localStorage.getItem('data');
    console.log(data.user)

    const routes = useRoutes(isAuth !== null && isAuth !== '')
    return (
        <Router>
            <div className="container">
                {routes}
            </div>
        </Router>

    )
}

export default App
