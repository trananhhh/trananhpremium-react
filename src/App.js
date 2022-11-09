import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from './router';

function App() {
    return (
        <ChakraProvider>
            <div className="App" draggable={false}>
                <AppRouter />
            </div>
        </ChakraProvider>
    );
}

export default App;
