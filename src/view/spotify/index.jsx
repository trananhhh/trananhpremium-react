import { Box } from '@chakra-ui/react';
import React from 'react';
import Cover from '../../components/Cover/Cover';
import GroupBorder from '../../components/GroupBorder/GroupBorder';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import ProductPlan from '../../components/ProductPlan/ProductPlan';
import data from '../../data.json';
import './index.scss';

const Spotify = () => {
    const spotifyData = data.spotify;
    return (
        <Box
            position="relative"
            paddingTop="100px"
            margin="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Cover imageSrc={spotifyData.cover} />
            <ProductIntro
                title={spotifyData.title}
                subtitle={spotifyData.subtitle}
                description={spotifyData.description}
                imageSrc={
                    process.env.PUBLIC_URL + 'assets/logo/' + spotifyData.logo
                }
            />
            <GroupBorder>
                {spotifyData.data.map((plan) => (
                    <ProductPlan
                        key={plan.name}
                        name={plan.name}
                        minPrice={plan.minPrice}
                        description={plan.description}
                        pricing={plan.pricing}
                        primaryColor={spotifyData.primaryColor}
                    />
                ))}
            </GroupBorder>
        </Box>
    );
};

export default Spotify;
