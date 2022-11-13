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
            className="product-item cursor-pointer text-gray-200"
            onClick={() => {
                if (route != null && route !== undefined) navigate(route);
                else
                    window
                        .open(`https://www.instagram.com/${insta}/`, '_blank')
                        .focus();
            }}
        >
            <div className="rounded-xl hover:drop-shadow-xl hover:shadow-2xl hover:opacity-80 transition overflow-hidden">
                <img
                    src={process.env.PUBLIC_URL + '/assets/logos/' + image}
                    alt={image}
                />
            </div>
            <h3 className="font-bold mt-2 mb text-lg mb-1 md:text-2xl md:my-4 lg:my-2">
                {productName}
            </h3>
            <div className="font-bold text-sm md:text-2xl lg:text-xl">
                <span className="product-item__price-main">{price}.000đ</span>
                <span className="bg-orange-400 py-1 px-2 rounded md:text-lg md:rounded-xl lg:rounded-lg text-right ml-2">
                    <i className="fa-solid fa-minus"></i>
                    {Math.round(((oldPrice - price) / oldPrice) * 100)}%
                </span>
                <br />
                <del className="opacity-50">{oldPrice}.000đ</del>
            </div>
        </div>
    );
}
