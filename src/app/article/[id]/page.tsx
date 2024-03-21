// src/app/article/[id]/page.tsx
import { client } from "@/lib/client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ParallaxEffect from '../../components/ParallaxEffect';
import Background from '../../components/Background';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

    // 改行を<br />に置換する処理
    const formattedText = article.text.replace(/<p><\/p>/g, '<br />');

    return (
        <div className="flex justify-center py-32">
            {/* Background */}
            <Background />
            {/* ParallaxEffect */}
            <ParallaxEffect />
            <div className="w-[1000px] bg-white p-8 rounded-md">
                <h1 className="text-[32px] text-secondary font-bold">{article.title}</h1>
                <p className="flex items-center gap-4 mb-4">
                    <span className="bg-lightgrey px-2 py-1">{article.category}</span>
                    <span className="text-grey">{formatDate(article.publishedAt)}</span>
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
                    className="article-content mb-8 leading-8"
                    dangerouslySetInnerHTML={{ __html: formattedText }} //article.textから変更
                />
                <div className="mb-8">
                    <hr />
                </div>
                <Link href="/article" className="text-blue-500 hover:underline">
                    記事一覧に戻る
                </Link>
            </div>
        </div>
    );
}