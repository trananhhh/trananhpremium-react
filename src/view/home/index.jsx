import React from 'react';

import AboutUs from './components/AboutUs';
import Welcome from './components/Welcome';

function Home() {
    return (
        <div>
            <Welcome />
            <AboutUs />
        </div>
    );
}

export default Home;
