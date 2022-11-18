import React from 'react';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { renderCountUp } from '../../redux/uiSlice';

const CountUpStatistic = ({ number, text }) => {
    const isCountUp = useSelector((state) => state.ui.isCountUp);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center mb-5">
            <div className="font-black text-6xl mt-4 lg:text-8xl font-['Roboto Condensed']">
                <CountUp
                    end={number}
                    preserveValue
                    scrollSpyOnce
                    enableScrollSpy
                    redraw
                >
                    {({ countUpRef, start }) => (
                        <ReactVisibilitySensor
                            onChange={() => {
                                if (!isCountUp) {
                                    dispatch(renderCountUp());
                                    start();
                                }
                            }}
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
