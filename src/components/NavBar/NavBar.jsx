import { Box, Image } from '@chakra-ui/react';
import {
    faCartShopping,
    faHome,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import { openModal } from '../../redux/modalSlice';
import { loading } from '../../redux/uiSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div
            id="navbar"
            className="fixed h-28 md:top-0 bottom-0 inset-x-4 mx-auto items-center justify-center z-50 transition-all flex drop-shadow-[0_0_12px_rgba(0,0,0,0.3)]"
        >
            <div className="rounded-full bg-white p-2 shadow-lg flex bg-opacity-90 max-w-xl">
                <div className="cursor-default h-10 hidden md:inline-flex mr-1 max-w-fit w-max">
                    <Image
                        className="my-[1px]"
                        src={
                            process.env.PUBLIC_URL + '/assets/logo-no-text.webp'
                        }
                    />
                    <Image
                        className="mt-1"
                        src={
                            process.env.PUBLIC_URL +
                            '/assets/trananhpremium.webp'
                        }
                    />
                </div>
                <div
                    onClick={() => {
                        dispatch(loading());
                        navigate('/');
                    }}
                    className="min-w-fit inline-flex text-gray-600 font-semibold text-md hover:bg-[#686868] hover:text-white px-[16px] md:px-[12px] py-[12px] md:py-2 rounded-full transition  cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={faHome}
                        className="text-2xl md:text-base py-1"
                    />
                    <span className="hidden md:inline-block ml-2">
                        Trang ch???
                    </span>
                </div>
                <Link
                    to="Products"
                    smooth={true}
                    className="min-w-fit font-sans inline-flex text-gray-600 font-semibold text-md  hover:bg-[#686868] hover:text-white px-[16px] md:px-[12px] py-[12px] md:py-2 rounded-full transition cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="text-2xl md:text-base py-1"
                    />
                    <span className="hidden md:inline-block ml-2">
                        S???n ph???m
                    </span>
                </Link>
                <Box
                    onClick={() => dispatch(openModal())}
                    className="min-w-fit inline-flex text-gray-600 font-semibold text-md  hover:bg-[#686868] hover:text-white px-[16px] md:px-[12px] py-[12px] md:py-2 rounded-full transition cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={faMessage}
                        className="text-2xl md:text-base py-1"
                    />
                    <span className="hidden md:inline-block ml-2">Li??n h???</span>
                </Box>
            </div>
        </div>
    );
};

export default NavBar;
