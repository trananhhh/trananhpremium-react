import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';

function App() {
    return (
        <div className="bg-[#f2f2f2] overflow-x-hidden" draggable={false}>
            <ChakraProvider>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </ChakraProvider>
        </div>
    );
}

export default App;
