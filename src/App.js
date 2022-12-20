import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import AppRouter from './router';
import ReactGA from 'react-ga4';
import 'animate.css';
import Snowfall from 'react-snowfall';

function App() {
    document.documentElement.style.setProperty('--animate-duration', '.75s');

    ReactGA.initialize('G-N36MTPPYR4');
    ReactGA.send('pageview');

    return (
        <div className="bg-[#f2f2f2] overflow-x-hidden" draggable={false}>
            <Snowfall
                style={{
                    color: '#333',
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    zIndex: '999',
                }}
            />
            <Provider store={store}>
                <ChakraProvider>
                    <BrowserRouter>
                        <AppRouter />
                    </BrowserRouter>
                </ChakraProvider>
            </Provider>
        </div>
    );
}

export default App;
