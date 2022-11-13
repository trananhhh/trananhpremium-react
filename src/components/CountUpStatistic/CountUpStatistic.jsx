import React from 'react';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

const CountUpStatistic = ({ number, text }) => {
    return (
        <div className="flex flex-col items-center justify-center mb-5">
            <div className="font-black text-6xl mt-4 lg:text-8xl font-['Roboto Condensed']">
                <CountUp end={number}>
                    {({ countUpRef, start }) => (
                        <ReactVisibilitySensor
                            onChange={start}
                            delayedCall={true}
                        >
                            <span ref={countUpRef} />
                        </ReactVisibilitySensor>
                    )}
                </CountUp>
            </div>
            <p className="mt-5 text-md lg:text-xl">{text}</p>
        </div>
    );
};

export default CountUpStatistic;
