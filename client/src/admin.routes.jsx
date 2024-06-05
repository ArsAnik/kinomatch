import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {AdminLogin} from "./pages/Admin/Login/AdminLogin.jsx";
import {AdminMain} from "./pages/Admin/Main/AdminMain.jsx";
import {AdminFilms} from "./pages/Admin/Films/AdminFilms.jsx";
import {AdminUsers} from "./pages/Admin/Users/AdminUsers.jsx";
import Error from "./components/error/error.jsx";


export const useAdminRoutes = isAdminAuthenticated => {

    if(isAdminAuthenticated){
        return(
            <Routes>
                <Route path="/admin/" element={<AdminMain />}/>
                <Route path="/admin/films" element={<AdminFilms />}/>
                <Route path="/admin/users" element={<AdminUsers />}/>
                <Route path="/errors" element={<Error name="404" />}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/admin/login" replace/>} />
            <Route path="/admin/login" element={<AdminLogin />}/>
        </Routes>
    )

}