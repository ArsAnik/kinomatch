import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {UserProfile} from "./pages/UserProfile/UserProfile.jsx";
import {Main} from "./pages/Main/Main.jsx";
import {UserAuthorization} from "./pages/UserAuthorization/UserAuthorization.jsx";
import {UserRegistration} from "./pages/UserRegistration/UserRegistration.jsx";
import {UserSettings} from "./pages/UserSettings/UserSettings.jsx";
import ListLikedFilm from "./pages/ListLikedFilm/ListLikedFilm.jsx";
import ListWatchedFilm from "./pages/ListWatchedFilm/ListWatchedFilm.jsx";
import InfoFilm from "./pages/InfoFilm/InfoFilm.jsx";
import Acting from "./pages/Acting/Acting.jsx";
import Filters from "./pages/Filters/Filters.jsx";
import Error from "./components/error/error.jsx";


export const useRoutes = isAuthenticated => {

    console.log(isAuthenticated);

    if(isAuthenticated){
        return(
            <Routes>
                <Route path="/authorization" element={<Navigate to="/" replace/>} />
                <Route path="/" element={<Main />}/>
                <Route path="/settings" element={<UserSettings />}/>
                <Route path="/liked" element={<ListLikedFilm />}/>
                <Route path="/watched" element={<ListWatchedFilm />}/>
                <Route path="/film/:id" element={<InfoFilm />}/>
                <Route path="/acting/:id" element={<Acting />}/>
                <Route path="/profile" element={<UserProfile />}/>
                <Route path="/filters" element={<Filters />}/>
                <Route path="/errors" element={<Error name="404" />}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/authorization" replace/>} />
            <Route path="/authorization" element={<UserAuthorization />}/>
            <Route path="/registration" element={<UserRegistration />}/>
            <Route path="/errors" element={<Error name="404" />}/>
        </Routes>
    )

}