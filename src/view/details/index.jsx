import React from 'react';
import { Box } from '@chakra-ui/react';
import Cover from '../../components/Cover/Cover';
import PolicyBox from '../../components/PolicyBox/PolicyBox';
import GroupBorder from '../../components/GroupBorder/GroupBorder';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import ProductPlan from '../../components/ProductPlan/ProductPlan';

const DetailsPage = ({ productData }) => {
    return (
        <Box
            position="relative"
            paddingTop="15vh"
            margin="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Cover imageSrc={productData.cover} />
            <ProductIntro
                title={productData.title}
                subtitle={productData.subtitle}
                description={productData.description}
                imageSrc={
                    process.env.PUBLIC_URL + 'assets/logo/' + productData.logo
                }
            />
            <GroupBorder>
                {productData.data.map((plan) => (
                    <ProductPlan
                        key={plan.name}
                        name={plan.name}
                        minPrice={plan.minPrice}
                        description={plan.description}
                        pricing={plan.pricing}
                        primaryColor={productData.primaryColor}
                    />
                ))}
            </GroupBorder>
            <PolicyBox productData={productData} />
        </Box>
    );
};

export default DetailsPage;
