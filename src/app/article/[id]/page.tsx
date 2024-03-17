import { client } from "@/lib/client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";

type ArticleType = {
    id: string;
    title: string;
    thumbnail: { url: string };
    text: string;
    createdAt: string;
    category: string;
};

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
            <h1>{article.title}</h1>
            <p>{formatDate(article.createdAt)}</p>
            <Image
                src={article.thumbnail.url}
                alt={article.title}
                width={600}
                height={400}
                objectFit="cover"
            />
            <div dangerouslySetInnerHTML={{ __html: article.text }} />
            <Link href="/article">
                一覧に戻る
            </Link>
        </div>
    );
}