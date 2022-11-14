import React from 'react';
import CountUpStatistic from '../../../components/CountUpStatistic/CountUpStatistic';
import data from '../../../home-data.json';

const Statistics = () => {
    return (
        <div className="grid divide-y-4 px-10 py-12 md:grid-cols-3 md:divide-x-4 md:divide-y-0 max-w-[1200px] mx-auto lg:gap-x-0">
            {data.statistics.map((item) => (
                <CountUpStatistic
                    key={item.title}
                    number={item.number}
                    text={item.title}
                />
            ))}
        </div>
    );
};

export default Statistics;
