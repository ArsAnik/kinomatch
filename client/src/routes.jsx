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
import Block_acting from "./components/block_acting/block_acting.jsx";
import Acting from "./pages/Acting/Acting.jsx";
import Filters from "./pages/Filters/Filters.jsx";
import Error from "./components/error/error.jsx";


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
            <Route path="/liked" element={<ListLikedFilm />}/>
            <Route path="/watched" element={<ListWatchedFilm />}/>
            <Route path="/film" element={<InfoFilm />}/>
            <Route path="/acting" element={<Acting />}/>
            <Route path="/filters" element={<Filters />}/>
            <Route path="/errors" element={<Error name="404" />}/>
        </Routes>
    )

}