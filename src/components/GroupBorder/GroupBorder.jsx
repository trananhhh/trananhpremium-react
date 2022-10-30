import { Box } from '@chakra-ui/react';
import React from 'react';
import './index.scss';

export default function GroupBorder({ children }) {
    return <Box className="group-border">{children}</Box>;
}
