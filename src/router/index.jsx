import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Commitments from '../components/Commitments/Commitments';
import FloatLogo from '../components/FloatLogo/FloatLogo';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import Members from '../components/Members/Members';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';
import Statistics from '../components/Statistics/Statistics';
import Home from '../view/home';
import Netflix from '../view/netflix';
import Spotify from '../view/spotify';

export const RouteConfig = {
    home: `/`,
    spotify: '/spotify',
    netflix: '/netflix',
};

const AppRouter = () => {
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        scroll.scrollToTop();
        console.log(location.pathname);
    }, [location]);

    useEffect(() => setLoaded(true), []);

    return (
        <div>
            {location.pathname !== '/' && <FloatLogo className="md:hidden" />}
            {!loaded && <Loading />}
            <NavBar />
            <Routes>
                <Route path={RouteConfig.home} element={<Home />} />
                <Route path={RouteConfig.spotify} element={<Spotify />} />
                <Route path={RouteConfig.netflix} element={<Netflix />} />
            </Routes>

            <Products />
            <Commitments />
            <Statistics />
            <Members />
            <Footer />
        </div>
    );
};

export default AppRouter;
