import React, { useEffect, useState } from 'react';

import AboutUs from './components/AboutUs';
import Commitments from './components/Commitments';
import Footer from './components/Footer';
import Members from './components/Members';
import Products from './components/Products';
import ScrollDownBtn from './components/ScrollDownBtn';
import Statistics from './components/Statistics';
import Welcome from './components/Welcome';
import { animateScroll as scroll } from 'react-scroll';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import NavBar from '../../components/NavBar/NavBar';
import ReactVisibilitySensor from 'react-visibility-sensor';

function Home() {
    const [currentSection, setCurrentSection] = useState('Welcome');

    const [scrollPosition, setScrollPosition] = useState(0);
    const [onTop, setOnTop] = useState(true);

    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);

        if (scrollPosition > 100) {
            return setOnTop(false);
        } else {
            return setOnTop(true);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton);
    });

    useEffect(() => {
        console.log(currentSection);
    }, [currentSection]);

    return (
        <div className="bg-[#f2f2f2]">
            <NavBar />
            {/* <div className="transition-all" draggable="false">
                <div className="scroll-down-container fixed bottom-8 w-full flex justify-center z-10"> */}
            {/* {!onTop && (
                        <ScrollToTopBtn onClick={() => scroll.scrollToTop()} />
                    )} */}
            {/* {onTop && (
                        <ScrollDownBtn onClick={() => scroll.scrollMore(500)} />
                    )} */}
            {/* </div>
            </div> */}
            <div>
                <ReactVisibilitySensor
                    onChange={() => setCurrentSection('Welcome')}
                >
                    <Welcome />
                </ReactVisibilitySensor>

                <ReactVisibilitySensor
                    onChange={() => setCurrentSection('AboutUs')}
                >
                    <AboutUs />
                </ReactVisibilitySensor>

                <ReactVisibilitySensor
                    onChange={() => setCurrentSection('Products')}
                >
                    <Products />
                </ReactVisibilitySensor>

                <ReactVisibilitySensor onChange={() => setCurrentSection('2')}>
                    <Statistics />
                </ReactVisibilitySensor>

                <ReactVisibilitySensor onChange={() => setCurrentSection('3')}>
                    <Members />
                </ReactVisibilitySensor>

                <ReactVisibilitySensor onChange={() => setCurrentSection('4')}>
                    <Commitments />
                </ReactVisibilitySensor>
            </div>
            <ReactVisibilitySensor onChange={() => setCurrentSection('Footer')}>
                <Footer />
            </ReactVisibilitySensor>
        </div>
    );
}

export default Home;
