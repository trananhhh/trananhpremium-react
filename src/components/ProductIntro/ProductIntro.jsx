import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import './index.scss';

const ProductIntro = ({ title, subtitle, description, imageSrc, ...props }) => {
    return (
        <Box className={'product-intro ' + props.className ?? ''}>
            <Box className="header relative">
                <Box className="header__text">
                    <h2 className="title">{title}</h2>
                    <span className="sub-title">{subtitle}</span>
                </Box>
                <Box className="header__logo max-h-fit md:absolute md:right-1 md:top-2 w-12">
                    <Image
                        className="max-h-12 max-w-12 md:max-h-28"
                        src={process.env.PUBLIC_URL + imageSrc}
                        alt=""
                        objectFit="cover"
                    />
                </Box>
            </Box>
            <Box className="description md:max-w-[75%]">
                <Text>{description}</Text>
            </Box>
        </Box>
    );
};

export default ProductIntro;
