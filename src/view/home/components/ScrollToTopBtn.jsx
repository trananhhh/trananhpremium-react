import React from 'react';

const ScrollToTopBtn = ({ onClick }) => {
    return (
        <div
            className="fixed bottom-8 right-8 text-gray-200 bg-red-700 rounded-full w-12 h-12 flex items-center justify-center z-10 md:w-16 md:h-16 hover:drop-shadow-xl transition-all ease-in-out drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
            onClick={onClick}
        >
            <i className="fa-solid fa-up-long text-lg md:text-2xl"></i>
        </div>
    );
};

export default ScrollToTopBtn;
