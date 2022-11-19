import React from 'react';
import MemberItem from '../MemberItem/MemberItem';
import data from '../../home-data.json';

const Members = () => {
    return (
        <div className="flex items-center justify-center flex-col p-3">
            <div className="bg-zinc-900 rounded-3xl px-4 pt-10 pb-4 md:pb-10 w-full md:px-10 max-w-[1280px] mx-auto">
                <div className="text-container .reveal">
                    <h1 className="text-center font-bold mb-8 md:mb-12 text-3xl md:text-5xl text-gray-200 mx-6">
                        Thành viên của
                        <p className="font-[billCorp] rounded-xl opacity-90 tracking-tight md:tracking-normal mx-2">
                            trananh
                            <span className="opacity-70 mx-0 px-0">
                                premium
                            </span>
                        </p>
                    </h1>
                </div>
                <div className="items-center justify-center mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-8">
                    {data.members.map((member) => (
                        <MemberItem
                            key={member.username}
                            name={member.name}
                            username={member.username}
                            imageSrc={member.imageSrc}
                            disable={member.disable}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Members;
