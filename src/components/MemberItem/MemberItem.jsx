import React from 'react';
import { useDispatch } from 'react-redux';
import { loading } from '../../redux/uiSlice';

export default function MemberItem({ name, username, imageSrc, disable }) {
    const dispatch = useDispatch();

    return (
        <div>
            <span
                onClick={() => {
                    if (!disable) {
                        dispatch(loading());
                        window.location.href = `https://www.instagram.com/${username}/`;
                    }
                }}
                className={
                    'xl:justify-start xl:items-center xl:flex-row bg-zinc-800 px-2 py-4 rounded-3xl flex flex-col items-center min-h-full' +
                    (disable
                        ? 'deactivated opacity-50'
                        : 'hover:drop-shadow-xl hover:shadow-2xl hover:opacity-80 transition')
                }
            >
                <img
                    draggable="false"
                    className="member-item__ava lg:max-h-24 mx-4 mt-2 mb-0 md:mb-2 max-h-24 max-w-full w-auto h-auto select-none rounded-full border-4 border-gray-300"
                    src={process.env.PUBLIC_URL + `/assets/avatar/${imageSrc}`}
                    alt={username}
                />
                <div className="flex flex-col xl:items-start pt-3 lg:pt-0 flex-1 min-h-max">
                    <p className="lg:text-md font-bold text-center text-white text-xs md:text-base hidden lg:block">
                        {name}
                    </p>
                    <p className="lg:text-emerald-50 text-center break-all text-white text-xs md:text-base">
                        @{username}
                    </p>
                </div>
            </span>
        </div>
    );
}
