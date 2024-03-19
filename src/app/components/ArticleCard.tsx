// src/app/components/ArticleCard.tsx
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

type ArticleCardProps = {
    imageUrl: string;
    category: string;
    date: string;
    title: string;
    link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ imageUrl, category, date, title, link }) => {
    const categoryClass = category === 'blog' ? 'bg-black' : category === 'Information' ? 'bg-secondary' : 'bg-grey';

    return (
        <Link href={link} className="w-80 bg-white rounded-lg border-solid border-2 border-grey flex-col overflow-hidden hover:opacity-50 transition-opacity duration-300">
            <div>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={320}
                    height={180}
                    className='h-[180px] object-cover'
                />
                <div className="flex w-full">
                    <div className={`${categoryClass} w-[50%] flex items-center justify-center px-2 py-0.5`}>
                        <div className="text-white text-base">{category}</div>
                    </div>
                    <div className="w-[50%] flex items-center justify-center bg-lightgrey px-2 py-0.5">
                        <div className="text-accessible text-base">{date}</div>
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="text-accessible text-base">{title}</div>
                </div>
            </div>
        </Link>
    );
};

export default ArticleCard;
