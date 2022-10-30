import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';
import React from 'react';

import './index.scss';

const ProductPlan = ({ name, minPrice, description, pricing }) => {
    return (
        <div>
            <Accordion allowMultiple className="product-plans">
                <AccordionItem>
                    <AccordionButton className="product-plan">
                        <Box className="container">
                            <Box className="header">
                                <h2 className="name">{name}</h2>
                                <span className="price">
                                    từ {minPrice}.000đ
                                </span>
                            </Box>
                            <Box className="description">
                                {description.map((item, index) => (
                                    <h4
                                        key={index}
                                        className="description-item"
                                    >
                                        {item}
                                    </h4>
                                ))}
                            </Box>
                        </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {pricing.map((item, index) => (
                            <Box className="plan-option">
                                <span className="plan-option__duration">
                                    🌟 {item.duration} Tháng
                                </span>
                                <span className="plan-option__price">
                                    {item.price}.000đ
                                </span>
                            </Box>
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ProductPlan;
