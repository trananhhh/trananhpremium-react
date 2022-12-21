import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import Commitments from '../components/Commitments/Commitments';
import ContactModal from '../components/ContactModal/ContactModal';
import FloatLogo from '../components/FloatLogo/FloatLogo';
import Footer from '../components/Footer/Footer';
import Members from '../components/Members/Members';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';
import Statistics from '../components/Statistics/Statistics';
import DetailsPage from '../view/details';
import Home from '../view/home';

import { Helmet } from 'react-helmet';
import data from '../data.json';
import { closeModal } from '../redux/modalSlice';
import CMCSecretSanta from '../view/promotion/CMCSecretSanta';
import FreeNetflix from '../view/promotion/FreeNetflix';
import UpdateFreeNetflix from '../view/promotion/UpdateFreeNetflix';

const AppRouter = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [renderRoute, setRenderRoute] = useState([]);
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
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

    return (
        <div className="overflow-x-hidden">
            {location.pathname !== '/' && <FloatLogo className="md:hidden" />}
            <Helmet>
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/thumbnail.png"
                />
                <title>𝗧𝗥𝗔𝗡𝗔𝗡𝗛𝗣𝗥𝗘𝗠𝗜𝗨𝗠 - Cung cấp tài khoản bản quyền</title>
            </Helmet>
            <NavBar />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route
                    path={'/collaboration/cmc-global/secret-santa'}
                    element={<CMCSecretSanta />}
                />
                <Route
                    path={'/admin/free-netflix'}
                    element={<UpdateFreeNetflix />}
                />
                <Route path={'/free-netflix'} element={<FreeNetflix />} />
                {renderRoute}
            </Routes>
            <Products home={location.pathname === '/'} />
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
