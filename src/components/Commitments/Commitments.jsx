import React from 'react';
import LottieItem from '../../components/LottieItem/LottieItem';

import data from '../../home-data.json';

const Commitments = () => {
    return (
        <div className="flex items-center justify-center flex-col pt-10 px-8 max-w-[1200px] mx-auto lg:px-0">
            <div className="text-container .reveal">
                <h1 className="text-center font-extrabold font-sans text-3xl md:text-5xl md:mb-6">
                    Cam kết từ chúng tôi
                </h1>
            </div>
            <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {data.commitments.map((commitment) => (
                    <LottieItem
                        key={commitment.mediaSrc}
                        titleF={commitment.titleF}
                        titleS={commitment.titleS}
                        subtitle={commitment.subtitle}
                        mediaSrc={commitment.mediaSrc}
                        width={commitment.width}
                        height={commitment.height}
                    />
                ))}
            </div>
        </div>
    );
};

export default Commitments;
