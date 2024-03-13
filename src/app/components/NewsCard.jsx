// components/NewsCard.js
import React from 'react';

const NewsCard = ({ imageUrl, category, date, title }) => {
    return (
        <div className="w-80 bg-white rounded-lg border-2 border-neutral-400 flex-col justify-start items-start inline-flex">
            <img className="w-80 h-[180px] relative rounded-tl-lg rounded-tr-lg" src={imageUrl} alt="News" />
            <div className="w-80 justify-start items-center inline-flex">
                <div className="h-[30px] px-4 py-0.5 bg-stone-300 justify-center items-center gap-2.5 flex">
                    <div className="text-white text-base font-bold">{category}</div>
                </div>
                <div className="w-40 h-[30px] px-[30px] py-[3px] bg-zinc-100 justify-center items-center flex">
                    <div className="text-zinc-800 text-base font-bold">{date}</div>
                </div>
            </div>
            <div className="w-80 p-4 bg-white justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 text-zinc-800 text-base font-bold">{title}</div>
            </div>
        </div>
    );
};

export default NewsCard;