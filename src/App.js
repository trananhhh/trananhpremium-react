import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import AppRouter from './router';
import ReactGA from 'react-ga4';
import 'animate.css';

function App() {
    document.documentElement.style.setProperty('--animate-duration', '.75s');

    ReactGA.initialize('G-N36MTPPYR4');
    ReactGA.send('pageview');

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

/*
    {
        "name": "Gói Trial",
        "minPrice": 15,
        "description": [
            "👏🏻 Xóa các quảng cáo khỏi video",
            "👏🏻 Xem video và nghe nhạc ngoại tuyến",
            "👏🏻 Phát nhạc ngay cả khi khóa màn hình",
            "Điều kiện:",
            "- Chưa từng sử dụng trước đây",
            "- Cung cấp mật khẩu Google"
        ],
        "pricing": [{ "duration": 4, "price": 60 }]
    },
*/

export default App;
