import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { RouteConfig } from '../../router';

const NavBar = ({ onOpenModal }) => {
    const navigate = useNavigate();

    return (
        <div
            id="navbar"
            className="fixed h-24 md:top-0 bottom-0 inset-x-4 mx-auto items-center justify-center z-10 transition-all flex drop-shadow-[0_0_12px_rgba(0,0,0,0.3)]"
        >
            <div className="center rounded-full bg-white p-2 shadow-lg flex">
                <div className="cursor-default mx-auto h-10 self-center pr-1 hidden md:flex">
                    <Image
                        className="my-[1px]"
                        src={
                            process.env.PUBLIC_URL + '/assets/logo-no-text.png'
                        }
                    />
                    <Image
                        className="mt-1"
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/trananhpremium.png'
                        }
                    />
                </div>
                <div
                    onClick={() => {
                        navigate(RouteConfig.home);
                    }}
                    className="flex text-gray-600 font-semibold text-md hover:bg-[#e5e7eb] px-[16px] md:px-[12px] py-[12px] md:py-2 rounded-full transition  cursor-pointer"
                >
                    <i className="fa-solid text-2xl md:text-base fa-home"></i>
                    <span className="hidden md:inline-block ml-2">
                        Trang chủ
                    </span>
                </div>
                <Link
                    to="Products"
                    smooth={true}
                    className="font-sans flex text-gray-600 font-semibold text-md hover:bg-[#e5e7eb] px-[16px] md:px-[12px] py-[12px] md:py-2 rounded-full transition cursor-pointer"
                >
                    <i
                        className={
                            'fa-solid text-2xl md:text-base fa-cart-shopping'
                        }
                    ></i>
                    <span className="hidden md:inline-block ml-2">
                        Sản phẩm
                    </span>
                </Link>
                <Box
                    onClick={() => onOpenModal()}
                    className="flex text-gray-600 font-semibold text-md hover:bg-[#e5e7eb]  px-[16px] md:px-[12px] py-[12px] md:py-2 rounded-full transition cursor-pointer"
                >
                    <i className="fa-solid text-2xl md:text-base fa-message"></i>
                    <span className="hidden md:inline-block ml-2">Liên hệ</span>
                </Box>
            </div>
        </div>
    );
};

export default NavBar;
