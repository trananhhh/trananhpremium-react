import { Box } from '@chakra-ui/react';
import React from 'react';
import './index.scss';

const Cover = ({ imageSrc }) => {
    return (
        <Box
            className="product-cover"
            backgroundImage={
                process.env.PUBLIC_URL + '/assets/cover/spotify.png'
            }
        />
    );
};

export default Cover;
