import { Box } from '@chakra-ui/react';
import React from 'react';

const data = [
    { title: 'Giới thiệu', icon: 'fa-house', section: 'welcome' },
    { title: 'Sản phẩm', icon: 'fa-cart-shopping', section: 'products' },
    { title: 'Thành viên', icon: ' fa-user', section: 'section4' },
    { title: 'Cam kết', icon: 'fa-shield', section: 'section6' },
];

function NavBarHome() {
    return (
        <div
            id="navbar"
            className="fixed h-24 md:top-0 bottom-0 inset-x-4 mx-auto items-center justify-center z-10 transition-all flex drop-shadow-[0_0_2px_rgba(0,0,5px,0.8)]"
        >
            <div className="center rounded-full bg-white p-2 shadow-lg flex">
                {data.map((item) => (
                    <a
                        className="font-sans flex text-gray-600 font-semibold  text-md hover:bg-[#e5e7eb] hover:[#64748b] px-[16px] md:px-[12px] py-[12px] md:py-2 rounded-full transition"
                        href={`#${item.section}`}
                    >
                        <i
                            className={
                                'fa-solid text-2xl md:text-base ' + item.icon
                            }
                        ></i>
                        <span className="hidden md:inline-block ml-2">
                            {item.title}
                        </span>
                    </a>
                ))}
                <Box className=" font-sans flex bg-red-600 text-white font-semibold px-[16px] py-[12px] md:py-2 rounded-full transition shadow-lg ml-2">
                    <i className="fa-solid text-2xl md:text-base fa-message"></i>
                    <span className="hidden md:inline-block ml-2">Liên hệ</span>
                </Box>
            </div>
        </div>
        // https://relatablecode.com/how-to-make-a-navbar-with-react-scroll
    );
}

export default NavBarHome;
