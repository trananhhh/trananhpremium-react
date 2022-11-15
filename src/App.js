import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './router';

function App() {
    return (
        <ChakraProvider>
            <div className="App bg-[#f2f2f2]" draggable={false}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </div>
        </ChakraProvider>
    );
}

export default App;
