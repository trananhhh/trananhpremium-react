import { Box } from '@chakra-ui/react';
import React from 'react';
import './index.scss';

export default function GroupBorder({ children }) {
    return (
        <Box
            maxWidth="1200px"
            justifyContent="center"
            className={
                'group-border flex-col lg:flex-row mt-8 md:mt-20 md:pt-8 md:pb-14 md:px-12 w-[93vw] md:w-fit'
            }
        >
            {children}
        </Box>
    );
}
