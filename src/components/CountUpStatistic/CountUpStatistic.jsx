import React from 'react';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { renderCountUp } from '../../redux/uiSlice';

const CountUpStatistic = ({ number, text }) => {
    const isCountUp = useSelector((state) => state.ui.isCountUp);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="font-black text-6xl lg:text-7xl font-mono">
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
            <p className="mt-4 text-md lg:text-xl">{text}</p>
        </div>
    );
};

export default CountUpStatistic;
