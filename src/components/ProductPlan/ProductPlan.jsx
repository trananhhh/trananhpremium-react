import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';
import React from 'react';

import './index.scss';

const ProductPlan = ({
    name,
    minPrice,
    description,
    pricing,
    primaryColor,
}) => {
    return (
        <div>
            <Accordion allowMultiple className="product-plans">
                <AccordionItem>
                    <AccordionButton
                        className="product-plan"
                        style={{ '--props-color': 'var(' + primaryColor + ')' }}
                    >
                        <Box className="container">
                            <Box className="header">
                                <h2 className="name">{name}</h2>
                                <span className="price">{minPrice}.000đ</span>
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
                            <Box
                                className="plan-option"
                                key={index}
                                style={{
                                    '--props-color':
                                        'var(' + primaryColor + ')',
                                }}
                            >
                                <span className="plan-option__duration">
                                    🌟 {item.duration} Tháng
                                </span>
                                {item.oldPrice ? (
                                    <div className="plan-option__price-container">
                                        <span className="plan-option__price">
                                            {item.price}.000đ
                                        </span>
                                        <p className="old-price">
                                            <b>
                                                <s>{item.oldPrice}.000đ</s>
                                            </b>
                                        </p>
                                    </div>
                                ) : (
                                    <span className="plan-option__price">
                                        {item.price}.000đ
                                    </span>
                                )}
                            </Box>
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default ProductPlan;
