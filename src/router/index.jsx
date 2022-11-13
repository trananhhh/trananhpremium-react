import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../view/home';
import Netflix from '../view/netflix';
import Spotify from '../view/spotify';

export const RouteConfig = {
    home: `/`,
    spotify: '/spotify',
    netflix: '/netflix',
};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteConfig.home} element={<Home />} />
                <Route path={RouteConfig.spotify} element={<Spotify />} />
                <Route path={RouteConfig.netflix} element={<Netflix />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
