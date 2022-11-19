import React from 'react';

const AboutUs = () => {
    return (
        <div
            id="about-us"
            className="min-h-[75vh] md:min-h-[65vh] flex flex-col px-8 mt-[-4rem] max-w-[1200px] mx-auto lg:mt-8 lg:min-h-[50vh]"
        >
            <div className="grid lg:grid-cols-7 grid-flow-row-dense lg:gap-x-8">
                <span className="text-center font-bold mb-4 text-3xl lg:text-4xl md:text-5xl lg:order-2 lg:text-left lg:mb-4 lg:col-span-3 bg">
                    Về
                    <span className="font-[billCorp] opacity-90 mx-2">
                        trananh
                        <span className=" opacity-80 ml-0 pl-0">premium</span>
                    </span>
                </span>
                <div className="rounded-xl overflow-hidden .reveal drop-shadow-[-8px_8px_16px_rgba(0,0,0,0.25)] my-8 transition-all lg:order-1 lg:row-span-2 lg:h-full lg:my-0 lg:col-span-4">
                    <img
                        className="lg:object-cover md:h-[100%]"
                        src={process.env.PUBLIC_URL + '/assets/banner.png'}
                        alt="banner"
                        srcSet=""
                    />
                </div>
                <div className="transition-all bg-gray-200 p-4 rounded-xl max-h-fit ease-linear lg:order-3 float-top lg:col-span-3 shadow-inner">
                    <p id="aboutUs" className="md:text-xl">
                        Sử dụng các phần mềm, ứng dụng bản Crack gián tiếp gây
                        ra rất nhiều vụ lộ dữ liệu nguy hiểm trong thời gian gần
                        đây. Mặt khác, trải nghiệm người dùng của bản crack cũng
                        không thể đầy đủ được như bản chính hãng.
                        <br />
                        <br />
                        Do đó,
                        <span className="font-[billCorp] md:text-xl opacity-90 mx-1">
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
            <div className="flex justify-center mt-8 flex-col items-center lg:flex-row lg:mt-12">
                <p className="font-semibold text-sm md:text-2xl tracking-tight lg:text-xl">
                    <i className="text-red-600 mr-2 fa-solid fa-circle-check"></i>
                    Tài khoản đầy đủ tính năng Premium
                </p>
                <p className="font-semibold text-sm md:text-2xl tracking-tight lg:text-xl my-3 lg:mx-6">
                    <i className="text-red-600 mr-2 fa-solid fa-circle-check"></i>
                    Được update liên tục từ nhà phát hành
                </p>
                <p className="font-semibold text-sm md:text-2xl tracking-tight lg:text-xl">
                    <i className="text-red-600 mr-2 fa-solid fa-circle-check"></i>
                    Được bảo hành bởi
                    <span className="font-[billCorp] pt-2 py-1 opacity-90 mx-1">
                        trananh
                        <span className="opacity-80 ml-0 pl-0">premium</span>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
