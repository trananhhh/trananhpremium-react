import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
                {/* <Route path={RouteConfig.products} element={<Products />} /> */}
                <Route path={RouteConfig.spotify} element={<Spotify />} />
                <Route path={RouteConfig.netflix} element={<Netflix />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
