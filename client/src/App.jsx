import React from 'react'
import {useRoutes} from "./routes.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
    const routes = useRoutes(false)
    return (
        <Router>
            <div className="container">
                {routes}
            </div>
        </Router>

    )
}

export default App
