import { Box } from '@chakra-ui/react';
import React from 'react';
import './index.scss';

export default function GroupBorder({ children }) {
    return (
        <Box
            className={
                'group-border flex-col lg:flex-row items-stretch md:mt-20 md:pt-8 md:pb-10'
            }
        >
            {children}
        </Box>
    );
}
