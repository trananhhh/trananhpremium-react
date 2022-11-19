import React from 'react';
import { Element } from 'react-scroll';
import HomeProductItem from '../../components/HomeProductItem/HomeProductItem';
import data from '../../home-data.json';

const Products = () => {
    return (
        <div
            id="products"
            className={
                'section bg-[url(' +
                process.env.PUBLIC_URL +
                "'/assets/backgrounds/section-3.png')] bg-no-repeat bg-cover bg-top min-h-[140vh] md:min-h-[120vh] px-8 flex justify-center items-center lg:min-h-[145vh]"
            }
        >
            <Element
                name="Products"
                className="flex-col flex justify-center items-center pt-8 max-w-[1200px] mx-auto lg:pt-0 w-full"
            >
                <div className="top-container flex items-center justify-center w-full">
                    <div className="text-container .reveal w-full drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]">
                        <h1
                            id="product-title"
                            className="text-center font-bold mb-4 text-gray-200 px-8 text-3xl md:text-5xl md:mb-12"
                        >
                            <span className="block md:inline">Sản phẩm</span>
                            <p className="font-[billCorp] rounded-xl opacity-90 tracking-tight md:tracking-normal lg:mx-2">
                                trananh
                                <span className="opacity-70 mx-0 px-0">
                                    premium
                                </span>
                            </p>
                            <span className="block md:inline">cung cấp</span>
                        </h1>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 md:gap-x-6 md:gap-y-8 md:grid-cols-4 lg:mt-4">
                    {data.products.map((item) => (
                        <HomeProductItem
                            key={item.productName}
                            insta={item.insta}
                            route={item.route}
                            image={item.image}
                            productName={item.productName}
                            price={item.price}
                            oldPrice={item.oldPrice}
                        />
                    ))}
                </div>
            </Element>
        </div>
    );
};

export default Products;
