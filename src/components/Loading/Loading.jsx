import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
    return (
        <Box className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-slate-100 flex items-center justify-center flex-col">
            <Image
                className="h-32 animate-bounce mb-4"
                src={process.env.PUBLIC_URL + '/assets/logo-no-text.png'}
            />
            loading
        </Box>
    );
};

export default Loading;
