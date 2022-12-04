import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { openModal } from '../../redux/modalSlice';
import { useDispatch } from 'react-redux';

import './index.scss';

const ProductPlan = ({
    name,
    minPrice,
    description,
    pricing,
    primaryColor,
    ...props
}) => {
    const dispatch = useDispatch();
    return (
        <div className="md:mx-4">
            <Accordion
                allowMultiple
                allowToggle
                className={'product-plans  ' + props.className ?? ''}
            >
                <AccordionItem>
                    <AccordionButton
                        className={
                            'product-plan md:min-w-[360px] ' +
                            (props.isSale ? 'sale' : '')
                        }
                        style={{ '--props-color': 'var(' + primaryColor + ')' }}
                    >
                        <Box className="container bg-white">
                            <Box className="header">
                                <span className="name font-bold">{name}</span>
                                <span className="price">
                                    {minPrice}.000đ /{' '}
                                    <span className="font-normal">tháng</span>
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
                            <Text className="text-center italic mt-4 opacity-80">
                                Bấm vào để xem chi tiết
                            </Text>
                        </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {pricing.map((item, index) => (
                            <Box
                                onClick={() => dispatch(openModal())}
                                className="plan-option cursor-pointer"
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
