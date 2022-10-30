import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import './index.scss';

const ProductIntro = ({ title, subtitle, description, imageSrc }) => {
    return (
        <Box className="product-intro">
            <Box className="header">
                <Box className="header__text">
                    <h2 className="title">{title}</h2>
                    <span className="sub-title">{subtitle}</span>
                </Box>
                <Box className="header__logo">
                    <Image
                        src={process.env.PUBLIC_URL + imageSrc}
                        alt=""
                        objectFit="cover"
                    />
                </Box>
            </Box>
            <Box className="description">
                <p>{description}</p>
            </Box>
        </Box>
    );
};

export default ProductIntro;
