import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    return (
        <div
            id="about-us"
            className="min-h-[75vh] md:min-h-[65vh] flex flex-col mt-[-4rem] max-w-[1200px] mx-auto lg:mt-8 lg:min-h-[50vh] px-8 lg:px-0"
        >
            <div className="grid lg:grid-cols-12 grid-flow-row-dense lg:gap-x-8">
                <span className="text-center font-bold font-sans mb-4 text-3xl lg:text-4xl md:text-5xl lg:order-2 lg:text-left lg:mb-4 lg:col-span-5 bg z-20 md:ml-8">
                    Về
                    <span className="font-[billCorp] opacity-90 mx-2 font-normal md:font-bold">
                        trananh
                        <span className="opacity-80 ml-0 pl-0">premium</span>
                    </span>
                </span>
                <div
                    style={{
                        boxShadow:
                            '28px 28px 42px #cecece, -28px -28px 42px #ffffff',
                    }}
                    className="rounded-3xl overflow-hidden my-8 transition-all lg:order-1 lg:row-span-2 lg:h-full lg:my-0 lg:col-span-7 z-10"
                >
                    <img
                        className="lg:object-cover md:h-[100%]"
                        src={process.env.PUBLIC_URL + '/assets/banner.webp'}
                        alt="banner"
                        srcSet=""
                    />
                </div>
                <div
                    style={{
                        boxShadow:
                            '28px 28px 42px #cecece, -28px -28px 42px #ffffff',
                    }}
                    className="transition-all bg-gray-200 py-6 px-8 rounded-3xl max-h-fit lg:order-3 float-top lg:col-span-5"
                >
                    <p id="aboutUs" className="md:text-xl text-justify">
                        Sử dụng các phần mềm, ứng dụng bản Crack gián tiếp gây
                        ra rất nhiều vụ lộ dữ liệu nguy hiểm trong thời gian gần
                        đây. Mặt khác, trải nghiệm người dùng của bản crack cũng
                        không thể đầy đủ được như bản chính hãng.
                        <br />
                        <br />
                        Do đó,
                        <span className="font-[billCorp] md:text-xl opacity-90 mx-1 font-normal md:font-bold">
                            trananh
                            <span className="opacity-80 ml-0 pl-0">
                                premium
                            </span>
                        </span>
                        ra đời với mong muốn giúp người Việt tiếp cận với các
                        phần mềm, ứng dụng bản quyền với giá rẻ hơn 20 - 90 %
                        giá gốc.
                    </p>
                </div>
            </div>
            <div className="flex justify-between mt-8 flex-col items-center lg:flex-row lg:mt-12">
                <p className="font-semibold text-sm md:text-2xl tracking-tight lg:text-xl">
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-red-600 mr-2"
                    />
                    Tài khoản đầy đủ tính năng Premium
                </p>
                <p className="font-semibold text-sm md:text-2xl tracking-tight lg:text-xl my-3 lg:mx-6">
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-red-600 mr-2"
                    />
                    Được update liên tục từ nhà phát hành
                </p>
                <p className="font-semibold text-sm md:text-2xl tracking-tight lg:text-xl">
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-red-600 mr-2"
                    />
                    Được bảo hành bởi
                    <span className="font-[billCorp] pt-2 py-1 opacity-90 mx-1 font-normal md:font-bold">
                        trananh
                        <span className="opacity-80 ml-0 pl-0">premium</span>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
