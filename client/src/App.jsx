import React from 'react'
import 'materialize-css'
import {useRoutes} from "./routes.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
