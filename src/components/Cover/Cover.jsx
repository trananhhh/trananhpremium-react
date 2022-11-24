import { Box } from '@chakra-ui/react';
import React from 'react';
import './index.scss';

const Cover = ({ imageSrc, ...props }) => {
    return (
        <Box
            className={'product-cover ' + props.className ?? ''}
            backgroundImage={
                process.env.PUBLIC_URL + '/assets/cover/' + imageSrc
            }
        />
    );
};

export default Cover;
