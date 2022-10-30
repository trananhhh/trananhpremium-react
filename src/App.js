import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Spotify from './view/spotify';

function App() {
    return (
        <ChakraProvider>
            <div className="App" draggable={false}>
                <Spotify />
            </div>
        </ChakraProvider>
    );
}

export default App;
