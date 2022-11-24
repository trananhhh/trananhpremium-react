import { Box } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
    const dispatch = useDispatch();

    return (
        <Box
            bgImage={
                process.env.PUBLIC_URL + '/assets/backgrounds/section-1.webp'
            }
            className={
                'bg-no-repeat bg-cover bg-bottom h-screen flex-col pt-[24vh] flex lg:pt-0 lg:justify-center'
            }
        >
            <div className="flex flex-col justify-center ml-6 md:ml-10 lg:flex-row lg:mt-[-6rem]">
                <div className="ml-[-2rem] md:ml-[-3.5rem]">
                    <img
                        className="max-h-36 md:max-h-64"
                        src={
                            process.env.PUBLIC_URL + '/assets/logo-no-text.webp'
                        }
                        alt="logo-no-text"
                        draggable="false"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="font-[billCorp] text-[12vw] mb-5 flex overflow-hidden h-20 md:h-36 lg:text-8xl">
                        <h1>trananh</h1>
                        <div>
                            <ul
                                id="scroll-text-container"
                                className="list-product opacity-50 "
                            >
                                <li className="title-ext">netflix</li>
                                <li className="title-ext">spotify</li>
                                <li className="title-ext">youtube</li>
                                <li className="title-ext">grammarly</li>
                                <li className="title-ext">spotify</li>
                                <li className="title-ext">netflix</li>
                                <li className="title-ext">premium</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:mt-[-3rem]">
                        <span
                            className="bg-red-700 text-white p-4 px-6 rounded-full font-bold md:text-xl md:px-10 md:py-5 lg:text-lg lg:px-8 lg:py-4 hover:drop-shadow-[0px_4px_16px_rgba(0,0,0,0.3)] transition-all ease-in-out"
                            id="direct-btn"
                            onClick={() => dispatch(openModal())}
                        >
                            <FontAwesomeIcon
                                icon={faMessage}
                                className="mr-2"
                            />
                            Liên hệ ngay
                        </span>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Welcome;
