import React from 'react';
import { Box } from '@chakra-ui/react';
import Cover from '../../components/Cover/Cover';
import PolicyBox from '../../components/PolicyBox/PolicyBox';
import GroupBorder from '../../components/GroupBorder/GroupBorder';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import ProductPlan from '../../components/ProductPlan/ProductPlan';
import 'animate.css';

const DetailsPage = ({ productData }) => {
    return (
        <Box
            position="relative"
            paddingTop="15vh"
            margin="auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            paddingBottom="30vh"
            marginBottom="-28vh"
            // bgImage={
            //     process.env.PUBLIC_URL + '/assets/cover/' + productData.cover
            // }
            style={
                {
                    // filter: 'blur(36px)',
                }
            }
            className="backdrop-blur-2xl"
        >
            <Cover imageSrc={productData.cover} />
            <ProductIntro
                className="animate__animated animate__fadeInDown"
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
                        className="animate__animated animate__fadeIn"
                        key={plan.name}
                        name={plan.name}
                        minPrice={plan.minPrice}
                        description={plan.description}
                        pricing={plan.pricing}
                        primaryColor={productData.primaryColor}
                        isSale={plan.isSale}
                    />
                ))}
            </GroupBorder>
            <PolicyBox productData={productData} />
        </Box>
    );
};

export default DetailsPage;
