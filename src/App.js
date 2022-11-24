import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import AppRouter from './router';
import 'animate.css';

function App() {
    document.documentElement.style.setProperty('--animate-duration', '.75s');

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
