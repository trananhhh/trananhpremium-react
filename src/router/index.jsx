import {
    Button,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Commitments from '../components/Commitments/Commitments';
import FloatLogo from '../components/FloatLogo/FloatLogo';
import Footer from '../components/Footer/Footer';
// import Loading from '../components/Loading/Loading';
import Members from '../components/Members/Members';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';
import Statistics from '../components/Statistics/Statistics';
import Home from '../view/home';
import Netflix from '../view/netflix';
import Spotify from '../view/spotify';

// import { FaFacebook, FaTwitter } from 'react-icons/fa';

export const RouteConfig = {
    home: `/`,
    spotify: '/spotify',
    netflix: '/netflix',
};

const AppRouter = () => {
    // const [loaded, setLoaded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        scroll.scrollToTop();
        // console.log(location.pathname);
    }, [location]);

    const { isOpen, onOpen, onClose } = useDisclosure();

    // useEffect(() => setLoaded(true), []);

    return (
        <div className="overflow-x-hidden">
            {location.pathname !== '/' && <FloatLogo className="md:hidden" />}
            {/* {!loaded && <Loading />} */}
            <NavBar onOpenModal={onOpen} />
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

            <Modal className="ml-[-8px]" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <i className="fa-regular fa-circle-user mr-2"></i>Các
                        kênh hỗ trợ
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack>
                            <Button
                                colorScheme="facebook"
                                leftIcon={
                                    <i className="fa-brands fa-facebook"></i>
                                }
                            >
                                Facebook
                            </Button>
                            <Button
                                colorScheme="twitter"
                                leftIcon={
                                    <i className="fa-brands fa-instagram"></i>
                                }
                            >
                                Twitter
                            </Button>
                        </HStack>
                    </ModalBody>

                    <ModalFooter>
                        {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default AppRouter;
