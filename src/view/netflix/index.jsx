import { Box } from '@chakra-ui/react';
import React from 'react';
import Cover from '../../components/Cover/Cover';
import GroupBorder from '../../components/GroupBorder/GroupBorder';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import ProductPlan from '../../components/ProductPlan/ProductPlan';
import './index.scss';
import data from '../../data.json';

const Netflix = () => {
    const netflixData = data.netflix;
    return (
        <Box
            position="relative"
            paddingTop="100px"
            margin="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Cover imageSrc={netflixData.cover} />
            <ProductIntro
                title={netflixData.title}
                subtitle={netflixData.subtitle}
                description={netflixData.description}
                imageSrc={
                    process.env.PUBLIC_URL + 'assets/logo/' + netflixData.logo
                }
            />
            <GroupBorder>
                {netflixData.data.map((plan) => (
                    <ProductPlan
                        key={plan.name}
                        name={plan.name}
                        minPrice={plan.minPrice}
                        description={plan.description}
                        pricing={plan.pricing}
                        primaryColor={netflixData.primaryColor}
                    />
                ))}
            </GroupBorder>
        </Box>
    );
};

export default Netflix;
