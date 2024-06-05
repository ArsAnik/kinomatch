import React, {useEffect} from 'react'
import {useRoutes} from "./routes.jsx";
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

function App() {
    const isAuth = localStorage.getItem('token');
    const isAdminAuth = localStorage.getItem('admin_token');

    const routes = useRoutes((isAuth !== null && isAuth !== ''), (isAdminAuth !== null && isAdminAuth !== ''))
    return (
        <Router>
            <div className="container">
                {routes}
            </div>
        </Router>

    )
}

export default App
