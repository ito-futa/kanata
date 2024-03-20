// src/app/components/ArticleCard.tsx
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

type ArticleCardProps = {
    imageUrl: string;
    category: string[];
    date: string;
    title: string;
    link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ imageUrl, category, date, title, link }) => {
    const getCategoryClass = (categoryName: string) => {
        return categoryName === 'Blog' ? 'bg-[#1fd3a3]' : categoryName === 'Information' ? 'bg-[#ff66b7]' : categoryName === 'Movie' ? 'bg-secondary' : 'bg-[#ffaa36]';
    };

    return (
        <Link href={link} className="w-80 bg-white rounded-lg shadow-md flex-col overflow-hidden hover:opacity-50 transition-opacity duration-300">
            <div>
                <Image
                    src={imageUrl}
                    alt={title}
                    width={320}
                    height={180}
                    className='h-[180px] object-cover'
                />
                <div className="flex w-full">
                    {category.map((category, index) => (
                        <div key={index} className={`${getCategoryClass(category)} w-[50%] flex items-center justify-center px-2 py-0.5`}>
                            <div className="text-white text-base">{category}</div>
                        </div>
                    ))}
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
