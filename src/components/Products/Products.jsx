import { Box } from '@chakra-ui/react';
import React from 'react';
import { Element } from 'react-scroll';
import HomeProductItem from '../../components/HomeProductItem/HomeProductItem';
import data from '../../home-data.json';

const Products = () => {
    return (
        <Box
            id="products"
            bgImage={
                process.env.PUBLIC_URL + '/assets/backgrounds/section-3.webp'
            }
            className={
                'bg-no-repeat bg-cover bg-top h-[180vh] md:h-[120vh] lg:h-[145vh] px-8 flex justify-center items-center '
            }
        >
            <Element
                name="Products"
                className="flex-col flex justify-center items-center pt-8 max-w-[1200px] mx-auto lg:pt-0 w-full"
            >
                <div className="top-container flex items-center justify-center w-full">
                    <div className="text-container .reveal w-full">
                        <h1
                            id="product-title"
                            className="text-center font-extrabold font-sans mb-4 text-gray-200 px-8 text-3xl md:text-5xl md:mb-12 mix-blend-difference"
                        >
                            <span className="block md:inline">Sản phẩm</span>
                            <span className="font-[billCorp] rounded-xl opacity-90 lg:mx-2 block md:inline-block mx-2 font-normal md:font-bold">
                                trananh
                                <span className="opacity-70 mx-0 px-0">
                                    premium
                                </span>
                            </span>
                            <span className="block md:inline">cung cấp</span>
                        </h1>
                    </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4 md:gap-x-6 md:gap-y-8 md:grid-cols-4 lg:mt-4">
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
        </Box>
    );
};

export default Products;
