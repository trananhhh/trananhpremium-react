import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import Commitments from '../components/Commitments/Commitments';
import ContactModal from '../components/ContactModal/ContactModal';
import FloatLogo from '../components/FloatLogo/FloatLogo';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';
import Members from '../components/Members/Members';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';
import Statistics from '../components/Statistics/Statistics';
// import { animateScroll as scroll } from 'react-scroll';
import DetailsPage from '../view/details';
import Home from '../view/home';

import data from '../data.json';
import { closeModal } from '../redux/modalSlice';
import { loading, setLoaded } from '../redux/uiSlice';
import FreeNetflix from '../view/promotion/FreeNetflix';
import UpdateFreeNetflix from '../view/promotion/UpdateFreeNetflix';

const AppRouter = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [renderRoute, setRenderRoute] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
    const isLoading = useSelector((state) => state.ui.isLoading);

    useEffect(() => {
        setTimeout(dispatch(loading()), 1000);
        dispatch(setLoaded());
        window.scrollTo(0, 0);
        // window.scrollTo(0, 500);
        // scroll.scrollToTop();
    }, [location, dispatch]);

    useEffect(() => {
        let tmpRoute = [];
        Object.keys(data).forEach((key) =>
            tmpRoute.push(
                <Route
                    key={key}
                    path={'/' + key}
                    element={<DetailsPage productData={data[key]} />}
                />
            )
        );
        setRenderRoute(tmpRoute);
    }, []);

    return (
        <div className="overflow-x-hidden">
            {location.pathname !== '/' && <FloatLogo className="md:hidden" />}
            {isLoading && <Loading />}
            <NavBar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route
                    path={'/admin/free-netflix'}
                    element={<UpdateFreeNetflix />}
                />
                <Route path={'/free-netflix'} element={<FreeNetflix />} />
                {renderRoute}
            </Routes>
            <Products />
            {(location.pathname === '/' ||
                location.pathname === '/free-netflix') && (
                <>
                    <Commitments />
                    <Statistics />
                    <Members />
                </>
            )}
            <Footer />
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => dispatch(closeModal())}
            />
        </div>
    );
};

export default AppRouter;
