import React from 'react';

const ScrollDownBtn = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="animate-bounce text-gray-200 font-bold bg-red-700 rounded-full px-4 h-12 flex items-center justify-center opacity-70 md:text-2xl md:p-8 lg:text-lg lg:p-6 hover:drop-shadow-xl transition-all ease-in-out drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
        >
            <i className="fa-solid fa-down-long text-lg mr-4"></i>
            Kéo xuống
        </div>
    );
};

export default ScrollDownBtn;
