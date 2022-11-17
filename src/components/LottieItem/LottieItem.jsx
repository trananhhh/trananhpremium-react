import React from 'react';

const LottieItem = ({ titleF, titleS, subtitle, mediaSrc, width, height }) => {
    return (
        <div className="rounded-3xl px-3 bg-white flex items-center justify-center flex-col overflow-hidden">
            <div className="h-auto flex items-center justify-center ">
                <lottie-player
                    src={
                        process.env.PUBLIC_URL +
                        `/assets/lottie/${mediaSrc}.json`
                    }
                    background="transparent"
                    speed="1"
                    style={{ width: width ?? 500, height: height ?? 500 }}
                    loop
                    autoplay
                ></lottie-player>
            </div>
            <div className="text-container py-8 px-3 pt-0 text-center">
                <h3 className="guarantee-item__title font-bold text-3xl lg:text-2xl">
                    {titleF}
                    <br />
                    {titleS}
                </h3>
                <p className="guarantee-item__description mt-4 tracking-tight text-center leading-8 text-xl lg:text-lg">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default LottieItem;
