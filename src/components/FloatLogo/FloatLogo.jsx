import { Image } from '@chakra-ui/react';
import React from 'react';

const FloatLogo = ({ className }) => {
    return (
        <div
            draggable={false}
            className={
                'cursor-pointer w-fit fixed top-4 h-12 z-50 bg-white rounded-full drop-shadow-[0_0_12px_rgba(0,0,0,0.3)] flex inset-x-0 mx-auto ' +
                className
            }
        >
            <Image
                className="my-[4px]"
                src={process.env.PUBLIC_URL + '/assets/logo-no-text.webp'}
            />
            <Image
                className="mt-1 mr-3"
                src={process.env.PUBLIC_URL + '/assets/trananhpremium.webp'}
            />
        </div>
    );
};

export default FloatLogo;
