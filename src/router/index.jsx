import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Commitments from '../components/Commitments/Commitments';
import ContactModal from '../components/ContactModal/ContactModal';
import FloatLogo from '../components/FloatLogo/FloatLogo';
import Footer from '../components/Footer/Footer';
// import Loading from '../components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import Members from '../components/Members/Members';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';
import Statistics from '../components/Statistics/Statistics';
import DetailsPage from '../view/details';
import Home from '../view/home';

import data from '../data.json';
import { closeModal } from '../redux/modalSlice';

const AppRouter = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [renderRoute, setRenderRoute] = useState([]);
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        scroll.scrollToTop();
    }, [location]);

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

    console.log(renderRoute);

    return (
        <div className="overflow-x-hidden">
            {location.pathname !== '/' && <FloatLogo className="md:hidden" />}
            {/* {!loaded && <Loading />} */}
            <NavBar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                {renderRoute}
            </Routes>

            <Products />
            <Commitments />
            <Statistics />
            <Members />
            <Footer />

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => dispatch(closeModal())}
            />
        </div>
    );
};

export default AppRouter;
