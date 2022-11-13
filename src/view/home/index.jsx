import React from 'react';
import HomeProductItem from '../../components/HomeProductItem/HomeProductItem';
import { RouteConfig } from '../../router';

import data from '../../home-data.json';

function Home() {
    return (
        <div className="bg-[#f2f2f2]">
            <div className="transition-all select-none" draggable="false">
                <div className="scroll-down-container fixed bottom-8 w-full flex justify-center z-10">
                    <a
                        id="go-to-top"
                        className="fixed bottom-8 right-8 text-gray-200 bg-red-700 text-white rounded-full transition w-12 h-12 flex items-center justify-center z-10 opacity-0 md:w-16 md:h-16 hover:drop-shadow-xl transition-all ease-in-out drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
                        href="#section1"
                    >
                        <i className="fa-solid fa-up-long text-lg md:text-2xl"></i>
                    </a>
                    <a
                        id="scroll-down-hint"
                        className="animate-bounce trans text-gray-200 font-bold bg-red-700 text-white rounded-full transition px-4 h-12 flex items-center justify-center opacity-70 md:text-2xl md:p-8 lg:text-lg lg:p-6 hover:drop-shadow-xl transition-all ease-in-out drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
                        href="#direct-btn"
                    >
                        <i className="fa-solid fa-down-long text-lg mr-4"></i>{' '}
                        Kéo xuống
                    </a>
                </div>
            </div>
            <div>
                <div
                    className={
                        'section bg-[url(' +
                        process.env.PUBLIC_URL +
                        "'/assets/backgrounds/section-1.png')] bg-no-repeat bg-cover bg-bottom min-h-[110vh] flex flex-col pt-56 flex lg:pt-0 lg:justify-center"
                    }
                    id="section1"
                >
                    <div className="flex flex-col justify-center ml-6 md:ml-10 lg:flex-row lg:mt-[-6rem]">
                        <div
                            id="logo-section-1"
                            className="img-container .reveal ml-[-2rem] md:ml-[-3.5rem]"
                        >
                            <img
                                className="max-h-36 md:max-h-64"
                                src={
                                    process.env.PUBLIC_URL +
                                    '/assets/logo-no-text.png'
                                }
                                alt="logo-no-text"
                                srcSet=""
                                draggable="false"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="main-text font-[billCorp] text-[12vw] mb-5 flex overflow-hidden h-24 md:h-36 lg:text-8xl">
                                <h1 className="title .reveal">trananh</h1>
                                <div className="box .reveal">
                                    <ul
                                        id="scroll-text-container"
                                        className="list-product opacity-50 "
                                    >
                                        <li className="title-ext">netflix</li>
                                        <li className="title-ext">spotify</li>
                                        <li className="title-ext">youtube</li>
                                        <li className="title-ext">grammarly</li>
                                        <li className="title-ext">spotify</li>
                                        <li className="title-ext">netflix</li>
                                        <li className="title-ext">premium</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="action-btns .reveal lg:mt-[-3rem]">
                                <a
                                    className="bg-red-700 text-white p-4 rounded-full font-bold md:text-2xl md:px-8 md:py-6 lg:text-lg lg:px-5 lg:py-4 hover:drop-shadow-[0px_4px_16px_rgba(0,0,0,0.3)] transition-all ease-in-out"
                                    id="direct-btn"
                                    href="https://www.instagram.com/trananh.spotify/"
                                >
                                    <i className="fa-solid fa-message mr-2"></i>
                                    Nhắn tin ngay
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section" id="section2">
                    <div className="min-h-[75vh] md:min-h-[65vh] flex flex-col px-8 mt-[-4rem] max-w-[1200px] mx-auto lg:mt-8 lg:min-h-[50vh]">
                        <div className="grid lg:grid-cols-7 grid-flow-row-dense lg:gap-x-8">
                            <h1 className="text-center font-bold mb-4 text-3xl lg:text-4xl md:text-5xl lg:order-2 lg:text-left lg:mb-4 lg:col-span-3">
                                Về
                                <span className="font-[billCorp] rounded-xl opacity-90 tracking-tight md:tracking-normal ml-2">
                                    trananh
                                    <span className=" opacity-80 ml-0 pl-0">
                                        premium
                                    </span>
                                </span>
                            </h1>
                            <div className="rounded-xl overflow-hidden .reveal drop-shadow-[-8px_8px_16px_rgba(0,0,0,0.25)] my-8 transition-all lg:order-1 lg:row-span-2 lg:h-full lg:my-0 lg:col-span-4">
                                <img
                                    className="lg:object-cover md:h-[100%]"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/banner.png'
                                    }
                                    alt="banner"
                                    srcSet=""
                                />
                            </div>
                            <div className="transition-all bg-gray-200 p-4 rounded-xl max-h-fit ease-linear lg:order-3 float-top lg:col-span-3 shadow-inner">
                                <i id="aboutUs" className="md:text-xl">
                                    Sử dụng các phần mềm, ứng dụng bản Crack
                                    gián tiếp gây ra rất nhiều vụ lộ dữ liệu
                                    nguy hiểm trong thời gian gần đây. Mặt khác,
                                    trải nghiệm người dùng của bản crack cũng
                                    không thể đầy đủ được như bản chính hãng.
                                    <br />
                                    <br />
                                    Do đó,
                                </i>
                                <span className="font-[billCorp] text-xl rounded-xl opacity-90 mr-1">
                                    trananh
                                    <span className="opacity-80 ml-0 pl-0">
                                        premium
                                    </span>
                                </span>
                                <i id="aboutUs" className="md:text-xl">
                                    ra đời với mong muốn giúp người Việt tiếp
                                    cận với các phần mềm, ứng dụng bản quyền với
                                    giá rẻ hơn 20 - 90 % giá gốc.
                                </i>
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
                                <span className="font-[billCorp] pt-2 py-1 rounded-xl opacity-90 ml-1">
                                    trananh
                                    <span className="opacity-80 ml-0 pl-0">
                                        premium
                                    </span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        'section bg-[url(' +
                        process.env.PUBLIC_URL +
                        "'/assets/backgrounds/section-3.png')] bg-no-repeat bg-cover bg-top min-h-[140vh] md:min-h-[120vh] px-8 flex justify-center items-center lg:min-h-[145vh]"
                    }
                    id="section3"
                >
                    <div className="flex-col flex justify-center items-center pt-8 max-w-[1200px] mx-auto lg:pt-0 w-full">
                        <div className="top-container flex items-center justify-center w-full">
                            <div className="text-container .reveal w-full">
                                <h1
                                    id="product-title"
                                    className="text-center font-bold mb-4 text-gray-200 px-8 text-3xl md:text-5xl md:mb-12"
                                >
                                    Sản phẩm
                                    <br />
                                    <span className="font-[billCorp] rounded-xl opacity-90 tracking-tight md:tracking-normal mx-1">
                                        trananh
                                        <span className="opacity-70 mx-0 px-0">
                                            premium
                                        </span>
                                    </span>
                                    <br />
                                    cung cấp
                                </h1>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-4 md:gap-x-6 md:gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:mt-4">
                            {data.map((item) => (
                                <HomeProductItem
                                    insta={item.insta}
                                    route={item.route}
                                    image={item.image}
                                    productName={item.productName}
                                    price={item.price}
                                    oldPrice={item.oldPrice}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div id="section4">
                    <div className="grid divide-y-4 px-10 py-12 md:grid-cols-3 md:divide-x-4 md:divide-y-0 max-w-[1200px] mx-auto lg:gap-x-0">
                        <div className="flex flex-col items-center justify-center mb-5">
                            <div
                                id="cus-count"
                                className="font-black text-6xl mt-4 lg:text-8xl font-['Roboto Condensed'] anima-counter"
                                data-anima-counter-start="0"
                                data-anima-counter-duration="64"
                                data-anima-counter-style="es-MX"
                            >
                                6016
                            </div>
                            <p className="mt-5 text-md lg:text-xl">
                                KHÁCH HÀNG SỬ DỤNG
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center mb-5">
                            <div
                                id="acc-count"
                                className="font-black text-6xl mt-4 lg:text-8xl font-['Roboto Condensed'] anima-counter"
                                data-anima-counter-start="0"
                                data-anima-counter-duration="64"
                                data-anima-counter-style="es-MX"
                            >
                                8576
                            </div>
                            <p className="mt-5 text-md lg:text-xl">
                                TÀI KHOẢN ĐƯỢC CẤP{' '}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center mb-5">
                            <div
                                id="prd-count"
                                className="font-black text-6xl mt-4 lg:text-8xl font-['Roboto Condensed'] anima-counter"
                                data-anima-counter-start="-10"
                                data-anima-counter-duration="2"
                                data-anima-counter-style="es-MX"
                            >
                                28
                            </div>
                            <p className="mt-5 text-md lg:text-xl">
                                THÁNG HOẠT ĐỘNG
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    id="section5"
                    className="flex items-center justify-center flex-col p-3"
                >
                    <div className="bg-zinc-900 rounded-3xl px-4 py-10 w-full md:px-10 max-w-[1280px] mx-auto">
                        <div className="text-container .reveal">
                            <h1 className="text-center font-bold mb-8 md:mb-12 text-3xl md:text-5xl text-gray-200 mx-8">
                                Thành viên của
                                <span className="font-[billCorp] rounded-xl opacity-90 tracking-tight md:tracking-normal">
                                    trananh
                                    <span className="opacity-70 mx-0 px-0">
                                        premium
                                    </span>
                                </span>
                            </h1>
                        </div>
                        <div className="member-container flex items-center justify-center mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-8">
                            <a
                                href="https://www.instagram.com/trananh.spotify/"
                                className="member-item xl:justify-start xl:items-center xl:flex-row hover:drop-shadow-xl hover:shadow-2xl hover:opacity-80 transition bg-zinc-800 px-2 py-4 min-h-full rounded-2xl flex flex-col items-center hover:drop-shadow-xl hover:shadow-2xl hover:opacity-80 transition"
                            >
                                <img
                                    draggable="false"
                                    className="member-item__ava lg:max-h-28 mx-2 max-h-40 max-w-full w-auto h-auto select-none rounded-full border-4 border-gray-300"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/avatar/trananh.spotify.jpg'
                                    }
                                    alt=""
                                />
                                <div className="flex flex-col xl:items-start">
                                    <p className="member-item__title lg:mt-0 lg:text-lg font-bold text-center break-all text-white text-sm md:text-base font-[Roboto] mt-4 ">
                                        𝗧𝗥𝗔𝗡𝗔𝗡𝗛 𝗕𝗔𝗡 𝗦𝗣𝗢𝗧𝗜𝗙𝗬
                                    </p>
                                    <p className="member-item__username lg:text-lg text-center break-all text-white text-sm md:text-base font-[Roboto] ">
                                        @trananh.spotify
                                    </p>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/trananhpremium/"
                                className="member-item xl:justify-start xl:items-center xl:flex-row hover:drop-shadow-xl hover:shadow-2xl hover:opacity-80 transition bg-zinc-800 px-2 py-4 min-h-full rounded-2xl flex flex-col items-center"
                            >
                                <img
                                    draggable="false"
                                    className="member-item__ava lg:max-h-28 mx-2 max-h-40 max-w-full w-auto h-auto select-none rounded-full border-4 border-gray-300"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/avatar/trananhpremium.png'
                                    }
                                    alt=""
                                />
                                <div className="flex flex-col xl:items-start">
                                    <p className="member-item__title lg:mt-0 lg:text-lg font-bold text-center break-all text-white text-sm md:text-base font-[Roboto] mt-4">
                                        𝗧𝗥𝗔𝗡𝗔𝗡𝗛 𝗕𝗔𝗡 𝗛𝗘𝗧
                                    </p>
                                    <p className="member-item__username lg:text-lg text-center break-all text-white text-sm md:text-base font-[Roboto]">
                                        @trananhpremium
                                    </p>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/trananh.netflixx/"
                                className="member-item xl:justify-start xl:items-center xl:flex-row hover:drop-shadow-xl hover:shadow-2xl hover:opacity-80 transition bg-zinc-800 px-2 py-4 min-h-full rounded-2xl flex flex-col items-center"
                            >
                                <img
                                    draggable="false"
                                    className="member-item__ava lg:max-h-28 mx-2 max-h-40 max-w-full w-auto h-auto select-none rounded-full border-4 border-gray-300"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/avatar/trananh.netflixx.png'
                                    }
                                    alt=""
                                />
                                <div className="flex flex-col xl:items-start">
                                    <p className="member-item__title lg:mt-0 lg:text-lg font-bold text-center break-all text-white text-sm md:text-base font-[Roboto] mt-4">
                                        𝗧𝗥𝗔𝗡𝗔𝗡𝗛 𝗕𝗔𝗡 𝗡𝗘𝗧𝗙𝗟𝗜𝗫{' '}
                                    </p>
                                    <p className="member-item__username lg:text-lg text-center break-all text-white text-sm md:text-base font-[Roboto]">
                                        @trananh.netflixx
                                    </p>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/trananh.netflixx/"
                                className="member-item xl:justify-start xl:items-center xl:flex-row transition bg-zinc-800 px-2 py-4 min-h-full rounded-2xl flex flex-co2 items-center deactivated opacity-50 flex flex-col items-center"
                            >
                                <img
                                    draggable="false"
                                    className="member-item__ava lg:max-h-28 mx-2 max-h-40 max-w-full w-auto h-auto select-none rounded-full border-4 border-gray-300"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/avatar/trananh.netflix.png'
                                    }
                                    alt=""
                                />
                                <div className="flex flex-col xl:items-start">
                                    <p className="member-item__title lg:mt-0 lg:text-lg font-bold text-center break-all text-white text-sm md:text-base font-[Roboto] mt-4">
                                        𝗧𝗥𝗔𝗡𝗔𝗡𝗛 𝗕𝗔𝗡 𝗡𝗘𝗧𝗙𝗟𝗜𝗫{' '}
                                    </p>
                                    <p className="member-item__username lg:text-lg text-center break-all text-white text-sm md:text-base font-[Roboto]">
                                        @trananh.netflix
                                    </p>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/taikhoan.spotifypremium/"
                                className="member-item xl:justify-start xl:items-center xl:flex-row hover:drop-shadow-xl hover:shadow-2xl hover:opacity-80 transition bg-zinc-800 px-2 py-4 min-h-full rounded-2xl flex flex-col items-center"
                            >
                                <img
                                    draggable="false"
                                    className="member-item__ava lg:max-h-28 mx-2 max-h-40 max-w-full w-auto h-auto select-none rounded-full border-4 border-gray-300"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/avatar/taikhoan.spotifypremium.jpg'
                                    }
                                    alt=""
                                />
                                <div className="flex flex-col xl:items-start">
                                    <p className="member-item__title lg:mt-0 lg:text-lg font-bold text-center break-all text-white text-sm md:text-base font-[Roboto] mt-4">
                                        Tài khoản SpotifyPremium
                                    </p>
                                    <p className="member-item__username lg:text-lg text-center break-all text-white text-sm md:text-base font-[Roboto]">
                                        @taikhoan.spotifypremium
                                    </p>
                                </div>
                            </a>
                            <a
                                href="https://www.instagram.com/trananh.netflixx/"
                                className="member-item xl:justify-start xl:items-center xl:flex-row transition bg-zinc-800 px-2 py-4 min-h-full rounded-2xl flex flex-co2 items-center deactivated opacity-50  flex flex-col items-center"
                            >
                                <img
                                    draggable="false"
                                    className="member-item__ava lg:max-h-28 mx-2 max-h-40 max-w-full w-auto h-auto select-none rounded-full border-4 border-gray-300"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/avatar/netflik.giagievai.jpg'
                                    }
                                    alt=""
                                />
                                <div className="flex flex-col xl:items-start">
                                    <p className="member-item__title lg:mt-0 lg:text-lg font-bold text-center break-all text-white text-sm md:text-base font-[Roboto] mt-4">
                                        Netflik giá giẻ vải{' '}
                                    </p>
                                    <p className="member-item__username lg:text-lg text-center break-all text-white text-sm md:text-base font-[Roboto]">
                                        @netflik.giagievai
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    id="section6"
                    className="flex items-center justify-center flex-col pt-10 px-8 max-w-[1200px] mx-auto lg:px-0"
                >
                    <div className="text-container .reveal">
                        <h1 className="text-center font-bold mb-8 text-3xl lg:text-4xl md:text-5xl">
                            Cam kết từ chúng tôi
                        </h1>
                    </div>
                    <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                        <div className="rounded-3xl px-3 bg-white flex items-center justify-center flex-col overflow-hidden">
                            <div className="h-auto flex items-center justify-center ">
                                <lottie-player
                                    className="ml-[-36px]"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/lottie/process.json'
                                    }
                                    background="transparent"
                                    speed="1"
                                    // stylewidth: 500px; height: 300px;"
                                    style={{ width: 500, height: 300 }}
                                    loop
                                    autoplay
                                ></lottie-player>
                            </div>
                            <div className="text-container py-8 px-3 pt-0 text-center">
                                <h3 className="guarantee-item__title font-bold text-3xl">
                                    Xử lí
                                    <br />
                                    nhanh chóng
                                </h3>
                                <p className="guarantee-item__description mt-4 tracking-tight text-center leading-8 text-xl">
                                    Giao tài khoản ngay trong vòng 1h sau khi
                                    nhận được thanh toán.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl px-3 bg-white flex items-center justify-center flex-col overflow-hidden">
                            <div className="h-auto flex items-center justify-center ">
                                <lottie-player
                                    src="https://lottie.host/2fe52d38-7b4c-4b58-880d-387bb2f8318a/3L05JO3KMd.json"
                                    background="transparent"
                                    speed="1"
                                    style={{ width: 360, height: 300 }}
                                    loop
                                    autoplay
                                ></lottie-player>
                            </div>
                            <div className="text-container py-8 px-3 pt-0 text-center">
                                <h3 className="guarantee-item__title font-bold text-3xl">
                                    Ổn định
                                    <br />
                                    nhất thị trường{' '}
                                </h3>
                                <p className="guarantee-item__description mt-4 tracking-tight text-center leading-8 text-xl">
                                    Cam kết giá rẻ và ổn định nhất thị trường,
                                    tiết kiệm lên đến 90% so với giá gốc.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-3xl px-3 bg-white flex items-center justify-center flex-col overflow-hidden">
                            <div className="h-auto flex items-center justify-center ">
                                <lottie-player
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/lottie/stable.json'
                                    }
                                    background="transparent"
                                    speed="1"
                                    style={{ width: 240, height: 300 }}
                                    loop
                                    autoplay
                                ></lottie-player>
                            </div>
                            <div className="text-container py-8 px-3 pt-0 text-center">
                                <h3 className="guarantee-item__title font-bold text-3xl">
                                    Bảo hành
                                    <br />1 đổi 1
                                </h3>
                                <p className="guarantee-item__description mt-4 tracking-tight text-center leading-8 text-xl">
                                    Nâng cấp lại hoặc đổi tài khoản mới ngay lập
                                    tức nếu tài khoản phát sinh lỗi.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-3xl px-3 bg-white flex items-center justify-center flex-col overflow-hidden">
                            <div className="h-auto flex items-center justify-center mt-6 mb-10">
                                <lottie-player
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/lottie/support.json'
                                    }
                                    background="transparent"
                                    speed="1"
                                    style={{ width: 240, height: 240 }}
                                    loop
                                    autoplay
                                ></lottie-player>
                            </div>
                            <div className="text-container py-8 px-3 pt-0 text-center">
                                <h3 className="guarantee-item__title font-bold text-3xl">
                                    Sẵn sàng
                                    <br />
                                    hỗ trợ
                                </h3>
                                <p className="guarantee-item__description mt-4 tracking-tight text-center leading-8 text-xl">
                                    Chúng tôi sẵn sàng hỗ trợ mọi khó khăn trong
                                    quá trình sử dụng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="flex items-center justify-center flex-col mt-20">
                    <div className="grid gap-8 px-8 md:grid-cols-2 lg:grid-cols-7 max-w-[1280px] mx-auto">
                        <div className="md:row-span-2 lg:row-span-1 lg:col-span-3 lg:pr-20">
                            <div className="md:mb-8 lg:mb-0">
                                <img
                                    className="scale-110 mt-[-40px]"
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/assets/LOGO-dark.png'
                                    }
                                    alt=""
                                />
                            </div>
                            <p className="border-l-4 border-red-700 text-lg tracking-tigh italic leading-6 text-justify bg-gray-200 rounded-2xl p-6">
                                Sứ mệnh của
                                <span className="font-[billCorp] pt-2 py-1 rounded-xl opacity-90">
                                    trananh
                                    <span className="opacity-80 ml-0 pl-0">
                                        premium
                                    </span>
                                </span>{' '}
                                là đem đến cho người Việt cơ hội tiếp cận với
                                các công cụ phục vụ làm việc, học tập, giải trí
                                với giá rẻ hơn lên đến 90% so với giá gốc.
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
                            <span className="opacity-80 ml-0 pl-0">
                                premium
                            </span>
                        </span>
                        . All Rights Reserved.
                    </span>
                </footer>
            </div>
        </div>
    );
}

export default Home;
