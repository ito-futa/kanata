import React from 'react';

const NewsCard = ({ imageUrl, category, date, title, link }) => {
    return (
        <a href={link} className="w-80 bg-white rounded-lg border-solid border-2 border-grey flex-col overflow-hidden">
            <img className="w-full h-[180px] object-cover" src={imageUrl} alt="News" />
            <div className="flex w-full">
                <div className="flex-grow flex items-center justify-center bg-stone-300 px-4 py-0.5">
                    <div className="text-white text-base font-bold">{category}</div>
                </div>
                <div className="flex-grow flex items-center justify-center bg-zinc-100 px-4 py-0.5">
                    <div className="text-zinc-800 text-base font-bold">{date}</div>
                </div>
            </div>
            <div className="px-4 py-2">
                <div className="text-zinc-800 text-base font-bold">{title}</div>
            </div>
        </a>
    );
};

export default NewsCard;
