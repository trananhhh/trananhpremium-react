import { useCallback, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import AppRouter from './router';
import 'animate.css';
import { GA4React } from 'ga-4-react';

const ga4react = new GA4React('G-N36MTPPYR4').initialize();

const trackPathForAnalytics = (data) => {
    const { path, search, title } = data;
    ga4react
        .then((ga) => {
            ga.pageview(path, search, title);
        })
        .catch((err) => console.error(`Analytics failed: ${err}`));
};

function App() {
    document.documentElement.style.setProperty('--animate-duration', '.75s');

    const { pathname, search } = useLocation();

    const analytics = useCallback(() => {
        trackPathForAnalytics({
            path: pathname,
            search: search,
            title: pathname.split('/')[1],
        });
    }, [pathname, search]);

    useEffect(() => {
        analytics();
    }, [analytics]);

    return (
        <div className="bg-[#f2f2f2] overflow-x-hidden" draggable={false}>
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
