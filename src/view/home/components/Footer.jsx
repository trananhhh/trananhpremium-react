import React from 'react';

const Footer = () => {
    return (
        <footer className="flex items-center justify-center flex-col mt-20">
            <div className="grid gap-8 px-8 md:grid-cols-2 lg:grid-cols-7 max-w-[1280px] mx-auto">
                <div className="md:row-span-2 lg:row-span-1 lg:col-span-3 lg:pr-20">
                    <div className="md:mb-8 lg:mb-0">
                        <img
                            className="scale-110 mt-[-40px]"
                            src={
                                process.env.PUBLIC_URL + '/assets/LOGO-dark.png'
                            }
                            alt=""
                        />
                    </div>
                    <p className="border-l-4 border-red-700 text-lg tracking-tight italic leading-6 text-justify bg-gray-200 rounded-2xl p-6">
                        Sứ mệnh của
                        <span className="font-[billCorp] pt-2 py-1 rounded-xl opacity-90 mx-2">
                            trananh
                            <span className="opacity-80 ml-0 pl-0">
                                premium
                            </span>
                        </span>
                        là đem đến cho người Việt cơ hội tiếp cận với các công
                        cụ phục vụ làm việc, học tập, giải trí với giá rẻ hơn
                        lên đến 90% so với giá gốc.
                    </p>
                </div>
                <div className="md:mt-12 lg:mt-0 lg:col-span-2">
                    <h4 className="border-l-4 border-red-700 pl-2 text-xl font-bold mb-4">
                        Liên hệ
                    </h4>
                    <p>
                        Hotline:{' '}
                        <a href="tel:0982202602" className="font-bold">
                            0982.202.602
                        </a>
                    </p>
                    <p>
                        Email:{' '}
                        <a
                            href="mailto:support@trananhpremium.com"
                            className="font-bold"
                        >
                            support@trananhpremium.com
                        </a>
                    </p>
                </div>
                <div className="w-full lg:col-span-2">
                    <h4 className="border-l-4 border-red-700 pl-2 text-xl font-bold mb-4">
                        Nhận thông tin ưu đãi mới nhất
                    </h4>
                    <div className="w-full md:flex lg:flex-col">
                        <div className="max-w-20">
                            <input
                                className="px-4 py-3 rounded-xl mb-4 w-full"
                                type="text"
                                name="name"
                                placeholder="Nhập Tên của bạn"
                            />
                            <input
                                className="px-4 py-3 rounded-xl mb-4 w-full"
                                type="text"
                                name="name"
                                placeholder="Nhập Email của bạn"
                            />
                        </div>
                        <button className="bg-red-700 text-white px-4 py-4 rounded-full font-bold md:w-[240px] md:h-[48px] md:ml-4 md:py-2 lg:w-[140px] lg:ml-0 hover:drop-shadow-xl transition-all ease-in-out">
                            <i className=" fa-solid fa-paper-plane mr-2"></i>
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <span className="text-xs md:text-base text-gray-600 pb-12 pt-8 px-12 text-center">
                © 2020 by
                <span className="font-[billCorp] rounded-xl opacity-90">
                    trananh
                    <span className="opacity-80 ml-0 pl-0">premium</span>
                </span>
                . All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;
