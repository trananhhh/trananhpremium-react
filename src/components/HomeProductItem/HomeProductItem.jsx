import {
    Stat,
    StatArrow,
    StatHelpText,
    StatLabel,
    StatNumber,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeProductItem({
    insta,
    route,
    image,
    productName,
    price,
    oldPrice,
}) {
    const navigate = useNavigate();

    return (
        <div
            className="product-item cursor-pointer text-gray-200 drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]"
            onClick={() => {
                if (route != null && route !== undefined) navigate(route);
                else
                    window
                        .open(`https://www.instagram.com/${insta}/`, '_blank')
                        .focus();
            }}
        >
            <div className="rounded-xl hover:drop-shadow-xl hover:shadow-2xl hover:opacity-80 transition overflow-hidden mb-2">
                <img
                    src={process.env.PUBLIC_URL + '/assets/logos/' + image}
                    alt={image}
                />
            </div>
            <Stat>
                <StatLabel>{productName}</StatLabel>
                <StatNumber className="mt-[-4px]">{price}.000đ</StatNumber>
                <StatHelpText>
                    <del className="opacity-50">{oldPrice}.000đ</del>
                    <StatArrow type="decrease" color="green.300" />
                    {Math.round(((oldPrice - price) / oldPrice) * 100)}%
                </StatHelpText>
            </Stat>
        </div>
    );
}
