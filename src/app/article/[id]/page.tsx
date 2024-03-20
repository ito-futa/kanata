// src/app/article/[id]/page.tsx
import { client } from "@/lib/client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ParallaxEffect from '../../components/ParallaxEffect';
import Background from '../../components/Background';

export default async function ArticlePage({ params }: { params: { id: string } }) {
    const id = params.id;
    const article = await client.get({ endpoint: "article", contentId: id });

    if (!article) return <div>Loading...</div>;

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}年${month}月${day}日`;
    };

    return (
        <div className="flex justify-center py-32">
            {/* Background */}
            <Background />
            {/* ParallaxEffect */}
            <ParallaxEffect />
            <div className="max-w-4xl">
                <h1 className="text-[32px] text-secondary font-bold">{article.title}</h1>
                <p className="flex items-center gap-4 mb-4">
                    <span className="bg-lightgrey px-2 py-1">{article.category}</span>
                    <span className="text-grey">{formatDate(article.createdAt)}</span>
                </p>
                <Image
                    src={article.thumbnail.url}
                    alt={article.title}
                    width={600}
                    height={400}
                    objectFit="cover"
                    className="mb-8"
                />
                <div
                    className="article-content mb-16"
                    dangerouslySetInnerHTML={{ __html: article.text }}
                />
                <Link href="/article" className="text-blue-500 hover:underline">
                    記事一覧に戻る
                </Link>
            </div>
        </div>
    );
}