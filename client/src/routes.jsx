import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {UserProfile} from "./pages/UserProfile";
import {Main} from "./pages/Main";
import {UserAuthorization} from "./pages/UserAuthorization";
import {UserRegistration} from "./pages/UserRegistration";
import {UserSettings} from "./pages/UserSettings.jsx";


export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Routes>
                <Route path="/profile" element={<UserProfile />}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/authorization" element={<UserAuthorization />}/>
            <Route path="/registration" element={<UserRegistration />}/>
            <Route path="/profile" element={<UserProfile />}/>
            <Route path="/settings" element={<UserSettings />}/>
        </Routes>
    )

}