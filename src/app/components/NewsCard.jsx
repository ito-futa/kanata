import React from 'react';
import Image from "next/image";

const NewsCard = ({ imageUrl, category, date, title, link }) => {
    return (
        <a href={link} className="w-80 bg-white rounded-lg border-solid border-2 border-grey flex-col overflow-hidden hover:opacity-50">
            <Image
                src="/img/mv_bg-01.jpg"
                alt="Placeholder Image"
                width={320}
                height={180}
                className='h-[180px] object-cover'
            />
            <div className="flex w-full">
                <div className="w-[50%] flex items-center justify-center bg-grey px-2 py-0.5">
                    <div className="text-white text-base">{category}</div>
                </div>
                <div className="w-[50%] flex items-center justify-center bg-lightgrey px-2 py-0.5">
                    <div className="text-accessible text-base">{date}</div>
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="text-accessible text-base">{title}</div>
            </div>
        </a>
    );
};

export default NewsCard;
